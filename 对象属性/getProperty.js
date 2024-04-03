function getProperty(obj, property) {
    let result, properties;
    function walkPrototype(instance) {
        if (instance == null) return;
        properties = Reflect.ownKeys(instance);
        if (properties.includes(property)) {
            return result = {
                value: instance[property],
                ownObject: instance,
                ownHas: true,
            }
        }
        let proto = Object.getPrototypeOf(instance);
        while (proto) {
            properties = Reflect.ownKeys(proto);
            if (proto && properties.includes(property)) {
                return result = {
                    value: instance[property],
                    ownObject: instance,
                    ownHas: false,
                }
            }
            proto = Object.getPrototypeOf(proto);

        }
    }
    return (walkPrototype(obj), result)
}


const obj = {
    toString() { },
}

const obj2 = {};

console.log(getProperty(obj, 'toString'));
console.log(getProperty(obj2, 'toString'));