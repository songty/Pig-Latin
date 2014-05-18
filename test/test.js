var chai = require('chai');
var expect = chai.expect;

var _ = require('../piggify');

describe('pig', function() {
	it('Piggifies strings', function () {
		expect(_.piggi('banana')).to.eql("ananabay");
	});
});

describe('pig all', function() {
	it('Piggifies all strings', function () {
		expect(_.pigEachWord('banana hello')).to.eql("ananabay ellohay");
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