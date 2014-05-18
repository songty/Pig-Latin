module.exports.parseString = function (string) {
	var stringArray = string.split("");
	// stringArray = stringArray.map(function(e){ return parseInt(e); });
	return stringArray;
};

module.exports.piggi = function (array) {
	var cut = array.slice(1);
	// var reversed = cut.reverse();
	cut.push(array[0], "ay");
	return cut.join("");
};



// module.exports.rever = function (array) {
// 	var reversed = arary.reverse()
// }


module.exports.add = function(x, y) {
	return x + y;
};

module.exports.subtract = function(x, y) {
	return x - y;
};

module.exports.div = function(x, y) {
	return x / y;
};

module.exports.multi = function(x, y) {
	return x * y;
};

module.exports.compares = function (array) {
	return array;
};

