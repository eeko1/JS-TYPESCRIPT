'use strict';

const num = +prompt('Kirjoita positiivinen numero');
let sum = 0;

for (let i = num; i > +0; i -= 1) {
  sum += i;
}
document.getElementById('kohde').innerHTML = sum;
