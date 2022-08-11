function MyObject() {}
const obj = new MyObject();

obj['a'] = 'a'
obj['c'] = 'c'
obj['b'] = 'b'

obj[2] = '2'
obj[1] = '1'
obj[0] = '0'


console.log(...Object.keys(obj));