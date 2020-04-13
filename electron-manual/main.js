// 引入
var electron = require('electron')
// 引入应用程序
const { app } = require('electron')
// 引用控制浏览器窗口
const { BrowserWindow } = require('electron')

// 监听应用准备完成的事件
app.on('ready', function() {
  // 创建BrowserWindow的实例, 并设置宽高
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  // mainWindow.loadFile('index.html');   /*把index.html加载到窗口里面*/

  // 这个是加载本地文件(有node的知识在里面)
  mainWindow.loadURL(path.join('file:', __dirname, 'index.html'))

  // mainWindow.loadURL(`file://${__dirname}/index.html`);
  console.log(path.join('file:', __dirname, 'index.html'))

  // 窗口关闭触发的函数
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
