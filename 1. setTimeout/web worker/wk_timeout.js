

const timeoutTickets = {}

onmessage = function (e) {
    console.log('Web Worker: Message received from main script');
    const data = e.data;
    if (!data || !data.type) {
        return
    }
    const { type, key, delay } = data;
    let ticket;
    switch (type) {
        case 'setTimeout':
            ticket = setTimeout(function () {
                console.log("setTimeout callback")
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
