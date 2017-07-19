### AJAX
xmlhttprequest

```
<script type="text/javascript" language="javascript">
    function makeRequest(url) {
        var httpRequest;

        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            httpRequest = new XMLHttpRequest();
            if (httpRequest.overrideMimeType) {
                httpRequest.overrideMimeType('text/xml');
            }
        }
        else if (window.ActiveXObject) { // IE
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) {}
            }
        }

        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = function() { alertContents(httpRequest); };
        httpRequest.open('GET', url, true);
        httpRequest.send('');

    }

    function alertContents(httpRequest) {

        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                alert(httpRequest.responseText);
            } else {
                alert('There was a problem with the request.');
            }
        }

    }
</script>
<span
    style="cursor: pointer; text-decoration: underline"
    onclick="makeRequest('test.html')">
        Make a request
</span>
```
###  同时发送3个请求, 依次处理结果

#### promise.all

#### async/awit

#### thunk function

```
ajax('a',done('a',callback))
ajax('b',done('b',callback))
ajax('c',done('c',callback))

function done (type,callback) {
  state[type].status=true
  state[type].callback=callback
  if(state.a.status && state.b.status && state.c.status){
      state.a.callback()
      state.b.callback()
      state.c.callback()
  }
}

var state = {
   a:{
    status:false,
    callback:false
    }
   b:{
    status:false,
    callback:false
    },
   c:{
    status:false,
    callback:false
    }
}
```


