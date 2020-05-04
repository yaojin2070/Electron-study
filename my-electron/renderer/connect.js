// 获取通信的方法
const { ipcRenderer } = require('electron')

const sync = document.getElementById('sync')
const async = document.getElementById('async')
const connectBrowser = document.getElementById('connectBrowser')

// 同步
sync.onclick = function() {
  const replyMsg = ipcRenderer.sendSync('sync', '我发送了同步的数据给主进程')
  console.log(replyMsg) // 这是主进程返回的数据
}
async.onclick = function() {
  ipcRenderer.send('async', '我发送了异步的数据')
  // 监听主进程返回的数据
  ipcRenderer.on('reply', (event, data) => {
    console.log(data)
  })
}

connectBrowser.onclick = function () {
  ipcRenderer.send('createwindow', '给予新窗口的消息')
}
ipcRenderer.on('toformer', (event, data) => {
  console.log(data, '收到了新浏览器给予的数据')
})

