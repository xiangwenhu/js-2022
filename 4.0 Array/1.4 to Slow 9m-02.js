var array1 = new Array(499);

// https://github.com/v8/v8/blob/9.3.345/src/objects/js-objects-inl.h
// new_capacity: (499 + 1) * 1.5 + 16 = 766, 大于500
// NumberDictionary::ComputeCapacity(used_elements): 44 + (44 >> 1) => 66  =>  128
// size_threshold : 3 * 3 *  128  = 1152
// size_threshold <= new_capacity =>  1152 <= 766 => false


for (let i = 0; i < 44; i++) {
    array1[i] = i;
}

// 回收
global.gc();
console.log(array1.filter(v=> v!== null).length);


array1[499] = 499;
% DebugPrint(array1);

//  node --allow-natives-syntax --expose-gc "4.0 Array\1.4 to Slow 9m-02.js"

// console.log('process.versions:', process.versions)