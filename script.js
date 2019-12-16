function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (++timer < 0) {
            timer = duration;
        }
    }, 1000);
}

let button = () => {
    let timeStart = 0,
    display = document.querySelector('#time');
startTimer(timeStart, display);
}


//create a function that changes the text inside button from "start" onClick to "reset"
//create an if/else statement that changes the function from button() to start timer based 
//what text is in the button, if start button()runs timer. If reset() button resets timer to 0. 