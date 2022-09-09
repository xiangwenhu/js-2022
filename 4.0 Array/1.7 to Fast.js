
var array1 = [0, 1, 2];


// 1028
array1[1027] = 1027;
// %DebugPrint(array1);


// 
for (let index = 3; index < 600; index++) {

    if(index === 82){
        console.log('index:before', index);
        %DebugPrint(array1);
        console.log('index:after', index);
        array1[index] = index;
        %DebugPrint(array1);
        continue
    }

    array1[index] = index;
  
}

// %DebugPrint(array1);

//  node --allow-natives-syntax  "4.0 Array\1.6 to Fast.js"