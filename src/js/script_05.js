'use strict';

let num = 20;

function showFistMessage(text) {
  console.log(text);
  let num = 9;
  console.log(num);
  
  }

showFistMessage('Putin Huilo!');
console.log(num);

// function calc(a ,b) {
//   return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));


function ret(){
  let num = 50;
  return num
}

const anoterNum = ret();
console.log(anoterNum);


const logger = function() {
  console.log('Hello nah!');
};

logger();

const calc = (a, b) => { return a + b };
// const calc = (a, b) => a + b;


const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;


function convert(amount, curr) {
console.log(curr * amount);
return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
  return function(){}
}

const res = convert(500, usdCurr);
promotion(res);
// convert(500, usdCurr);
// convert(500, eurCurr);


function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return
  }
  console.log('Done');
}
test();

function doNothing() {};
console.log(doNothing() === undefined)


function sayHello(name) {

  
  return 'Привет, ' + name + '!';
}
console.log(sayHello('Антон'))




function returnNeighboringNumbers(num) {

  
  return [num - 1, num, num + 1];
}
console.log(returnNeighboringNumbers(5))




function getMathResult(num, times) {
  if (typeof(times) !== 'number' || times <= 0) {
      return num;
  }

  let str = '';

  for (let i = 1; i <= times; i++) {
      if (i === times) {
          str += `${num * i}`;
          // Тут без черточек в конце
      } else {
          str += `${num * i}---`;
          // Это тоже самое, что и
          // str = str + num * i + "---"
      }
  }

  return str;
}

console.log(getMathResult(10, 5));






// const str = 'test';
// const arr = [1, 2, 4];

// console.log(str.length);
// console.log(arr.length);

// console.dir(Number);


const str = 'teSt';


// console.log(str[2] = 'd');
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str);


// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));


// const logg = 'Hello word';

// console.log(logg.slice(6, 11))


// const logg = 'Hello word';
// console.log(logg.substr(6, 2))
// console.log(logg.substring(6, 11))
// console.log(logg.slice(-5, -3))


// const num = 12.9;
// console.log(Math.round(num));
// const test ='12.2324234px';
// console.log(parseFloat(test));
// console.log(parseInt(test));
