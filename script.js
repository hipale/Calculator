let scr = document.querySelector("#screen");
let bottomScr = document.querySelector("#bottomScreen");
const tile = document.querySelectorAll(".tile");
const property = document.querySelectorAll(".propertie");
for (let i = 0; i < tile.length; i++) {
    tile[i].addEventListener("click", addNum);
}

function addNum(e) {
scr.innerHTML = scr.innerHTML + e.target.innerHTML;

}
for (let i = 0; i < property.length; i++) {
    property[i].addEventListener("click", eventMake);
}
function eventMake(e) {
    if (e.target.innerHTML == "+") {
        bottomScr.innerHTML = bottomScr.innerHTML + scr.innerHTML;
        scr.innerHTML = "";   
        console.log("e");
    }
}