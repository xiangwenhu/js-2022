// 页面1（或Web Worker1）
function longRunningOperation() {
    const startTime = Date.now();
    let i = 0;
    while (Date.now() - startTime < 5000) { // 假设执行5秒
        i++;
    }
    console.log('Long operation finished in page 1.', new Date().toTimeString());
}

setTimeout(() => {
    longRunningOperation();
}, 2000)
