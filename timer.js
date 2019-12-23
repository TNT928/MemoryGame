let timer = document.getElementById("timer");
let button = document.getElementById("btn");
let reset = document.getElementById("reset");
let close = document.getElementById("closeModal");
let totalGameTimeElement = document.getElementById('totalGameTime');
let totalGameMovesElement = document.getElementById('totalGameMoves')
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

let endgame = () => {

    //stop timer
    clearInterval(interval);

    //Gets total game time and moves for modal
    let totalGameMoves = moves.innerHTML;
    let totalGameTime = timer.innerHTML;
  
   
  
    //Shows total game time and moves for modal
    totalGameMovesElement.innerHTML = totalGameMoves;
    totalGameTimeElement.innerHTML = totalGameTime;


    // Show modal div
    document.querySelector('#modalDiv').classList.remove('hidden');

    // Close modal div
    close.addEventListener("click", function(){
        document.querySelector('#modalDiv').classList.add('hidden');
        timer.innerHTML = `0 mins 0 secs`;
        window.location.reload();
    })
};


 