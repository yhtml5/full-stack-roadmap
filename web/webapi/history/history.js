function queryUrlParam(key, url) {
  var value = url.match(new RegExp("[\?\&]" + key + "=([^\&]*)(\&?)", "i"));
  return value ? value[1] : ""
}

function parseUrlToObject(url) {
  if (!url) { return '' }
  const reg = /([^#?&]*)=([^&#]*)/g;
  const args = url
  const query = {};
  let re = reg.exec(args);
  while (re) {
    query[re[1]] = re[2];
    re = reg.exec(args);
  }
  return query;
}

function parseObjectToUrl(obj) {
  if (Object.prototype.toString.call(obj) !== '[object Object]') { return '' }
  return Object.entries(obj).map(([key, val]) => {
    const type = Object.prototype.toString.call(val)
    return (type === '[object String]' || type === '[object Number]' || type === '[object Boolean]')
      ? `${key}=${val}` : ''
  }).join('&')
}

window.history.back = function (params) {
  alert('back')
}

window.history.go = function (num) {
  // var hash = window.location.hash
  // var hasBackUrl = /backUrl/g.test(hash)

  alert('go')
  var hasBackUrl = queryUrlParam('backUrl', window.location.href)

  if (hasBackUrl) {
    window.location.replace(backUrl)
  } else (
    window.history.go(num)
  )
}

window.history.pushUrl = function (url) {
  var search = parseUrlToObject(window.location.href)
  search.backUrl = url
  var newUrl = parseObjectToUrl(search)
  window.location.replace = newUrl
  // window.location.href = location.origin + location.pathname + '?1' + location.hash
}


