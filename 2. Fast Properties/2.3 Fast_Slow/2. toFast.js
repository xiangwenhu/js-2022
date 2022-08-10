
// const toFastProperties = require('./to-fast-properties');

function toFastProperties(obj) {
    /*jshint -W027*/
    function f() {}
    f.prototype = obj;
    // ASSERT("%HasFastProperties", true, obj);
    return f;
    eval(obj);
}

function MyObject() {}

const obj = new MyObject();

function setProperties(obj, propertyCount, elementCount) {
    //添加常规属性
    for (let i = 0; i < propertyCount; i++) {
        let ppt = `property${i}`;
        obj[ppt] = ppt;
    }
    // 排序属性
    for (let i = 0; i < elementCount; i++) {
        obj[i] = `element${i}`;
    }
}

setProperties(obj, 15, 0);

// node --allow-natives-syntax  "2. Fast Properties\2.3 Fast_Slow\2. toFast.js"

console.log(%HasFastProperties(obj))
delete obj.property10;
console.log(%HasFastProperties(obj))
toFastProperties(obj);
console.log(%HasFastProperties(obj))