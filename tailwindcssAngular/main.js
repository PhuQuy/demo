const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        show: false
    });

    mainWindow.maximize();

    // mainWindow.loadURL(
    //     // url.format({
    //     //   pathname: path.join(__dirname, `/dist/tailwindcssAngular/browser/index.html`),
    //     //   protocol: "file:",
    //     //   slashes: true
    //     // })
    //     'http://localhost:4000/'
    // );


    mainWindow.loadURL('http://localhost:4000/');
    // mainWindow.loadFile(path.join(__dirname, `/dist/tailwindcssAngular/browser/index.html`));
    // mainWindow.loadFile(`dist/tailwindcssAngular/browser/index.html`);

    // Open the DevTools.
    //   mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    })

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindow()
})

