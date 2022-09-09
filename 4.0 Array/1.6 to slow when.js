var array1 = new Array(2 ** 20);
var a = 1;
var b = 2;
for (let i = 0; i < 1000; i++) {
    i + 1;
}
global.gc();
array1[2 ** 20 - 2] = 0;
%DebugPrint(array1);


//  node --allow-natives-syntax --expose-gc "4.0 Array\1.6 to slow when.js"