function fun() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    let sum = num1+num2+num3;
    if(sum<100) {
        var half = (100-sum)/2;
        document.getElementById("num2").value = num2+Math.floor(half);
        document.getElementById("num3").value = num3+Math.ceil(half);
    } else if(sum>100) {
        half = (sum-100)/2;
        document.getElementById("num2").value = num2-Math.floor(half);
        document.getElementById("num3").value = num3-Math.ceil(half);
    }

    // document.getElementById("ans").innerHTML = sum;
}

function minus1() {
    var str = parseInt(document.getElementById("num1").value);
    document.getElementById("num1").value = --str;
}

function plus1() {
    var str = parseInt(document.getElementById("num1").value);
    document.getElementById("num1").value = ++str;
}

function minus2() {
    var str = parseInt(document.getElementById("num2").value);
    document.getElementById("num2").value = --str;
}

function plus2() {
    var str = parseInt(document.getElementById("num2").value);
    document.getElementById("num2").value = ++str;
}

function minus3() {
    var str = parseInt(document.getElementById("num3").value);
    document.getElementById("num3").value = --str;
}

function plus3() {
    var str = parseInt(document.getElementById("num3").value);
    document.getElementById("num3").value = ++str;
}