'use strict';

function sortArray(numbers, order) {
  if (order === 'asc') {
    numbers.sort((a, b) => b - a);
  } else if (order === 'desc') {
    numbers.sort((a, b) => a - b);
  }
  return;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));