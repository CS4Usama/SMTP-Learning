// 'use strict'

// const vari1 = Symbol("sym")
// const vari2 = Symbol("sym213")

// console.log(vari1.description);
// console.log( Symbol.keyFor(Symbol.for('tokenString')) )

// console.log( Symbol.for("tokenString") );
// console.log( Symbol.keyFor('Symbol(tokenString)') );

// let i = 0
// while(i <= 1) {
//     let num1 = 5;
//     var num2 = 7;
//     i++
// }
// console.log(num1+num2);

// const name = some => (
//     let usa = some+' ko';
    
// )

// console.log(name('Usama'))

// function sum(a,b) {
//     add = a+b;
//     console.log(add);
// }

// sum(10,5)

// console.log(a)
// var a=10;
// console.log(a)
// function sum() {
//     console.log(a)
//     var b=10
//     console.log(a);
// }
// sum()

// const usama = () => {
//     console.log("checking...");
// }

// usama.new = "Here is Usama";

// console.log(usama.new);

// const myName = () => {
//     return "Hello"
// }
// const fun1 = () => {
//     console.log('Usama');
//     return function fun2() {
//         console.log(" 2");
//         return function fun3() {
//             console.log(" 3");
//         }
//     }
// }
// fun1()()()

// document.addEventListener('click', function(){
//     console.log('USAMA');
// })

// console.log('asas');

// ( function(a) {
//     console.log("Usama" + a);
// } ) (4);

// let d= 10
// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//         let sum = a+b+d;
//         console.log(`Sum is ${sum}`);
//     }
//     return innerFun
// }
// // outerFun(5)();
// const inner = outerFun(5)
// console.dir(inner); inner()


// const obj = {
//     name: 'Usama',
//     age: 21,
// }

// function feature(param1,param2) {
//     console.log(`My name is ${this.name} and age is ${this.age} and do ${param1} & ${param2}`);
// }
// const obj2 = {
//     name: 'WoRLD',
//     age: 35
// }

// const usa = feature.bind(obj2);
// usa()


// const usama = obj.feature
// usama()
// const usama2 = obj.feature.bind(obj)
// usama2()

// obj.feature.apply(obj2,['plus','213'])

// const arr = [1,2,3,4,5,6,7];
// console.log( Math.max.apply(null,[1,2,3,4,5,6,7]) );


// const arr = [1,2,3,4,5];
// for(vari of arr)
    // console.log(vari);

// console.log(`Usama`.startsWith('U'));


// const obj = {
//     name: 'Usama',
//     age: 21,
//     hob: {
//         first: 'lmk'
//     }
// }
// let {first} = obj.hob;
// // ({name,age} = obj);
// console.log(first);

// class Student {
//     constructor(name,age) {
//         this.myName = name;
//         this.myAge = age;
//     }
//     static info() {
//         return `I'm ${this.myName} and my age is ${this.myAge}`;
//     }
// }
// class Player extends Student {
//     constructor(name,age,game) {
//         super(name,age);
//         this.myGame = game;
//     }
//     info2() {
//         return `${super.info()} and Fav Game is ${this.myGame}`
//     }
// }
// // let obj = new Player('Usama',21, 'WEight Lifting');
// // console.log(obj.info2())
// let obj = new Student('Usama', 21)
// console.log(obj.info())


// fetch('https://api.github.com').then( (api) => {
//     // console.log(api);
//     return api.json();
// }).then( (actualApi) => {
//     console.log(actualApi);
// }).catch((err) => {
//     console.log(err);
// })


// const mouseMove = (event) => {
//     console.log(event.clientX)
// }
// console.log(window.innerWidth);
// window.addEventListener('mousemove',mouseMove);

// console.log(Number.NEGATIVE_INFINITY);
function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
    if (num > max_num) {
        max_num = num
    }
    }
    return max_num;
}

// find_max(1,2,3,4,5)


const obj = {
    name: 'Usama',
    roll: 2123,
    classN: '6th'
}

console.table(obj);