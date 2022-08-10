let fastProto = null;

// Creates an object with permanently fast properties in V8. See Toon Verwaest's
// post https://medium.com/@tverwaes/setting-up-prototypes-in-v8-ec9c9491dfe2#5f62
// for more details. Use %HasFastProperties(object) and the Node.js flag
// --allow-natives-syntax to check whether an object has fast properties.
function FastObject(object) {
	// A prototype object will have "fast properties" enabled once it is checked
	// against the inline property cache of a function, e.g. fastProto.property:
	// https://github.com/v8/v8/blob/6.0.122/test/mjsunit/fast-prototype.js#L48-L63


	// 无object参数时,
	if (fastProto !== null && typeof fastProto.property) {
		// 重置 result 为传入的object
		const result = fastProto;
		// 置空 fastProto和FastObject.prototype 
		fastProto = FastObject.prototype = null;
		return result;
	}

	// 有object参数，设置fastProto以及FastObject函数的原型
	// fastProto一般情况等于 object
	fastProto = FastObject.prototype = object == null ? Object.create(null) : object;

	// new 不传参数 走上面的分支
	return new FastObject();
}

const inlineCacheCutoff = 10;

// Initialize the inline property cache of FastObject.
for (let index = 0; index <= inlineCacheCutoff; index++) {
	FastObject();
}

module.exports = function toFastproperties(object) {
	return FastObject(object);
}
