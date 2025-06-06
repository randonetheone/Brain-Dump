const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    icon: path.join(__dirname, 'assets', 'icon.ico'),
    frame:true
  });

  win.loadFile('index.html');
  win.maximize();
  win.setMenu(null);
   icon: path.join(__dirname, 'assets', 'icon.ico')
}

app.whenReady().then(createWindow);
