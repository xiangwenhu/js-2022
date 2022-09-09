var array1 = [0,1,2];

array1[100] = 100;

// 回收
global.gc();

// ！！！！！！！大于322就会转为慢模式
array1[322] = 322;
%DebugPrint(array1);

//  node --allow-natives-syntax  --expose-gc "4.0 Array\1.3 to slow less 500.js"