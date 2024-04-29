'use strict';

const numberOfFilms = +prompt('How many films have you watched?')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// const a = ('Your last movie?', ''),
//       b = ('How do you rale it?', ''),
//       c = ('Your last movie?', ''),
//       d = ('How do you rale it?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


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


console.log(personalMovieDB);