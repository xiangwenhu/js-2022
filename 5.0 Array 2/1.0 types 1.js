var array1 = new Array();
// %DebugPrint(array1);  // [PACKED_SMI_ELEMENTS]

array1.push(2);
// %DebugPrint(array1);  // [PACKED_SMI_ELEMENTS]

array1.push(2.1);
// %DebugPrint(array1);  // PACKED_DOUBLE_ELEMENTS

array1.push('test string');
%DebugPrint(array1);  // PACKED_ELEMENTS



// node --allow-natives-syntax  "5.0 Array 2\1.0 types 1.js"