
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
const leftNumbers = dodger.style.left.replace("px", "");
let left = parseInt(leftNumbers, 10);

if (left > 0) {
left -= 1;
dodger.style.left = `${left}px`;
}
}
//move to the right
function moveDodgerRight() {
const leftNumbers = dodger.style.left.replace("px", "");
let left = parseInt(leftNumbers, 10);

if (left < 360) { // Assuming the width of the box is 400px
left += 1;
dodger.style.left = `${left}px`;
}
}

document.addEventListener("keydown", function (event) {
if (event.key === "ArrowLeft") {
moveDodgerLeft();
} else if (event.key === "ArrowRight") {
moveDodgerRight();
}
});