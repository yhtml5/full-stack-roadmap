### equal sign operator

```
NaN == NaN         // false
NaN === NaN        // false
Number.NaN === NaN // false
isNaN(NaN)         // true
isNaN(Number.NaN)  // true
```

```
{} == {}
{} === {}
[] == []
[] === []
``` 

```
var a = b = {}
a.a = 1
b.b = 2

a == b 
a === b
```

```
null == undefined //true
null === undefined //false
```




