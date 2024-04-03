
function isObject(obj) {
    if (obj == null) return false;
    return typeof obj == 'object';
}

function deepCommon(obj, method) {
    method.call(Object, obj);
    const keys = Reflect.ownKeys(obj);
    keys.forEach(key => {
        let val = obj[key];
        if (isObject(val)) {
            deepCommon(val, method);
        }
    })
}

const createDeep = method => obj => deepCommon(obj, method);

const deepPreventExtensions = createDeep(Object.deepPreventExtensions);
const deepSeal = createDeep(Object.seal);
const deepFreeze = createDeep(Object.freeze);


var obj = {
    a: {
        b: "b"
    }
}
deepFreeze(obj);
obj.a.b = 'bb'
// 二级属性赋值不成功
console.log(obj.a.b);   // "b"