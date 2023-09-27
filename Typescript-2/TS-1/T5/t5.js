var _a;
// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
var lengthOrSquare = function (value) {
    // TODO: Use a type guard to check the actual type of 'value'
    // if type is string, retrurn the length of the string
    // if type is number return the square of the number
    return typeof value === 'string' ? value.length : value * value;
};
// Prompt the user to enter a value as either a string or a number
var userInput = (_a = prompt('Enter a value as either a string or a number')) !== null && _a !== void 0 ? _a : '';
var parsedValue = parseInt(userInput) || userInput;
// Call the lengthOrSquare function
var result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
