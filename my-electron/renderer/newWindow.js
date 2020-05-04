const { ipcRenderer } = require('electron')
const { BrowserWindow } = require('electron').remote  // 需要在remote中使用

ipcRenderer.on('toNew', (event, data, id) => {
  console.log(data, '我接受到了,你给予我的数据')
  // 向之前的浏览器发送数据
  const formerWin = BrowserWindow.fromId(id)
  formerWin.webContents.send('toformer', '这是新浏览器给你的数据')
})
