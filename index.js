const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

let win = null;

app.on('ready', () => {
  let displays = screen.getAllDisplays();
  win = new BrowserWindow({
    x: displays[1].workArea.x,
    y: displays[1].workArea.y,
    show: false,
    alwaysOnTop: false,
    frame: false,
    removeMenu: true,
  });

  win.maximize();
  win.webContents.openDevTools();
  
  win.loadFile(path.join(__dirname, "public/index.html"));
  win.on('ready-to-show', () =>{
    win.show();
  });
});
