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

    endTime  = new Date();
    console.log('任务执行时间:', endTime - startTime);
}


// 开始定时执行任务
const intervalId = setInterval(longRunningTask, INTERVAL_MS);

// 为了防止无限堆积，可以在一段时间后清除定时器
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Timer cleared due to excessive task accumulation.");
}, 10 * INTERVAL_MS); // 十秒后清除定时器