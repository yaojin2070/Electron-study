var fs = require('fs')
/*
释放目标时触发的事件:
ondragenter - 当被鼠标拖动的对象进入其容器范围内时触发此事件
ondragover - 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
ondragleave - 当被鼠标拖动的对象离开其容器范围内时触发此事件
ondrop - 在一个拖动过程中，释放鼠标键时触发此事件
*/
const content = document.querySelector('#content')
content.ondragenter = content.ondragover = content.ondragleave = function() {
  return false /* 阻止默认行为 */
}
content.ondrop = function(e) {
  // 阻止默认行为
  e.preventDefault()
  console.log(e.dataTransfer.files[0])
  var path = e.dataTransfer.files[0].path
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)

      return false
    }
    content.innerHTML = data
  })
}
