let timer = document.getElementById("timer");
let button = document.getElementById("btn");
let reset = document.getElementById("reset");
let btnClosingTime = document.getElementById("closeModal");
let totalGameTimeElement = document.getElementById('totalGameTime');
let totalGameMovesElement = document.getElementById('totalGameMoves')
let second = 1,
    minute = 0,
    hour = 0,
    interval;



button.addEventListener("click", function (event) {
    //prevents start button from adding mutliple intervals
    clearInterval(interval);
    

    //starts timer
    interval = setInterval(function () {

        //records timer
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
    
    AddCardClickListeners();
    ShuffleCards();
}, {
    once: true
});

reset.addEventListener("click", function () {
    second = 0;
    minute = 0;
    timer.innerHTML = `0 mins 0 secs`;
    clearInterval(interval);
    window.location.reload();
})