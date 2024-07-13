import { app } from 'electron'
import { createWindow } from './window'
import { registerIpc } from './ipc'
import { registerShortcut } from './shortCut'
import ignoreMouseEvents from './ignoreMouseEvents'

app.whenReady().then(() => {
  const win = createWindow()
  registerIpc(win)
  registerShortcut(win)
  ignoreMouseEvents(win)
})
