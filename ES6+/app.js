//Arrow function


// const merhaba = (firstName, LastName) => {
//     console.log("Merhaba", firstName, LastName);
// }

// merhaba("Recep", "Kemal");

// const merhaba = firstName => {
//     console.log("Merhaba", firstName);
// }

// merhaba("Zamad");

// const merhaba = firstName => console.log("Merhaba", firstName);

// merhaba("Zamad");

// const merhaba = (firstName, lastName) => console.log("Merhaba", firstName, lastName);

// merhaba("Zamad", "Uçar");


//Küp Örneği

// const cube = function(x){
//     return x * x * x;
// }
// console.log(cube(4));

// const cube = x => x * x * x;

// console.log(cube(4));





//Destructing

// let number1, number2;

// arr = [100, 200, 300, 400];

// // number1 = arr[0]; Eski Yapı
// // number2 = arr[1];

// [number1, number2] = arr;

// const [number1, number2] = arr;

// console.log(number1, number2)

//Obje Destructing

// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50
// };
// const { a:number1, c:number2, e:number3 } = numbers;
// console.log(number1, number2, number3);




//Spread Operator

// const langs = ["Pyton", "C++", "Java", "PHP"];

// console.log(langs[0], langs[1], langs[2], langs[3]);

// console.log(...langs) //Üstekinin Kısaltılmış hali




//Maps


const cities = new Map();

cities.set("Ankara", 5);
cities.set("İstanbul", 15);
cities.set("İzmir", 4);

//For Each Döngüsü ile

// cities.forEach(function (value, key) {
//     console.log(key, value);
// })

//for Of Döngüsü ile

// for (let [key, value] of cities) {
//     console.log(key, value)
// }