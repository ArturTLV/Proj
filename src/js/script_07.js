'use strict';

// const obj = new Object();

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
// console.log('Test');
//   }
// };

// options.makeTest();


// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);


// console.log(options['colors']['border']);

// console.log(options.name);

// delete options.name;

// console.log(options)

// let counter = 0;
// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for ( let i in options[key]) {
//       console.log(`svoistvo ${i} imeet zna4enie ${options[key][i]}`)
//       counter++

//     }
//   }
//   else {
//     console.log(`svoistvo ${key} imeet zna4enie ${options[key]}`)
//     counter++
//   }
// };
// console.log(counter);

// sorting like a Numbers!!!!!!!!
// const arr = [555, 3333, 90, 1, 2, 3, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }





// sorting like a String!!!!!!!!
// const arr = [555, 3333, 'Hi', 90, 1, 2, 3, 6, 8];
// arr.sort();
// console.log(arr);








// // arr.push(10, 20, 30);

// arr[99] = 12; // never do like this!!!

// console.log(arr.length);
// console.log(arr);


// arr.pop();
// arr.unshift(55);
// arr.shift();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }


// const arr = [1, 2, 3, 6, 8];
// arr.forEach(function(item, i, arr) {

// console.log(`${i}: ${item} vnutri massiva ${arr}`);
// });




// const str = prompt('How mach is the fish?','');
// const products = str.split(', ');
// console.log(products);



// const str = prompt('How mach is the fish?','');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));







// let a =5,
//     b = a;

//     b = b + 5;

//     console.log(b);
//     console.log(a);

//     const obj = {
//       a: 5,
//       b: 1
//     };

    // const copy = obj; // it's Link to object!!!!!!!

    // copy.a = 10;

    // console.log(copy);
    // console.log(obj);
    

    function copy (mainObj) {
      let objCopy = {};

      let key;
      for (key in mainObj) {
        objCopy[key] = mainObj[key];
      }

      return objCopy;
    }

    const numbers = {
      a: 2,
      b: 5,
      c: {
        x: 7,
        y: 4
      }
    };

    const newNumbers = copy(numbers);

    newNumbers.a = 10;
    newNumbers.c.x = 10;

    console.log(newNumbers);
    console.log(numbers);



    const add = {
      d: 17,
      e: 20
    };

    // console.log(Object.assign(numbers, add));
    // console.log(Object.assign({}, add));

    const clone = Object.assign({}, add);

    clone.d = 20;
    // console.log(add);
    // console.log(clone);


    const oldArray = ['a', 'b', 'c'];
    const newArray = oldArray.slice();

    newArray[1] = 'Big text for test'
        console.log(newArray);
        console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejornal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);


      function log(a ,b, c) {
        console.log(a);
        console.log(b);
        console.log(c);

      }

      const num = [2, 5, 7];

      log(...num);

      const array = ['a', 'b'];

      const newAaray = [...array];

      const q = {
        one: 1,
        two: 2
      };

      const newObj = {...q};





      // const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//           js: '20%',
//           php: '10%'
//       },
//       exp: '1 month'
//   },
//   showAgeAndLangs: function(plan) {
//       const {age} = plan;
//       const {languages} = plan.skills;
//       let str = `Мне ${age} и я владею языками: `;

//       languages.forEach(function(lang) {
//           str += `${lang.toUpperCase()} `;
//       });

//       return str;
//   }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//   const {exp} = plan.skills;
//   return exp;
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//   let str = '';
//   const {programmingLangs} = plan.skills;
//   for (let key in programmingLangs) {
//       str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//   }

//   return str;
// }

// showProgrammingLangs(personalPlanPeter);






// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {

//   let str = '';
//   arr.forEach(function(name) {
//     str += `${name.normalize()} `;
//   });
//   return str;
// }
// console.log('Famaly consists of: ' + showFamily(family));





// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//       let str = '';
//   arr.forEach(function(name){

//     str += `${name.toLowerCase()} `;

    
//   }) 
//   return str;
// }

// console.log(standardizeStrings(favoriteCities));




// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
// }

// standardizeStrings(favoriteCities);















const someString = 'This is some strange string';

function reverse(str) {
  reverse(someString);
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

}
