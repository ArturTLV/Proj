"use strict";

// let number1 = 5;
// const leftBorderWidth = 1;

// const obj1 = {
// a: 50
// };

// obj1.a = 10;

// console.log(obj1);

// const width = 5000,
//       hight = 4000;

      // snake_case
      // UPPER_SNAKE_CASE
      // kebab-case
      //PascalCase

      // const COLOR_RED = '#foo';

      // const _apiKey = 'apikey=d4rutuyqtduqt776fjf';



      // let number = 4;
      // console.log(-4/0);
      // console.log('string' * 9);

      // const persone = 'Alex';

      // const bool = false;

      // console.log(number1);

      // let und;
      // console.log(und);


      // const obj = {
      //   name: "John",
      //   age: 25,
      //   isMarried: false
      // };

      // console.log(obj.age);
      // console.log(obj ["age"]);

      // let arr1 = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
      // console.log(arr1[1]);


      // const arr = ['a', 'b', 'c'];
      // arr[10] = '3456';

      // console.log(arr[10]);

      // const arrObj = {
      //   '0': 'a',
      //   '1': 'b',
      //   '2': 'c',
      //   abc: {
      //     df: [{}, {}],
      //     def: {

      //     }
      //   }
      // }


      // const b = 'b';

      // arrObj.b = '1234';


      // console.log(arr[1]);
      // console.log(arrObj['b']);
      // console.log(arrObj.b);


      // const obj2 = {a: 1, b: 2};
      // console.log(obj2);


      // const obj2 = {
      //   Anna: 500,
      //   'Alice': 800
      // };


      
// alert('Hello');


// const result = confirm('Are you gay?');
// console.log(result);


// const answer = +prompt('How old are you?', 'ne vri mne, suka!');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('what is your name?', '');
// answers[1] = prompt('what is your surname?', '');
// answers[2] = +prompt('How old are you?', '');

// document.write(`${answers[0]} ${answers[1]}, ${answers[2]}.`);

// const category = 'toys';
// console.log('https://rozetka.com/' + category + '/' + '4')
// console.log(`https://rozetka.com/${category}/5`)


// console.log('arr' + ' - object');
// console.log(4 + +'5');

// let incr = 10,
//     decr = 10;

//     // ++incr;
//     // --decr;

//     console.log(++incr);
//     console.log(--decr);
//     console.log(59%4);

// const isChecked = false;
// const isClosed = false;
// const wasOpen = false;
// console.log(isChecked || isClosed || !wasOpen);



let numberOfFilms = +prompt('How many moovies you have watched?', '');
console.log(numberOfFilms)









const personalMoovieDB = {
      count: numberOfFilms,
      moovies: {},
      actors: {},
      genres: [],
      privat: false

          };


const a = prompt('Last moovie?', ''),
      b = prompt('How do you rate it?', ''),
      c = prompt('Last moovie?', ''),
      d = prompt('How do you rate it?', '');

      personalMoovieDB.moovies[a] = b;
      personalMoovieDB.moovies[c] = d;

      console.log(personalMoovieDB);

// let lastMoovie = prompt('Last moovie?', '');
// let rateMoovie = prompt('How do you rate it?', '');
        
// console.log(`${lastMoovie}: ${rateMoovie}`)