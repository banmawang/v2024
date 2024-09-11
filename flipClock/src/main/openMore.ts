import { app, BrowserWindow } from 'electron'

const gotTheLock = app.requestSingleInstanceLock()

export const openMore = (mainWindow: BrowserWindow) => {
  if (!gotTheLock) {
    app.quit()
  } else {
    app.on('second-instance', () => {
      // Someone tried to open a second instance, we should focus the main window.
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore()
        mainWindow.focus()
      }
    })
  }
}
