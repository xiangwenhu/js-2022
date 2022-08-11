const utils = require('../util');


// https://github.com/petkaantonov/bluebird/blob/7454401269cfa47e5b001354388c062509103de7/src/util.js#L180
function toFastProperties(obj) {
    /*jshint -W027*/
    function f() {}
    f.prototype = obj;
    return f;
    eval(obj);
}

function MyObject() {}
const obj = new MyObject();


utils.setProperties(obj, 26, 10);

// node --allow-natives-syntax  "2. Fast Properties\2.4 Fast_Slow\2.1 toFast bluebird.js"

console.log(%HasFastProperties(obj))
toFastProperties(obj);
console.log(%HasFastProperties(obj));
