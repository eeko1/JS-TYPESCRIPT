'use strict'

let numbers = [];

for (let i = 0; i < 5; i++) {
  let number = +prompt('Write a number ' + (i + 1) + ':');
  numbers.push(number);
}

console.log('Numbers:', numbers);

const numberCheck = +prompt('Enter a number to check ');
if (numbers.includes(numberCheck)) {
  console.log('Number', numberCheck, 'is found in the array.');
} 
else {
  console.log('Number', numberCheck, 'is not found in the array.');
}

numbers.pop();

console.log('Updated Numbers:', numbers);

function numberSorting(a, b) {
  return b - a;
}
numbers.sort(numberSorting);
console.log('Sorted Numbers:', numbers);
