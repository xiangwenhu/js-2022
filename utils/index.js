function adjustNode(node) {
    if (typeof node.sourceText === "function") {
        // 获取sourceText
        node.sourceText = node.sourceText();
    }
    // 删除location
    delete node.location;

    // 遍历
    for (let [key, value] of Object.entries(node)) {
        if (typeof value === "object" && value !== null) {
            adjustNode(value)
        }
    }
}

function adjust(node){
    adjustNode(node);
    console.log(JSON.stringify(node))
}