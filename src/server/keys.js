/**
 * SSH keys routes handler
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const os = require("os");
const { execSync } = require("child_process");
const utils = require("./utils");

const router = express.Router();
const sshDir = utils.sshDir;

/**
 * GET /keys
 * Read all SSH keys from ~/.ssh directory
 */
router.get("/", async (req, res) => {
  try {
    const files = fs.readdirSync(sshDir);

    const keys = await Promise.all(
      files
        .filter(file => !file.endsWith(".pub"))
        .map(async (privKeyFile) => {
          const pubKeyFile = privKeyFile + ".pub";
          const privPath = path.join(sshDir, privKeyFile);
          const pubPath = path.join(sshDir, pubKeyFile);

          let type = null;
          let note = null;
          let pubKeyValue = null;
          let privKeyValue = null;

          const hasPriv = fs.existsSync(privPath);
          const hasPub = fs.existsSync(pubPath);

          if (hasPub) {
            try {
              const pubContent = fs.readFileSync(pubPath, "utf8").trim();
              const parts = pubContent.split(" ");
              type = parts[0];
              pubKeyValue = pubContent;
              note = parts[2] || "";
            } catch (err) {
              console.error(`Errore leggendo ${pubKeyFile}:`, err.message);
            }
          }

          if (hasPriv) {
            try {
              privKeyValue = fs.readFileSync(privPath, "utf8").trim();
            } catch (err) {
              console.error(`Errore leggendo ${privKeyFile}:`, err.message);
            }
          }

          const stat = fs.statSync(privPath);

          return {
            id: crypto.createHash("md5").update(privKeyFile).digest("hex"),
            name: privKeyFile,
            type,
            file: privPath,
            note,
            status: hasPriv && hasPub ? "complete" : hasPriv ? "only priv" : "unknown",
            creation: stat.birthtime,
            publicKey: pubKeyValue,
            privateKey: privKeyValue,
          };
        })
    );

    res.json({ keys });
  } catch (err) {
    console.error("Errore:", err);
    res.status(500).json({ error: "Errore nella lettura delle chiavi SSH." });
  }
});

/**
 * POST /keys
 * Create a new key pair
 * JSON Body:
 * { "name": "mykey", "type": "rsa", "bits": 4096, "comment": "email@example.com" }
 */
router.post("/", (req, res) => {
  const { name, type = "rsa", bits = 4096, comment = "" } = req.body;  // Input validation
  if (!name) {
    return res.status(400).json({ error: "Key name is required." });
  }

  // Check if name contains dangerous special characters
  if (!/^[a-zA-Z0-9_\-\.]+$/.test(name)) {
    return res.status(400).json({ error: "Key name can only contain letters, numbers, underscores, hyphens and dots." });
  }

  // Key type validation  const validTypes = ["rsa", "ed25519", "dsa", "ecdsa"];
  if (!validTypes.includes(type)) {
    return res.status(400).json({ error: "Invalid key type." });
  }

  // Ensure SSH directory exists before creating the key
  const fs = require("fs");
  if (!fs.existsSync(sshDir)) {
    try {
      fs.mkdirSync(sshDir, { mode: 0o700 });
      console.log(`SSH directory created: ${sshDir}`);
    } catch (dirErr) {
      console.error(`Error creating SSH directory: ${dirErr.message}`);
      return res.status(500).json({ error: "Unable to create SSH directory." });
    }
  }

  const fullPath = path.join(sshDir, name); try {
    if (fs.existsSync(fullPath)) {
      return res.status(400).json({ error: `A key with name '${name}' already exists.` });
    }

    console.log(`Creating key ${name}...`);
    const cmd = `ssh-keygen -t ${type} -b ${bits} -C "${comment}" -f "${fullPath}" -N ""`;

    const output = execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
    console.log(`Key creation output: ${output}`);

    res.status(201).json({ message: `Key ${name} created successfully.` });
  } catch (err) {
    console.error("Key creation error:", err.message);
    console.error("Stack trace:", err.stack);
    if (err.stderr) {
      console.error("Error details:", err.stderr.toString());
    }
    res.status(500).json({ error: "Error creating key: " + err.message });
  }
});

/**
 * DELETE /keys/:name
 * Delete private and public key
 */
router.delete("/:name", (req, res) => {
  const name = req.params.name;
  const privPath = path.join(sshDir, name);
  const pubPath = privPath + ".pub";

  try {
    if (fs.existsSync(privPath)) fs.unlinkSync(privPath);
    if (fs.existsSync(pubPath)) fs.unlinkSync(pubPath);

    res.json({ message: `Key ${name} deleted.` });
  } catch (err) {
    console.error("Key deletion error:", err.message);
    res.status(500).json({ error: "Error deleting the key." });
  }
});

module.exports = router;
