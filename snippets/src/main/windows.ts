import { app, BrowserWindow, IpcMainEvent, IpcMainInvokeEvent } from 'electron'
import { createWindow, OptionsType } from './createWindow'

export const config = {
  search: {
    id: 0,
    options: {
      initShwo: true,
      hash: '',
      openDevTools: false
    }
  },
  code: {
    id: 0,
    options: {
      initShow: false,
      width: 600,
      height: 400,
      frame: true,
      transparent: false,
      openDevTools: false,
      hash: '/#config/category/contentList'
    }
  },
  config: {
    id: 0,
    options: {
      initShwo: false,
      width: 600,
      height: 400,
      frame: true,
      transparent: false,
      openDevTools: false,
      hash: '/#config'
    }
  }
} as Record<WindowNameType, { id: number; options: OptionsType }>

/**
 * 根据名称获取窗口
 * @param name 窗口名称
 * @returns
 */
export const getByNameWindow = (name: WindowNameType) => {
  let win = BrowserWindow.fromId(config[name].id)
  if (!win) {
    win = createWindow(config[name].options)
    config[name].id = win.id
  }
  return win
}

/**
 * 根据事件源获取窗口
 * @param event 事件源
 * @returns
 */
export const getWindowByEvent = (event: IpcMainEvent | IpcMainInvokeEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}

app.whenReady().then(() => {
  getByNameWindow('search')
  getByNameWindow('config')
})
