// Apa itu array => Rack => Perpustakaan =>
// Memory
// variable plural/jamak
//                     012
// index         0      1      2
// console.log(books[1][2]);

// PUSH
// books.push('SOSIOLOGI', 'EKONOMI');

// POP
// books.pop();

// UNSHIFT
// books.unshift('SOSIOLOGI', 'EKONOMI');

// SHIFT
// books.shift();

// BUILT_IN FUNCTION
// sort
// const books = ['IPA', 'SOSIOLOGI', 'EKONOMI', 'IPS', 'MTK'];
// books.sort();

// const randomNumbers = [3, 1, 5, 2, 7, 5, 9];
// randomNumbers.sort((a, b) => b - a);

// console.log(randomNumbers);

// STRING AND ARRAY
// const name = 'MUHAMMAD YANDI YUSUF';

// // console.log(name.split(' ')[0]);
// const arrNames = [];
// let strTemp = '';

// for (let i = 0; i <= name.length; i++) {
//   if (name[i] === ' ' || i === name.length) {
//     arrNames.push(strTemp);
//     strTemp = '';
//   } else {
//     strTemp += name[i];
//   }
// }

// console.log(arrNames);

let strName = '';

// for (let i = 0; i < arrNames.length; i++) {
//   strName += arrNames[i] + ' ';
// }

// console.log(strName);
// console.log(arrNames.join(' '));

// REVERSE
// console.log(arrNames.reverse());

const arrNames = ['MUHAMMAD', 'YANDI', 'YUSUF'];
console.log(
  arrNames.reverse().join('.').split('').reverse().join('').split('.')
);
