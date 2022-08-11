const utils = require('../util');

function MyObject() {}
const obj = new MyObject();
const obj2 = new MyObject();

utils.setProperties(obj, 25, 0);
utils.setProperties(obj2, 26, 0);
// node --allow-natives-syntax  "2. Fast Properties\2.4 Fast_Slow\1.2 toSlow many properties.js"

console.log('obj:', %HasFastProperties(obj))
console.log('obj2:', %HasFastProperties(obj2))