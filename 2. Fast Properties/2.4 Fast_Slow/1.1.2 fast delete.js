const utils = require('../util');

function MyObject() {}
const obj = new MyObject();

utils.setProperties(obj, 15, 0);

// node --allow-natives-syntax  "2. Fast Properties\2.4 Fast_Slow\1.1.2 fast delete.js"

console.log(%HasFastProperties(obj))
delete obj.property14;
console.log(%HasFastProperties(obj))
delete obj.property13;
console.log(%HasFastProperties(obj))
delete obj.property12;
console.log(%HasFastProperties(obj))
delete obj.property11;
console.log(%HasFastProperties(obj))