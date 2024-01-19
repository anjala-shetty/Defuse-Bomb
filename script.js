let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
defuserEl.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserEl.value;
    console.log(bombDefuserText);
    if (event.key === "Enter" && bombDefuserText === "defuse" && countdown !== 0) {
        timerEl.textContent = "You did it!";
        clearInterval(intervalId);
    }
});

let countdown = 10;
let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerEl.textContent = countdown;
    if (countdown === 0) {
        timerEl.textContent = "BOOM!!";
        clearInterval(intervalId);
    }

}, 1000);