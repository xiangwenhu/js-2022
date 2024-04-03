function checkExecution() {
    console.log('Checking execution in page 2...', new Date().toTimeString());
}

setInterval(checkExecution, 1000); // 每秒执行一次

new Worker("./worker-sub.js")