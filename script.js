
var wins;
var losses;
var sec;

document.getElementById("Start").addEventListener("click", timer);

function timer() {
    console.log("hello")
}
localStorage.setItem("wins", 3);
localStorage.setItem("losses", 5);

var winsOutput = localStorage.getItem("wins");
document.getElementById("wins").textContent = winsOutput;

var lossesOutput = localStorage.getItem("losses");
document.getElementById("losses").textContent = lossesOutput;

//var countDown = new Date("30").getTime()
function countDown() {
    var sec = 30;
    var timer = setInterval(function () {
        document.getElementById("countDownDisplay").innerHTML = "0" + sec;
        sec--;

    }, 1000)
}
document.getElementById("countDownDisplay").textContent = countDown;
