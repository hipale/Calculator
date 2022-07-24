let scr = document.querySelector("#screen");
let a;
let sum = 0;
scr.innerHTML = "";
let bottomScr = document.querySelector("#bottomScreen");
const tile = document.querySelectorAll(".tile");
for (let i = 0; i < tile.length; i++) {
    tile[i].addEventListener("click", addNum);
}

function addNum(e) { 
scr.innerHTML += e.target.innerHTML;
}
function add() {
a = " + ";
scr.innerHTML += " + "
}
function sub() {
a = " - "
scr.innerHTML += " - "
}
function operate() {
  let numCount = scr.innerHTML.split(a);
if (a == " + ") {
    for(let i = 0; i < numCount.length; i++) {
        sum += parseInt(numCount[i]);
    }
} else if (a == " - ") {
sum = numCount[0] - numCount[1];
}
 
 console.log(sum);
 bottomScr.innerHTML = sum;
 scr.innerHTML = "";
}