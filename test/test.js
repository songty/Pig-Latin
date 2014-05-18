var chai = require('chai');
var expect = chai.expect;

var _ = require('../piggify');

describe('pig', function() {
	it('Piggifies strings', function () {
		expect(_.piggi(['b', 'a', 'n', 'a', 'n', 'a'])).to.eql("ananabay");
	});
});

// describe('pig', function() {
// 	it('reverse strings', function () {
// 		expect(_.rever(['b', 'a', 'n', 'a', 'n', 'a'])).to.eql("ananaba");
// 	});
// });

describe('add', function() {
	it('adds', function () {
		expect(_.add(1,5)).to.eql(6);
	});
});

describe('subtract', function() {
	it('adds', function () {
		expect(_.subtract(10,5)).to.eql(5);
	});
});

describe('divide', function() {
	it('adds', function () {
		expect(_.div(200,5)).to.eql(40);
	});
});
describe('multiply', function() {
	it('multiply', function () {
		expect(_.multi(5,5)).to.eql(25);
	});
});