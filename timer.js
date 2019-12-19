let timer = document.getElementById("timer");
let button = document.getElementById("btn");
let reset = document.getElementById("reset");
let second = 1,
    minute = 0,
    hour = 0,
    interval;

button.addEventListener("click", function (event) {
    clearInterval(interval);

    interval = setInterval(function () {
        timer.innerHTML = `${minute} mins ${second} secs`;
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
});

reset.addEventListener("click", function (event) {
    second = 0;
    minute = 0;
    timer.innerHTML = `0 mins 0 secs`;
    clearInterval(interval);

})