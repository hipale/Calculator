let scr = document.querySelector("#screen");
let a;
let sum = 0;
scr.innerHTML = "";
let clear = document.querySelector("#clearButt");
let prop = document.querySelectorAll(".prop");
let bottomScr = document.querySelector("#bottomScreen");
const tile = document.querySelectorAll(".tile");
for (let i = 0; i < tile.length; i++) {
    tile[i].addEventListener("click", addNum);
}

function addNum(e) { 
scr.innerHTML += e.target.innerHTML;
}
function add() {
    for (let i = 0; i < numCount.length; i++) {
        return sum += numCount[i];
    }
bottomScr.innerHTML = sum;
}

function sub() {
a = " - ";
scr.innerHTML += " - ";
}
function multi() {
    a = " * ";
    scr.innerHTML = " * ";
}
function operate(e) {
    if (scr.innerHTML !== "") {
        a = e.target.innerHTML;
        console.log(a);
        scr.innerHTML += e.target.innerHTML;
        let numCount = scr.innerHTML.split(a);
    } else {
        scr.innerHTML = "";
    }

  if(e.target.innerHTML == "=") {
if (a == "+") {
    add()
    }
 else if (a == "-") {
sub()
}  else if (a == "*") {
    multi()
}
 bottomScr.innerHTML = sum;
 scr.innerHTML = "";
}
}
clear.addEventListener("click", function() { bottomScr.innerHTML = "";
scr.innerHTML = "";
})