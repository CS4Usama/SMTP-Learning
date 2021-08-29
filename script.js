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