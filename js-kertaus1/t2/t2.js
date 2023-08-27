'use strict';

const piste1x = +prompt('Syötä ensimmäisten pisteen sijainti');
const piste2x = +prompt('Syötä toisen pisteen sijainti');
const piste1y = +prompt('Syötä kolmannen pisteen sijainti');
const piste2y = +prompt('Syötä neljännen pisteen sijainti');

const distance = Math.sqrt((pistex2 - piste1x) ** 2 + (piste2y - piste1y) ** 2);

const vastaus = ${calculate};

document.getElementById('kohde').innerHTML = 'Distance: ' + distance;
