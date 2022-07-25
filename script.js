let scr = document.querySelector("#screen");
let a;
let sum = 0;
let numCount;
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
    numCount = scr.innerHTML.split(a);
}
for (let i = 0; i < prop.length; i++) {
    prop[i].addEventListener("click", operate);
    }
function add() {
    for (let i = 0; i < numCount.length; i++) {
        sum += parseInt(numCount[i]);
    }
bottomScr.innerHTML = sum;
}

function sub() {
    for (let i = 0; i < numCount.length; i++) {
        sum = parseInt(numCount[0])- parseInt(numCount[1]);
    }
bottomScr.innerHTML = sum;
}
function multi() {

        sum = parseInt(numCount[0]) * parseInt(numCount[1]);
bottomScr.innerHTML = sum;
}
function operate(e) {
    if (scr.innerHTML !== "" && e.target.innerHTML !== "=") {
        a = e.target.innerHTML;
        scr.innerHTML += e.target.innerHTML;
    } else {
        scr.innerHTML = "";
    }
  if(e.target.innerHTML == "=") { 
    console.log(a);
if (a == "+") {
    add()
    }
 else if (a == "-") {
sub()
}  else if (a == "*") {
    multi()
}
}
}
clear.addEventListener("click", function() { bottomScr.innerHTML = "";
scr.innerHTML = "";
})