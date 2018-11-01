var Storage = window.sessionStorage
var isvKey = 'isvUrls'

function setItem(key, value) {
  var type = Object.prototype.toString.call(value)
  // 数组, 对象等需要序列化
  if ((['[object Object]', '[object Array]']).indexOf(type) >= 0) {
    Storage.setItem(key, JSON.stringify(value))
  } else {
    Storage.setItem(key, value)
  }
}

function getItem(key) {
  var result = Storage.getItem(key)
  try {
    return JSON.parse(result)
  } catch (err) {
    return result
  }
}

function setIsvUrls(obj) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    console.error('函数 setIsvUrls 的参数应当为一个对象')
  }
  setItem(isvKey, obj)
}

function getIsvUrls() {
  return getItem(isvKey) || {}
}

function setIsvBack(value) {
  var isvUrls = getIsvUrls()
  isvUrls.返回 = value
  setIsvUrls(isvUrls)
}

function getIsvBack() {
  var isvUrls = getIsvUrls()
  return isvUrls.返回 || ''
}

window.ISV = {
  setIsvUrls: setIsvUrls,
  getIsvUrls: getIsvUrls,
  setIsvBack: setIsvBack,
}

// 防止循环递归
// go(-1) = back + reload
window.history.back = function (num) {
  var backUrl = getIsvBack()
  var isvUrls = getIsvUrls()
  // 没有来源页面信息的时候，改成首页URL地址
  // if (!window.document.referrer) {
  // window.location.replace(backUrl)
  // }

  if (isvUrls[backUrl]) {
    setIsvBack('')
    // 如果isv存在返回key值, 则返回对应的地址
    window.location.replace(isvUrls[backUrl])

    // } else if (backUrl) {
    // setIsvBack('')
    // 如果backUrl是个具体的url, 则返回对应的地址
    // window.location.replace(backUrl)
  } else (
    window.history.go(-1)
  )
}


