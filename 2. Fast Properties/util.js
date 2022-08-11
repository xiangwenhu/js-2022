
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

function setProperty(obj, key, value) {
    obj[key] = value;
}


function addEvent(node, event, listener, options) {
    node.addEventListener(event, listener, options)
}


function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

function toString(data) {
    return isObject(data) ? JSON.stringify(data) : `${data}`
}

const utils = {
    setProperties,
    setProperty,
    addEvent,
    isObject,
    toString
}


if(module && module.exports) {
    module.exports = utils
}