console.log("Hello");

let timerInterval = setInterval(calcTimer, 1000);

function calcTimer() {
    let today = new Date();
    let saleDeadLine = new Date(2024, 10, 5); 
    let delta = (saleDeadLine - today) / 1000;

    if (delta <= 0) {
        clearInterval(timerInterval);
        delta = 0;
    }

    delta = Math.trunc(delta);

    let hours = Math.trunc(delta / 3600);
    let minutes = Math.trunc(delta / 60) - hours * 60;
    let seconds = delta - hours * 3600 - minutes * 60;
    
    let hoursELem = document.getElementById("timerHours");
    let minutesELem = document.getElementById("timerMinutes");
    let secondsELem = document.getElementById("timerSeconds");
    
    hoursELem.innerHTML = twoDigits(hours);
    minutesELem.innerHTML = twoDigits(minutes);
    secondsELem.innerHTML = twoDigits(seconds);
}

function twoDigits(num) {
    return num < 10 ? "0" + num : num;
}

calcTimer() ;











