const throttle = function (func, duration) {
  // 在这里编写具体实现
  // if Object.prototype.call(duration)==='[object Number]'
  let start = Date.now()
  let id = null
  return function () {
    const end = Date.now()
    const args = [].slice.call(arguments, 0)
    const context = this
    clearTimeout(id)
    if (end - start >= duration) {
      func.apply(context, args)
      start = end
    } else {
      id = setTimeout(function () {
        func.apply(context, args)
        start = end
      }, duration)
    }
  }
}

const tree = {
  name: '中国',
  children: [
    {
      name: '北京',
      children: [
        {
          name: '朝阳群众'
        },
        {
          name: '海淀区'
        }
      ]
    },
    {
      name: '浙江省',
      children: [
        {
          name: '杭州市'
        },
        {
          name: '嘉兴市'
        }
      ]
    }
  ]
}

function dfs(tree, name) {
  const reg = new RegExp(name, 'g');
  const tested = []
  if (reg.test(tree.name)) {
    tested.push({
      tree,
      name: tree.name,
      level: 0
    })
  }
  tree.children.forEach(obj => {
    if (reg.test(obj.name)) {
      tested.push({
        tree,
        name: tree.name,
        level: 0
      })
    }
  })
}


dfs(tree, '杭州市')
