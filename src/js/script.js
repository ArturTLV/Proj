'use strict';

let numberOfFilms;



function start() {
  numberOfFilms = +prompt('How many films have you watched?')

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many films have you watched?');

  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Your last movie?', ''),
          b = prompt('How do you rale it?', '');
  
          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done')
          }
          else {
            console.log('error');
            i--;
          }
  }

}

rememberMyFilms();



function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('You are little dick');  
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('You are middle dick');
    }
    else if (personalMovieDB.count >= 30) {
    console.log('You are big dick');
    }
    else {
      console.log('error');
    }
}

detectPersonalLevel();

 
function showMyDB(hidden) { 
 if (!hidden) {

console.log(personalMovieDB);
 }
 else {
  console.log('Ne tut-to Bb!LO');
 }
}
showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     const genre = prompt(`Your favorit genre number ${i}?`);
//     personalMovieDB.genres[i - 1] = genre;
//   }
// }
// writeYourGenres();


function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Your favorit genre number ${i}?`);
  }
}
writeYourGenres();