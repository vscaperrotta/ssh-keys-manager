// electron-main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const pkgJson = require('../../package.json');

let win;

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(__dirname, '../../build/icon.png'),
    title: pkgJson.displayName,
    resizable: true,
    width: 1366,
    height: 820,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../preload/index.js'),
    },
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173');
    win.webContents.openDevTools()
  } else {
    win.loadFile(path.join(__dirname, 'dist/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
