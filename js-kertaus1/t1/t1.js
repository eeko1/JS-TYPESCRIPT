'use strict';

const asteetCelcius = +prompt('Syödä celsius asteet');

const asteetF = (asteetCelcius * 9) / 5 + 32;
const asteetK = asteetCelcius + 273.15;

const vastaus = `${asteetCelcius} astetta celciusta on ${asteetF} astetta ja farenhaittia ja ${asteetK} astetta kelviniä`;

// tulostus
document.getElementById('kohde').innerHTML = vastaus;
