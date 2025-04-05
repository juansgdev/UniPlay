const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        fullscreen: true,
        titleBarStyle: 'hidden',
    });

    win.loadFile('./dist/uniplay/browser/index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })
});
