const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1000, height: 700 });

  mainWindow.loadURL("https://abhijain-music.netlify.app/");

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);
