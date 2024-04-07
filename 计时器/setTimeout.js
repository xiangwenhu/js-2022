let counter = 0;
const INTERVAL_MS = 1000; // 设置间隔时间为1秒

let endTime = new Date();
function longRunningTask() {

    console.log('距离上次任务执行完毕：', Date.now() - endTime);
    startTime = Date.now();
    // setInterval 回调函数，模拟一个耗时的处理
    const duration = 500 + INTERVAL_MS * 5 *   Math.random()
    while (Date.now() - startTime < duration) {
    }

    endTime  =  Date.now();
    console.log('任务执行时间:', endTime - startTime);
    setTimeout(longRunningTask, INTERVAL_MS)
}


setTimeout(longRunningTask, INTERVAL_MS)