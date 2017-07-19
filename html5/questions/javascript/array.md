### Object and Array

#### 数组去重
```
Array.prototype.indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, j = this.length; i < j; i++) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
}

Array.prototype.forEach = Array.prototype.forEach || function(callback, thisArg) {
    if (!callback || typeof callback !== 'function') return;

    for (var i = 0, j = this.length; i < j; i++) {
        callback.call(thisArg, this[i], i, this);
    }
}
```

##### 方法一
1. 构建一个新的数组存放结果
2. 遍历数组，建立新数组，利用indexOf判断是否存在于新数组中，不存在则push到新数组，最后返回新数组

```
function removeDuplicatedItem(ar) {
    var ret = [];
    for (var i = 0, j = ar.length; i < j; i++) {
        if (ret.indexOf(ar[i]) === -1) {
            ret.push(ar[i]);
        }
    }
    return ret;
}
```

##### 方法二
1. 遍历数组，利用object对象保存数组值，判断数组值是否已经保存在object中，未保存则push到新数组并用object[arrayItem]=1的方式记录保存

```
function removeDuplicatedItem2(ar) {
    var tmp = {},
        ret = [];

    for (var i = 0, j = ar.length; i < j; i++) {
        if (!tmp[ar[i]]) {
            tmp[ar[i]] = 1;
            ret.push(ar[i]);
        }
    }

    return ret;
}
```

##### 方法三
1. 数组下标判断法, 遍历数组，利用indexOf判断元素的值是否与当前索引相等，如相等则加入
```
function removeDuplicatedItem3(ar) {
    var ret = [];

    ar.forEach(function(e, i, ar) {
        if (ar.indexOf(e) === i) {
            ret.push(e);
        }
    });

    return ret;
}
```

##### 方法四
1. 数组先排序， 然后比较俩数组一头一尾进行去重
```
function removeDuplicatedItem4(ar) {
    var ret = [],
        end;
    ar.sort();
    end = ar[0];
    ret.push(ar[0]);

    for (var i = 1; i < ar.length; i++) {
        if (ar[i] != end) {
            ret.push(ar[i]);
            end = ar[i];
        }
    }

    return ret;
}
```