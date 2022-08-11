const utils = require('../util');

function Super() {
}
function Sub() {
}

// https://github.com/v8/v8/blob/6.0.122/test/mjsunit/fast-prototype.js
function DoProtoMagic(proto, set__proto__) {
    var receiver;
    if (set__proto__) {
      receiver = new Sub();
      receiver.__proto__ = proto;
    } else {
      Sub.prototype = proto;
      // Need to instantiate Sub to mark .prototype as prototype. Make sure the
      // instantiated object is used so that the allocation is not optimized away.
      receiver = new Sub();
    }
    // Prototypes are made fast when ICs encounter them.
    function ic() { return typeof receiver.foo; }
    ic();
    ic();
  }

  

function MyObject() {}
const obj = new MyObject();


utils.setProperties(obj, 26, 10);

// node --allow-natives-syntax  "2. Fast Properties\2.4 Fast_Slow\2.4 toFast DoProtoMagic.js"

console.log(%HasFastProperties(obj))  // false
DoProtoMagic(obj, false);
DoProtoMagic(obj, true);
console.log(%HasFastProperties(obj)); // true
