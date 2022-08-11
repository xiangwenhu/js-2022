const utils = require('../util');
const toFastProperties = require("./to-fast-properties")


function MyObject() {}
const obj = new MyObject();


utils.setProperties(obj, 26, 10);

// node --allow-natives-syntax  "2. Fast Properties\2.4 Fast_Slow\2.2 toFast to-fast-properties.js"

console.log(%HasFastProperties(obj))
toFastProperties(obj);
console.log(%HasFastProperties(obj));
