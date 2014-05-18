var chai = require('chai');
var expect = chai.expect;

var _ = require('../piggify');

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
		expect(_.divide(200,5)).to.eql(40);
	});
});
describe('multiply', function() {
	it('multiply', function () {
		expect(_.multiply(5,5)).to.eql(25);
	});
});