var array1 = new Array();

console.log('array1.length:', array1.length);

// 容量：4
%DebugPrint(array1);

// ??  旧容量+ (旧容量>> 1) + 16 = (5000 + 1) + ((5000 + 1) >>1 ) + 16  = 7517
array1[5000] = 5000;  

%DebugPrint(array1);

//  node --allow-natives-syntax  "4.0 Array\扩容\0-100.js"