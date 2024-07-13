import { app, BrowserWindow, dialog, globalShortcut, ipcMain, IpcMainInvokeEvent } from 'electron'
const config = {
  search: ''
}
export const registerShortcut = (win: BrowserWindow) => {
  // 检查快捷键是否注册成功
  ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: 'search', shortCut: string) => {
    // if (config.search) globalShortcut.unregister(config.search)
    config.search = shortCut

    switch (type) {
      case 'search':
        return registerSearchShortCur(win, shortCut)
    }
  })
}

function registerSearchShortCur(win: BrowserWindow, shortCut: string) {
  return globalShortcut.register(shortCut, () => {
    win.isVisible() ? win.hide() : win.show()
  })
}

app.on('will-quit', () => {
  // 注销快捷键
  // globalShortcut.unregister('CommandOrControl+X')
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
