
var array1 = [0, 1, 2];
// 1028
array1[1027] = 1027;
// %DebugPrint(array1);


// 填充数组
for (let index = 3; index < array1.length; index++) {
    // if(index === 85){
    //     console.log('index:before', index);
    //     %DebugPrint(array1);
    //     console.log('index:after', index);
    //     array1[index] = index;
    //     %DebugPrint(array1);
    //     break;
    // }



    array1[index] = index;
    // 测试
    if (index == 10) {
        array1[index] = index;  
        %DebugPrint(array1);
        break
    }
}

// %DebugPrint(array1);

//  node --allow-natives-syntax  "4.0 Array\1.7 to Fast.js"