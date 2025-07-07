const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const express = require("express");
const cors = require("cors");
const os = require("os");
const { execSync } = require("child_process");

const app = express();
const PORT = 5000;
const sshDir = path.join(os.homedir(), ".ssh");

app.use(cors());
app.use(express.json());

/**
 * GET /keys
 * Legge tutte le chiavi dalla cartella ~/.ssh
 */
app.get("/keys", async (req, res) => {
  try {
    const files = fs.readdirSync(sshDir);

    const keys = await Promise.all(
      files
        .filter(file => !file.endsWith(".pub")) // Solo chiavi private
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
 * Crea una nuova coppia di chiavi
 * Body JSON:
 * { "name": "mykey", "type": "rsa", "bits": 4096, "comment": "email@example.com" }
 */
app.post("/keys", (req, res) => {
  const { name, type = "rsa", bits = 4096, comment = "" } = req.body;
  const fullPath = path.join(sshDir, name);

  try {
    const cmd = `ssh-keygen -t ${type} -b ${bits} -C "${comment}" -f "${fullPath}" -N ""`;
    execSync(cmd, { stdio: "ignore" });

    res.status(201).json({ message: `Chiave ${name} creata con successo.` });
  } catch (err) {
    console.error("Errore creazione chiave:", err.message);
    res.status(500).json({ error: "Errore durante la creazione della chiave." });
  }
});

/**
 * DELETE /keys/:name
 * Elimina la chiave privata e pubblica
 */
app.delete("/keys/:name", (req, res) => {
  const name = req.params.name;
  const privPath = path.join(sshDir, name);
  const pubPath = privPath + ".pub";

  try {
    if (fs.existsSync(privPath)) fs.unlinkSync(privPath);
    if (fs.existsSync(pubPath)) fs.unlinkSync(pubPath);

    res.json({ message: `Chiave ${name} eliminata.` });
  } catch (err) {
    console.error("Errore eliminazione chiave:", err.message);
    res.status(500).json({ error: "Errore durante l'eliminazione della chiave." });
  }
});

app.listen(PORT, () => {
  console.log(`🔐 Server SSH Key Manager attivo su http://localhost:${PORT}`);
});
