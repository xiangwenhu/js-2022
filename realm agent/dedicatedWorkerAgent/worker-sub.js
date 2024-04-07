function longRunningOperation() {
    console.log('Long operation started ', new Date().toTimeString());
    const startTime = Date.now();
    let i = 0;
    while (Date.now() - startTime < 5000) { // 假设执行5秒
        i++;
    }
    console.log('Long operation finished ', new Date().toTimeString());
}
setTimeout(() => {
    longRunningOperation();
}, 2000)