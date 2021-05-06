const get = require('lodash/get')

const a = { b: { c: 1 } }
const b = get(a, 'b')
const c = get(a, 'b.c')
const d = get(a, 'b.c.d')

console.log(b)
console.log(c)
console.log(d)
