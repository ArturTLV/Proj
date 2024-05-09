'use strict';

// let numberOfFilms;



// function start() {
//   numberOfFilms = +prompt('How many films have you watched?')

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('How many films have you watched?');

//   }
// }

// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };



// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Your last movie?', ''),
//           b = prompt('How do you rale it?', '');
  
//           if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done')
//           }
//           else {
//             console.log('error');
//             i--;
//           }
//   }

// }

// rememberMyFilms();



// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('You are little dick');  
//     }
//     else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log('You are middle dick');
//     }
//     else if (personalMovieDB.count >= 30) {
//     console.log('You are big dick');
//     }
//     else {
//       console.log('error');
//     }
// }

// detectPersonalLevel();

 
// function showMyDB(hidden) { 
//  if (!hidden) {

// console.log(personalMovieDB);
//  }
//  else {
//   console.log('Ne tut-to Bb!LO');
//  }
// }
// showMyDB(personalMovieDB.privat);


// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     const genre = prompt(`Your favorit genre number ${i}?`);
//     personalMovieDB.genres[i - 1] = genre;
//   }
// }
// writeYourGenres();


// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Your favorit genre number ${i}?`);
//   }
// }
// writeYourGenres();


// function cubeVolumeAndArea() {
// let cubeSide = -1
// if (cubeSide == false || cubeSide == NaN || cubeSide == undefined || cubeSide == null || cubeSide <= 0) {
//   console.log('fuck you stupid buster!');
//    }
//   else {
//     cubeVolume = cubeSide * cubeSide * cubeSide;
//     cubeArea = cubeSide * cubeSide * 6;
//     console.log(cubeVolume + ' cube meters');
//     console.log(cubeArea + ' sqare meters');
//   }
// }
// cubeVolumeAndArea();



// function trainTicket() {
//   let tiket = 34
//   if (!Number.isInteger(Number(tiket))) { 
//     console.log('Fuuuuuck you!')
// }
// else if (tiket >= 1 && tiket <= 36) {
//   kupe = (tiket + 3) / 4;
//   console.log(Math.floor(kupe));
// }
// else {
//   console.log('Do not play with me!');
// }
// };
// trainTicket();





// function getTimeFromMinutes() {

//   const time = 125
//   const hours = time / 60
//   const minutes = time % 60


//   if (hours >= 1 || hours < 2) {
//   const result = `${Math.floor(hours)} hour, ${minutes} minutes`;
//   console.log(result);
// }
// else if (hours < 1 || hours >= 2) {
//   const result = `${Math.floor(hours)} hours, ${minutes} minutes`;
//   console.log(result);
// };
 
// }
// getTimeFromMinutes();



// function findMaxNumber() {
//   let numbers = [12, 73264.5, 345 * 345, '5935945'];
//   let largest = Math.max(...numbers);
//   console.log(largest);
// }
// findMaxNumber()



// function fib(num) {
//   if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//       return '';
//   }

//   let result = '';
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < num; i++) {
//       if (i + 1 === num) {
//           result += `${first}`;
//           // Без пробела в конце
//       } else {
//           result += `${first} `;
//       }

//       let third = first + second;
//       first = second;
//       second = third;
//   }

//   return result;
// }

// fib(5)




// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Your last movie?', '').trim(),
//           b = prompt('How do you rale it?', '');
  
//           if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done')
//           }
//           else {
//             console.log('error');
//             i--;
//           }
//   }

// }

// rememberMyFilms();



function first () {
  // Do something
  retTimeout(function() {
    console.log(1);
  }, 500);
}


function second () {
  console.log(2);
}

first ();
second ();

function learnJS (lang, callback) {
  console.log(`I learn: ${lang}`);
  callback();
}

function done() {
  console.log(`I passed this lesson`);
}

learnJS('JavaScript', done);