'use strict';

const numbers = [10, 9, 4, 2, 7, 4, 1, 6, 8];
console.log('Original Array:', numbers);

function sortArray(inputArray) {
  const sortedArray = [];

  for (const num of inputArray) {
    sortedArray.push(num);
  }

  sortedArray.sort(function (a, b) {
    return a - b;
  });

  return sortedArray;
}

const sortedNumbers = sortArray(numbers);

console.log('Sorted Array:', sortedNumbers);
