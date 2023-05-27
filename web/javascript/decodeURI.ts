/*
 *  1. unescape 已经废弃, 使用  decodeURI/decodeURIComponent
 *  2. encodeURIComponent则对它发现的所有非标准字符进行编码
 *  3. decodeURI() 函数解码一个由encodeURI 先前创建的统一资源标识符（URI）或类似的例程。
 */

const testURI = '卟呤卟呤丨100%现榨果鲜'

function getUrl(uri) {
  try {
    unescape(decodeURI(decodeURI(uri)))
  } catch (error) {
    return 'false'
  }
}

function getUrl2(uri) {
  try {
    unescape(decodeURI(encodedURI(uri)))
  } catch (error) {
    return 'false'
  }
}

function safeDecodeURIComponent(str) {
  try {
    return decodeURIComponent(str);
  } catch (e) {
    return str;
  }
}

const getUrl3 = (uri) => decodeURIComponent(encodeURIComponent(encodeURIComponent(uri)))

const getUrl4 = (uri) => decodeURI(encodeURI(uri))


console.log(getUrl(testURI), getUrl2(testURI), getUrl3(testURI), getUrl4(testURI))




