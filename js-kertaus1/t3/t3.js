'use strict';

const sivuA = prompt('Anna kolmion ensimmäisen sivun pituus');
const sivuB = prompt('Anna kolmion toisen sivun pituus');
const sivuC = prompt('Anna kolmion kolmannen sivun pituus');

let tyyppi = '';

// jos sivut ovat kaikki yhtä pitkiä -> tasasivuinen kolmio
if (sivuA === sivuB && sivuB === sivuC) {
  tyyppi = 'tasasivuinen kolmio';
}
// jos kaksi sivua on yhtä pitkiä -> tasakylkinen kolmio
else if (sivuA === sivuB || sivuA === sivuC || sivuB === sivuC) {
  tyyppi = 'tasakylkinen kolmio';
} else {
  // jos sivut ovat kaikki eri pituiset -> epäsäännöllinen kolmio
  tyyppi = 'epäsäännöllinen kolmio';
}

document.getElementById('kohde').insertAdjacentHTML('beforeend', tyyppi);
