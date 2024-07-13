import { app, BrowserWindow, dialog, globalShortcut, ipcMain, IpcMainEvent } from 'electron'
const config = {
  search: ''
}
export const registerShortcut = (win: BrowserWindow) => {
  // 检查快捷键是否注册成功
  ipcMain.on('shortCut', (_event: IpcMainEvent, type: 'search', shortCut: string) => {
    if (config.search) globalShortcut.unregister(config.search)
    config.search = shortCut

    switch (type) {
      case 'search':
        registerSearchShortCur(win, shortCut)
        break
    }
  })
}

function registerSearchShortCur(win: BrowserWindow, shortCut: string) {
  const ret = globalShortcut.register(shortCut, () => {
    win.isVisible() ? win.hide() : win.show()
  })

  if (!ret) dialog.showErrorBox('温馨提示', '快捷键注册失败')
}

app.on('will-quit', () => {
  // 注销快捷键
  // globalShortcut.unregister('CommandOrControl+X')
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
