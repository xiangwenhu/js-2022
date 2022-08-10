
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

// node --allow-natives-syntax  "2. Fast Properties\2.3 Fast_Slow\index.js"

console.log(%HasFastProperties(obj))
delete obj.property10;
console.log(%HasFastProperties(obj))