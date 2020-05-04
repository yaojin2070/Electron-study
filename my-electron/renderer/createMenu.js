const { Menu } = require('electron').remote
const remote = require('electron').remote

const template = [
  {
    label: '文件', // 文本信息
    submenu: [
      // 二级菜单
      {
        label: '新建窗口',
        click: () => {
          console.log('aaa')
        }
      },
      { type: 'separator' },
      {
        label: '打开文件',
        accelerator: 'ctrl+x', // 快捷键
        click: () => {
          console.log('bbb') // 点击后执行的函数
        }
      }
    ]
  },
  {
    label: '编辑',
    submenu: [
      { role: 'cut', label: '剪切' },
      {
        role: 'copy', // 作用
        label: '复制'
      }
    ]
  }
]

const m = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(m)

window.addEventListener(
  'contextmenu',
  e => {
    e.preventDefault()
    m.popup({ window: remote.getCurrentWindow() })
  },
  false
)
