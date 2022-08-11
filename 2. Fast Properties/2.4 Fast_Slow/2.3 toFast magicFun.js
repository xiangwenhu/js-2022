
const utils = require('../util');

// https://zhuanlan.zhihu.com/p/28858135
function MagicFunc(obj) {
    function FakeConstructor() {
        this.x = 0; // StoreIC(x)
    }

    // 拷贝 <Map> 作为 prototype, 不再与其它对象共享
    FakeConstructor.prototype = obj;

    // StoreIC(x) state == UNINITIALIZED
    new FakeConstructor();
    // StoreIC(x) state == PREMONOMORPHIC

    new FakeConstructor();
    // StoreIC(x) state == MONOMORPHIC
    // 隐式调用 MakePrototypesFast, 由 slow 到 fast 迁移
};



function MyObject() {}
const obj = new MyObject();


utils.setProperties(obj, 26, 10);

// node --allow-natives-syntax  "2. Fast Properties\2.4 Fast_Slow\2.3 toFast magicFun.js"

console.log(%HasFastProperties(obj))
MagicFunc(obj);
console.log(%HasFastProperties(obj));
