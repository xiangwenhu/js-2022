
var array1 = [0, 1, 2];

array1[1027] = 1027;
%DebugPrint(array1);

for (let i = 3; i < 600; i++) {
    array1[i] = i;
}

%DebugPrint(array1);

//  node --allow-natives-syntax  "4.0 Array\1.4 to Fast.js"