%DebugPrint(56);              // Smi
%DebugPrint(-56);             // Smi
%DebugPrint(2**30);           // Smi
%DebugPrint(-(2**30));        // Smi
%DebugPrint(-(2**30)-1);      // Smi
%DebugPrint(0);               // Smi


console.log("------------------");
%DebugPrint(-Infinity);       // HEAP_NUMBER_TYPE
%DebugPrint(-(2**31)-1);      // HEAP_NUMBER_TYPE
%DebugPrint(        -0);      // HEAP_NUMBER_TYPE
%DebugPrint(     56.56);      // HEAP_NUMBER_TYPE
%DebugPrint(  Infinity);      // HEAP_NUMBER_TYPE
%DebugPrint(       NaN);      // HEAP_NUMBER_TYPE


// node --allow-natives-syntax "3.0 数字可不简单\2. Smi HEAP_NUMBER_TYPE.js"