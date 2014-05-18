module.exports.parseString = function (string) {
	var stringArray = string.split("");
	// stringArray = stringArray.map(function(e){ return parseInt(e); });
	return stringArray;
};

module.exports.piggi = function (string) {
	var stringArray = string.split('');
	var cut = stringArray.slice(1);
	// var reversed = cut.reverse();
	cut.push(stringArray[0], "ay");
	return cut.join("");
};

var piggi = function (string) {
	var stringArray = string.split('');
	var cut = stringArray.slice(1);
	// var reversed = cut.reverse();
	cut.push(stringArray[0], "ay");
	return cut.join("");
};

module.exports.pigEachWord = function (string) {
	var stringArray = string.split(' ');
	var results = [];
	for (var i = 0; i < stringArray.length; i++) {
		results.push(piggi(stringArray[i].toString()));
	}
	return results.join(' ');
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

