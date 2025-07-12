/**
 * Main server for SSH Key Manager
 */
const express = require("express");
const cors = require("cors");
const utils = require("./utils");
const keysRoutes = require("./keys");

const app = express();
const PORT = process.env.PORT || 5001;

// Ensure SSH directory exists
utils.ensureSSHDirExists();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/keys", keysRoutes);

// Generic error handling to prevent process termination
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

const server = app.listen(PORT, () => {
  console.log(`🔐 SSH Key Manager server running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`⚠️ Port ${PORT} is already in use. Trying another port.`);
    const newPort = PORT + 1;
    console.log(`Attempting to listen on port ${newPort}...`);
    app.listen(newPort, () => {
      console.log(`🔐 SSH Key Manager server running on http://localhost:${newPort}`);
    });
  } else {
    console.error('Server error:', err);
  }
});
