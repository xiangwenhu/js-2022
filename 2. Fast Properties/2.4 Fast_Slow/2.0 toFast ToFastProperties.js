const utils = require('../util');

function MyObject() {}
const obj = new MyObject();

utils.setProperties(obj, 26, 10);

// node --allow-natives-syntax  "2. Fast Properties\2.4 Fast_Slow\2.0 toFast ToFastProperties.js"

console.log(%HasFastProperties(obj));
%ToFastProperties(obj);
console.log(%HasFastProperties(obj));
