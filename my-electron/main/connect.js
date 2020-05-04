// 引入主进程通信模块
const { ipcMain, BrowserWindow } = require('electron')
const path = require('path')
// 同步
ipcMain.on('sync', function (event, data) {
  console.log(data, '1221')
  event.returnValue = '我收到了你的同步数据了' // 返回数据给渲染进程
})

// 异步
ipcMain.on('async', (event, data) => {
  console.log(data, '1212')
   event.sender.send('reply', '我收到了你的异步数据了')
})
var win = null
ipcMain.on('createwindow', (event, data) => {
  // 获取当前窗口的id
  const winId = BrowserWindow.getFocusedWindow().id
  win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: { nodeIntegration: true }
  })
  win.loadURL(path.join('file:', __dirname, '../src/newWindowContent.html'))
  // 将信息传递给新的窗口
  win.webContents.openDevTools()
  win.webContents.on('did-finish-load', function () {
    win.webContents.send('toNew', data, winId)
  })
})