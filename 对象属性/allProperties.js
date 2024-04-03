function getAllProperties(obj) {
    let result = {
        properties: [],
    };
    let r = result;
    function walkPrototype(instance) {
        if (instance == null) return;
        result.properties = Reflect.ownKeys(instance);
        let proto = Object.getPrototypeOf(instance);

        while (proto) {
            result.prototype = { proto, properties: [] };
            result = result.prototype;
            result.properties = Reflect.ownKeys(proto);
            proto = Object.getPrototypeOf(proto);
        }
        result.prototype = { proto }
    }
    return (walkPrototype(obj), r)
}

const result = getAllProperties(() => { });

console.log("result:", result);
