import { app, BrowserWindow, globalShortcut, ipcMain, IpcMainInvokeEvent } from 'electron'
import { getByNameWindow } from './windows'
const config = {
  search: ''
}
// 检查快捷键是否注册成功
ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: 'search', shortCut: string) => {
  if (config.search) globalShortcut.unregister(config.search)
  config.search = shortCut

  switch (type) {
    case 'search':
      return registerSearchShortCur(getByNameWindow('search'), shortCut)
  }
})

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
