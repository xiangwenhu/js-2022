
var array1 = [0,1,2];
// %DebugPrint(array1);


// 容量 + 1024 = 3 + 1024 = 1027

// array1[1026] = 1026;
// %DebugPrint(array1);

array1[1027] = 1027;
%DebugPrint(array1);


//  node --allow-natives-syntax  "4.0 Array\1.2 toSlow 1024.js"
