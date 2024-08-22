var array1 = [0, 1, 2, 3, 4];

console.log('array1.length:', array1.length);

// 容量：5
%DebugPrint(array1);

// 旧容量+ (旧容量>> 1) + 16 = (6 + 1) + ( (6+1) >>1 ) + 16 = 26
array1[6] = 6;  

%DebugPrint(array1);



//  node --allow-natives-syntax  "4.0 Array\扩容\index.js"

