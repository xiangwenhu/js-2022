function longRunningOperation() {
    console.log('worker:Long operation started ', new Date().toTimeString());
    const startTime = Date.now();
    let i = 0;
    while (Date.now() - startTime < 5000) { // 假设执行5秒
        i++;
    }
    console.log('worker:Long operation finished ', new Date().toTimeString());
}
setTimeout(() => {
    longRunningOperation();
}, 2000)

function checkExecution() {
    console.log('worker: Checking execution', new Date().toTimeString());
}
setInterval(checkExecution, 1000); // 每秒执行一次