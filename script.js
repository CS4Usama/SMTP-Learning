function Plan(price, name, age) {
    this.price = price;
    this.name = name;
    this.age = age;
    this.fun = function() {
    };
};
Plan.prototype.hum = 1;
let plan1 = new Plan(250, "Usama", 21);
let plan2 = new Plan(300, "Hawk", 15);
console.log(plan1)
console.log(plan2)

var fun = () => {
    try {
        var d = document.getElementById("id").value;
        if(d.length < 8) {
            new Error("Usama")
            throw "less than 8";
        } if(d.indexOf(" ") !== -1) {
            throw ("don't use spaces");
        }
        var chk = false;
        for(let i = 0; i < d.length; i++) {
            if(isNaN(d[i]) === false) {
                chk = true;
                break;
            }
        }
        if(chk === false) {
            new Error("HackaernUm")
            throw "add numbers";
        }
    }
    catch(err) {
        alert(err);
        return false
    }
    finally {
        alert("I'm Here...")
    }
}



// ------------------------------------------------
// ------------------------------------------------     6
// ------------------------------------------------



// DeStructuring
const std = {
    name: 'Usama',
    rollNo: 123,
    Uni: {
        uniName: 'GC'
    }
}
const {name, rollNo} = std;
const {uniName} = std.Uni;
console.log("Object Attribute:  ",std.name);
console.log("Destructuring an Object's Attribute:  ", name);
console.log("std.Uni.uniName   ", std.Uni.uniName);
console.log("uniName   ", uniName);


// Default Value assigned when have no value using OR operator
let variable = std.Uni.loc;
console.log("variable ", variable);
variable = std.Uni.loc || 'default value is automatically assigned because of OR operator when no value (initially) assigned';
console.log("variable ", variable);
variable = "Usama is Variable";
console.log("variable ", variable);


// ?. => agar array hai (exist karti) to loop chalao warna nahi (Optional Chaining Operator)
std.Uni.name?.forEach(element => {
    console.log("elements ", element);
})


// Rest Operator - When we don't know how many parameters/arguments can be used, same like spread operator but used as parameter. Makes an array of argument's values
function fun2(...argu) {
    console.log('argu ', argu);
}
fun2(1,2,'usama');


// Math.min() and Math.max()  Math.toFixed(2)
let num = [1,2,3,4,5,6,7]
console.log(Math.max(...num));
console.log(Math.min(...num));


/* async  await    (Promise) */

// let callbackFunction = () => {
//     return 'Return by wait method';
// }
// let wait = async() => {
//     await setTimeout(callbackFunction, 3000)
// }

// function wait() {
//     setTimeout(() => {       log=>undefined
async function wait() {
    await setTimeout(() => {
        return 'Return by wait method';
    }, 3000);
}

console.log(wait());    // can be a backend response, API sy Data call kiya time laga Server sy aany mein is lye await aysnc ka use



// _______________________________________
/* CodeWithHarry */

// 5 JavaScript Concepts Everyone Should Learn! 🔥         https://www.youtube.com/watch?v=xVpaF8527Qg

// JavaScipt ki nature Asynchronous hai yeh jis line of code ko run karny mein time lagta hai usky lye rukta nahi hai balkeh next code execute karta rehta hai aur phir jab pichly code yani aksar callback function ki execution khatam usy run karva deta hai, halankeh yeh time hamary lye to bhot kam hai lekin Interpreter ky lye bhot zyda hai.

// Callback Hell => Callback ky andar callback , phir usky andar callback and so on...
// Callback time lagata hai run hony mein is lye iski coding ky hisab sy agli lines of code chal jati hain aur jab yeh call back run hony ky qabil ho jata hai tab yeh execute hota hai utni deer is function sy bahir wali lines execute hoti rehti hain

// Promise  =>  yeh keh main vada karta hoon run ho jaon ga mujy callback function na do balkeh .then karo without passing error

// asnyc await  =>  Non-Blocking JS ko Blocking JS karna (JS ki Nature Change karna = Asynchronous ko kuch had tak Synchronous banana). yani kisi jagah cheezo ko sequence wise run karvana agarchy us ny time lagana jaisy files reading mein lekin hum chahty hain keh jab aik complete run ho jye then dosri chaly

// .map  =>  koi bhi kaam Array ky har individual index/element par karna aur last mein aik complete array return. Original Array not effected.

// .reduce   Array Method

// == Interpreter parses both sides into same dataTypes, then processed     1 == '1'  => TRUE
// === only processed if both sides have same dataTypes     1 === '1'  => FALSE