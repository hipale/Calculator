let scr = document.querySelector("#screen");
let a;
let y = 0;
let sum = 0;
let numCount;
scr.innerHTML = "";
let clear = document.querySelector("#clearButt");
let prop = document.querySelectorAll(".prop");
let bottomScr = document.querySelector("#bottomScreen");
let reverseButt = document.querySelector("#reverseNum");
const tile = document.querySelectorAll(".tile");
let dot = document.querySelector("#dot");
for (let i = 0; i < tile.length; i++) {
    tile[i].addEventListener("click", addNum);
}
function addNum(e) {
    scr.innerHTML += e.target.innerHTML;
    numCount = scr.innerHTML.split(a); 
    fraction()
//splitting array, for using it during equations
}
for (let i = 0; i < prop.length; i++) {
    prop[i].addEventListener("click", operate);
}
function add() {
    sum = parseFloat(numCount[0]) + parseFloat(numCount[1]);
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
    if (scr.innerHTML !== "" && e.target.innerHTML != "=" && y < 1) {
        a = e.target.innerHTML;
        scr.innerHTML += e.target.innerHTML;      
    } else if(y < 1) {
        scr.innerHTML = "";
    }
    choseMethod()
    
    if(e.target.innerHTML == "=" || y > 1) {
        if(sum !=0) {
            scr.innerHTML = sum;
            bottomScr.innerHTML = `${numCount[0]} ${a} ${numCount[1]}`;
        } else {
        numCount[1] = 0;
            scr.innerHTML = numCount[0];
            bottomScr.innerHTML = numCount[0];
        }
            y = 0;
            if(e.target.innerHTML != "=") {
            scr.innerHTML +=e.target.innerHTML;  
            a = e.target.innerHTML;  
            }  
        }
        y +=2;
}
clear.addEventListener("click", function () {
    bottomScr.innerHTML = "";
    scr.innerHTML = "";
});
reverseButt.addEventListener("click", function () {
    const arrayPos = numCount.length - 1;
  numCount[arrayPos] *= -1;

if (arrayPos == 0) {
    scr.innerHTML = `${numCount[0]}`;
} else if(arrayPos == 1) {
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
dot.addEventListener("click", fraction)
function fraction() {
    const arrayPos = numCount.length - 1;
    for(let i = 0; i < arrayPos.length; i++) {
if(arrayPos[i] == ".") 
dot.removeEventListener("click", fraction);
    }
};