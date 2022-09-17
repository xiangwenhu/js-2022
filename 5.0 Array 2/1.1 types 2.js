var array1 = new Array(1);
// %DebugPrint(array1);  // [HOLEY_SMI_ELEMENTS]

array1[0] = 0;
// %DebugPrint(array1);  // [HOLEY_SMI_ELEMENTS]

array1.push(2.1);
// %DebugPrint(array1);  // [HOLEY_DOUBLE_ELEMENTS]

array1.push('test string');
%DebugPrint(array1);  // [HOLEY_ELEMENTS]



// node --allow-natives-syntax  "5.0 Array 2\1.1 types 2.js"