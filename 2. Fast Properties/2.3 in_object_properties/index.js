const utils = require('../util');

function MyObject() {}

const obj = new MyObject();

//  node --allow-natives-syntax  "2. Fast Properties\2.3 in_object_properties\index.js"

utils.setProperties(obj, 11, 25);
%DebugPrint(obj);