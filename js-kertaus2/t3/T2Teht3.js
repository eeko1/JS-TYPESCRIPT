'use strict'

const numbers = [];
let userInput;

while (userInput != 'done') {
    userInput = prompt("Enter a number (or 'done' to finish):");
    numbers.push(+userInput)
}
const evenNumbers = [];

for (const n of userInput) {
    if (n % 2 == 0) {
        evenNumbers.push(n)
    }
}
if (evenNumbers.lengh == 0) {
    document.getElementById('kohde').innerHTML = 'Even numbers: none'
    console.log('Program has ended')
} else {
    document.getElementById('kohde').innerHTML = `Even numbers: ${evenNumbers}`
    console.log('Program has ended')
}