'use strict';

const movies = [];

let more = true;
while (more) {
  const title = prompt('Syötä elokuvan nimi');
  const raiting = prompt('Syötä arvio (1-5)');
  const movie = {title, raiting};
  movies.push(movie);
  more = confirm('Haluatko syöttää lisää?');
}

function sortMovies(a, b) {
  const vertailu = b.raiting - a.raiting;
  return vertailu;
}
movies.sort(sortMovies);

console.log(movies);

for (let movie of movies) {
  const td1 = document.createElement('td');
  td1.innerText = movie.title;

  const td2 = document.createElement('td');
  td2.innerText = movie.raiting;

  const tr = document.createElement('tr');
  tr.append(td1);
  tr.append(td2);

  document.getElementById('kohde').append(tr);
}

const favourite = movies[0];
document.getElementById('fav').innerText = favourite.title;
