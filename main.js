const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL('http://localhost:8000/index.html');
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  app.quit()
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})