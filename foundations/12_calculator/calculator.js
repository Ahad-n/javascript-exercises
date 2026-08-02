const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, currentNumber) => total + currentNumber, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentNumber) => accumulator * currentNumber);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  let factorial = 1;
	while(true) {
    if (num == 0) break;
    factorial *= num;
    num--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
