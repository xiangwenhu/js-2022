var array1 = new Array(3000);

// 不会发生快转慢
array1[3322] = 3322;   // 3323 + (3323 >> 1) + 16  = 5000
%DebugPrint(array1);

// 回收
global.gc();

array1[3323] = 3323; 
%DebugPrint(array1);
// node --allow-natives-syntax --expose-gc "4.0 Array/1.5.1 to Slow 5000 gc.js"