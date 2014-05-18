#!/usr/bin/env node

var program = require('commander');
var _ = require('./piggify');
var trueNum = [1, 2, 3];

program
  .version('0.0.1')
  .option('-p, --piggification <x>', 'Piggify string', _.parseString)
  .option('-a, --addition <x> <y>', 'Add numbers', _.parseString)
  .option('-s, --subtraction <x> <y>', 'Subtract numbers', _.parseString)
  .option('-m, --multiply <x> <y>', 'Multiple numbers', _.parseString)
  .option('-d, --divide <x> <y>', 'Multiple numbers', _.parseString)

  .option('-g, --guess <x> [y] [z]', 'Guess Number', _.parseString)

  .parse(process.argv);

console.log('Your translation:');
if (program.piggification) {
	console.log(_.piggi(program.piggification));
}

// console.log('you guessed a number with:');
// if (program.addition) {
// 	console.log('You have added!');
// 	var result = _.add(program.addition[0], program.addition[1]);
// }

// if (program.subtraction) {
// 	console.log('You have subtracted!');
// 	var result =  _.subtract(program.subtraction[0], program.subtraction[1]);
// }

// if (program.multiply) {
// 	console.log('You have multiplied!');
// 	var result =  _.multi(program.multiply[0], program.multiply[1]);
// }

// if (program.divide) {
// 	console.log('You have divided!');
// 	var result =  _.div(program.divide[0], program.divide[1]);
// }

// if (program.guess) {
// 	console.log(program.guess);
// }

// for (var i = 0; i < trueNum.length; i++) {
// 	if (trueNum[i] === program.guess[i]){
// 		console.log("Right You are!");
// 	} else {
// 		if (program.guess.length >= trueNum.length) {
// 				if (trueNum[i] !== program.guess[i]) {
// 				console.log("WRONG!");
// 			}

// 		}  
		
// 	}
// }

// if (program.guess === trueNum) {
// 	console.log("Right you are!");
// } else {
// 	if (program.guess > trueNum){
// 		console.log("Why don't you try again?");
// 		console.log("This time go lower");
// 	} else {
// 		console.log("Why don't you try again?");
// 		console.log("This time go higher");
// 	}
// }
// console.log(result);