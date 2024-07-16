import { app } from 'electron'
import ignoreMouseEvents from './ignoreMouseEvents'
import { registerIpc } from './ipc'
import { registerShortcut } from './shortCut'
import { createWindow } from './window'

app.whenReady().then(() => {
  const win = createWindow()
  registerIpc(win)
  registerShortcut(win)
  ignoreMouseEvents(win)
})
