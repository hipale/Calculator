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
for (let i = 0; i < tile.length; i++) {
    tile[i].addEventListener("click", addNum);
}
function addNum(e) {
    scr.innerHTML += e.target.innerHTML;
    numCount = scr.innerHTML.split(a);
}
for (let i = 0; i < prop.length; i++) {
    prop[i].addEventListener("click", operate);
}
function add() {
    sum = parseInt(numCount[0]) + parseInt(numCount[1]);
}
function sub() {
    sum = parseInt(numCount[0]) - parseInt(numCount[1]);
}
function multi() {
    sum = parseInt(numCount[0]) * parseInt(numCount[1]);
}
function divi() {
    sum = parseInt(numCount[0]) / parseInt(numCount[1]);
}
function mod() {
    sum = parseInt(numCount[0]) % parseInt(numCount[1]);
}
function operate(e) {
    if (scr.innerHTML !== "" && e.target.innerHTML != "=") {
        a = e.target.innerHTML;
        scr.innerHTML += e.target.innerHTML;
        y++;
    } else {
        scr.innerHTML = "";
    }
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
        if(e.target.innerHTML == "=" || y > 1) {
            scr.innerHTML = sum;
            bottomScr.innerHTML = `${numCount[0]} ${a} ${numCount[1]}`;
            y = 0;
        }
}
clear.addEventListener("click", function () {
    bottomScr.innerHTML = "";
    scr.innerHTML = "";
})



reverseButt.addEventListener("click", function () {
numCount[numCount.length - 1] = numCount[numCount.length - 1] * -1;
console.log(numCount);
let sliced = numCount.slice(numCount.length - 1)
numCount.push(numCount[numCount.length - 1]);
scr.innerHTML = 
});