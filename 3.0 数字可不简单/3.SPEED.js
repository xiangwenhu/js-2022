var num1 = 0;
var num2 = -0;


const count = 1000 * 1000 * 1000;
const startTime = performance.now();

for (let i = 0; i < count; i++) {
    num1 += 1
}

// for (let i = 0; i < count; i++) {
//     num2 += 1
// }

console.log("cost:", performance.now() - startTime)