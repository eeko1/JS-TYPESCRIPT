'use strict';

const pisteM = prompt('Kirjoita pistemääräksi');

let arvosana = '';

if (pisteM >= 0 && pisteM <= 39) {
  arvosana = 'Arvosanasi on 0';
} else if (pisteM >= 39 && pisteM <= 51) {
  arvosana = 'Arvosanasi on 1';
} else if (pisteM >= 52 && pisteM <= 63) {
  arvosana = 'Arvosanasi on 2';
} else if (pisteM >= 64 && pisteM <= 75) {
  arvosana = 'Arvosanasi on 3';
} else if (pisteM >= 76 && pisteM <= 87) {
  arvosana = 'Arvosanasi on 4';
} else if (pisteM >= 88 && pisteM <= 100) {
  arvosana = 'Arvosanasi on 5';
} else {
  arvosana = 'Väärä pistemäärä';
}
document.getElementById('kohde').insertAdjacentHTML('beforeend', arvosana);
