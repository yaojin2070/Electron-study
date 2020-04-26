// 渲染进程里面调用该js文件, 所以此时你需要调用electron的API, 你得使用remote模块

// 引入path模块
var path = require('path')

// 引入 electron remote 模块中的 BrowserWindow
const { BrowserWindow } = require('electron').remote

// 创建一个窗口变量
var win = null

// 获取btn
const btn = document.querySelector('#btn')

btn.onclick = function() {
  win = new BrowserWindow({
    width: 400,
    height: 300,
    // frame:false, // 是否隐藏菜单栏
    // fullscreen:true // 是否全屏
  })

  // 窗口加载指定的html文件
  win.loadURL(path.join('file:', __dirname, 'newWindowContent.html'))
  // 窗口关闭至空
  win.on('closed', () => {
    win = null
  })
}
