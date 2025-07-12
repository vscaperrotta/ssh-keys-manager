/**
 * Utilities for the SSH Key Manager server
 *
 * @author Vittorio Scaperrotta
 * @date 10-Jul-2025
 */
const path = require("path");
const os = require("os");

// SSH directory path
const sshDir = path.join(os.homedir(), ".ssh");

/**
 * Ensures SSH directory exists and creates it if necessary
 * @returns {boolean} True if directory exists or was created successfully
 */
const ensureSSHDirExists = () => {
  const fs = require("fs");

  try {
    // Check if user's home directory exists
    if (!fs.existsSync(os.homedir())) {
      console.error(`User home directory doesn't exist: ${os.homedir()}`);
      return false;
    }

    // Check if SSH directory exists
    if (!fs.existsSync(sshDir)) {
      console.log(`SSH directory doesn't exist, creating: ${sshDir}`);
      fs.mkdirSync(sshDir, { mode: 0o700 });
      console.log(`SSH directory created successfully: ${sshDir}`);
    }

    // Verify directory permissions
    try {
      const stats = fs.statSync(sshDir);
      const permissions = stats.mode & 0o777;

      if (permissions !== 0o700) {
        console.log(`Fixing SSH directory permissions: ${permissions.toString(8)} -> 700`);
        fs.chmodSync(sshDir, 0o700);
      }
    } catch (permErr) {
      console.error(`Error verifying/setting permissions: ${permErr.message}`);
    }

    console.log(`SSH directory verified: ${sshDir}`);
    return true;
  } catch (err) {
    console.error(`Error creating SSH directory: ${err.message}`);
    return false;
  }
};

module.exports = {
  sshDir,
  ensureSSHDirExists
};
