'use strict';

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));

// console.log(typeof(strObj));

// console.dir([1,2,3])

// const soldier = {
//  health: 400,
//  armor: 100,
//  sayHello: function() {
//   console.log('Hello');
//  }
// };


// const john = Object.create(soldier);



// const john = {
//  health: 100,
// };

// john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);
// console.log(john.armor);

// john.sayHello();





// function fullName(name = 'Artur', surname = 'Koshelev') {


//   let callHuman = name + ' ' + surname;
//   return console.log(callHuman);
  

// }

// fullName(['Yulia Krisulia', ' Pizda Ivanovna', ' Govno Vonuchee'], '- sosali huy');

// fullName();



// function calcSumm(a, b) {
//   if( b === 1 ) {
//     return a;
//   }
//   else {
//     return a * calcSumm(a, b - 1);
//   }
// }

// console.log(calcSumm(2, 20));





// function calcFibonacci(a, n) {
  
//   if( n === 1 ) {
//     return a;
//   }
//   else {
//     return a + calcFibonacci(a + (a + n + 1));
//   }
// }

// console.log(calcFibonacci(2, 5));




// // создание контекста Web Audio API
// const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// // создание узла Oscillator
// const oscillator = audioCtx.createOscillator();

// oscillator.type = 'sine'; // тип волновой формы
// oscillator.frequency.setValueAtTime(12000, audioCtx.currentTime); // частота в Гц
// oscillator.connect(audioCtx.destination); // подключение к выходу
// oscillator.start(); // начало воспроизведения
// oscillator.stop(audioCtx.currentTime + 10); // остановка через 20 секунд



// function showName () {
//   console.log('Vasia');
// }
// setTimeout (showName, 0);
// console.log('Hello');



// let showMessage = function () {

//   console.log('Hello');
// }
// showMessage();

// 'use strict';
// if (2 > 1) {
  

//   function showMessage () {
    
//     console.log('Hello');
  
// }
// showMessage();
// }




const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false, 
  start: function () {
    personalMovieDB.count = +prompt('How many films have you watched?')
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('How many films have you watched?');
  
    }
  },
  rememberMyFilms: function () {
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
  
  },

  detectPersonalLevel: function() {
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
  },

  showMyDB: function(hidden) { 
    if (!hidden) {
   
   console.log(personalMovieDB);
    }
    else {
     console.log('Ne tut-to Bb!LO');
    }
   },

toggleVisibleMyDB: function() {
  if (personalMovieDB.privat) {
    personalMovieDB.privat = false;
  }
  else {
    personalMovieDB.privat = true;
  };
},

   writeYourGenres: function() {
    for (let i = 1; i < 2; i++) {

              // for (let i = 1; i <= 3; i++) {
              // let genre = prompt(`Your favorit genre number ${i}?`);
              // if (genre === '' || genre === null || genre === undefined) {
              //   console.log('error');
              //   i--;
              // }
              // else {
              //   personalMovieDB.genres[i - 1] = genre;
              // }

              let genres = prompt(`Input Your favorit genre number by koma`);
              if (genres === '' || genres == null) {
                console.log('error');
                i--;
              }
              else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();

              }



    }


    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Your favorit genre number ${i + 1} is ${item}`);
  });


}

};





// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     const genre = prompt(`Your favorit genre number ${i}?`);
//     personalMovieDB.genres[i - 1] = genre;
//   }
// }
// writeYourGenres();


