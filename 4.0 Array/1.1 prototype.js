Array.prototype[4]  =  400;
var array1 = [0, 1, 2, 3, 4];
var array2 = [0, 1,2, 3, ,4];

console.log('array1[4]', array1[4]);
console.log('array2[4]', array2[4]);


//  node --allow-natives-syntax  "4.0 Array\1.1 prototype.js"