let scr = document.querySelector("#screen");
let a = "";
let y = 0;
let sum = 0;
let numCount = [0];
scr.innerHTML = "";
let clear = document.querySelector("#clearButt");
let prop = document.querySelectorAll(".prop");
let bottomScr = document.querySelector("#bottomScreen");
let reverseButt = document.querySelector("#reverseNum");
const tile = document.querySelectorAll(".tile");
let dot = document.querySelector("#dot");
let pi = document.querySelector("#pi");
let piNum = 0;
for (let i = 0; i < tile.length; i++) {
    tile[i].addEventListener("click", addNum);
}
function addNum(e) {
    const arrayPos = numCount.length - 1;
    if(numCount[arrayPos] == "" && piNum == 0) {
        dot.addEventListener("click", fraction);
    }
    scr.innerHTML += e.target.innerHTML;
    numCount = scr.innerHTML.split(a);
    //splitting array, for using it during equations
}
for (let i = 0; i < prop.length; i++) {
    prop[i].addEventListener("click", operate);
}
function add() {
    sum = (parseFloat(numCount[0]) + parseFloat(numCount[1]));
}
function sub() {
    sum = parseFloat(numCount[0]) - parseFloat(numCount[1]);
}
function multi() {
    sum = parseFloat(numCount[0]) * parseFloat(numCount[1]);
}
function divi() {
    sum = parseFloat(numCount[0]) / parseFloat(numCount[1]);
    sum = sum.toFixed(2);
}
function mod() {
    sum = parseFloat(numCount[0]) % parseFloat(numCount[1]);
}
function operate(e) {
    //button cannot be clicked if screen is empty
    if (scr.innerHTML !== "" && e.target.innerHTML != "=" && y < 1) {
        a = e.target.innerHTML;
        scr.innerHTML += e.target.innerHTML;
        dot.addEventListener("click", fraction);
        pi.addEventListener("click", addPi);
        piNum = 0;
    } else if (y < 1) {
        scr.innerHTML = "";
    }
    choseMethod()
    sum = sum.toFixed(2);
    if (numCount.length == 1) {
        numCount[1] = 0;
        y++;
        sum = numCount[0];
       if(a == "") {
        a = "+"
       }
    } 
    if (e.target.innerHTML == "=" || y > 1) {
        setResult()
        sum = Math.round(sum).toFixed(1);
        y = 0;
        if (e.target.innerHTML != "=") {
            scr.innerHTML += e.target.innerHTML;
            a = e.target.innerHTML;
        }
    }
    y += 2;
}
clear.addEventListener("click", function () {
    bottomScr.innerHTML = "";
    scr.innerHTML = "";
    y = 0;
    pi.addEventListener("click", addPi);
    piNum = 0;
});
reverseButt.addEventListener("click", function () {
    const arrayPos = numCount.length - 1;
    numCount[arrayPos] *= -1;

    if (arrayPos == 0) {
        scr.innerHTML = `${numCount[0]}`;
        y = 0;
    } else if (arrayPos == 1) {
        scr.innerHTML = `${numCount[0]}${a}${numCount[1]}`;
    }
});

function choseMethod() {
    if (a == "+") {
        add()
    }
    else if (a == "-") {
        sub()
    } else if (a == "*") {
        multi()
    } else if (a == ":") {
        divi()
    } else if (a == "%") {
        mod()
    }
};

function fraction(e) {
    scr.innerHTML += ".";
 dot.removeEventListener("click", fraction); 
 pi.removeEventListener("click", addPi);
 piNum = 1;
};
function setResult() {
    if (sum != 0) {
        scr.innerHTML = sum;
        bottomScr.innerHTML = `${numCount[0]} ${a} ${numCount[1]}`;
    } 
}
pi.addEventListener("click", addPi);
 function addPi() {
let arrayPos = numCount.length - 1;
    if(numCount[arrayPos] == "") {
        scr.innerHTML += 3.14;
        pi.removeEventListener("click", addPi);
        dot.removeEventListener("click", fraction);
        piNum = 1;
        numCount[arrayPos] += 3.14;
    }
 };