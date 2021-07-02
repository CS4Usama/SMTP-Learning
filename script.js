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