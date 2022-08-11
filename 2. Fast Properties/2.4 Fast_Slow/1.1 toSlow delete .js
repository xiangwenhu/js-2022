const utils = require('../util');

function MyObject() {}
const obj = new MyObject();

utils.setProperties(obj, 15, 0);

// node --allow-natives-syntax  "2. Fast Properties\2.4 Fast_Slow\1.1 toSlow delete .js"

console.log(%HasFastProperties(obj))
delete obj.property10;
console.log(%HasFastProperties(obj))