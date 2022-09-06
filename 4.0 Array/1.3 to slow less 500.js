var array1 = [0,1,2];


array1[499] = 499;
%DebugPrint(array1);

//  node --allow-natives-syntax  "4.0 Array\1.3 to slow less 500.js"