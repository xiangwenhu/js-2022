

const timeoutTickets = {}

onmessage = function (e) {
    const data = e.data;
    if (!data || !data.type) {
        return
    }
    const { type, key, delay } = data;
    let ticket;
    switch (type) {
        case 'setTimeout':
            // 计时到期，执行回调（发送消息）
            ticket = setTimeout(function () {
                postMessage({
                    type,
                    key
                })
            }, delay);
            timeoutTickets[key] = ticket
            break;
        case 'clearTimeout':
            clearTimeout(timeoutTickets[data.key])
            break;
        default:
            break
    }
}
