alert("hello");
let car = document.getElementById("car");
let jeep = document.getElementById("jeep");
let result = document.getElementById("result");
const score = document.getElementById("score");
let game = document.getElementById("game");
let counter = 0;
const carraceSound = new Audio("carrace.mp3");
const accidentSound = new Audio("accident.mp3");
const musicSound = new Audio("music.mp3");


//display of car

car.addEventListener("animationiteration", function () {
    let random = ((Math.floor(Math.random() * 3)) * 130);
    car.style.left = random + "px";
    musicSound.play()
    counter++
});

// display of jeep

window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        let jeepLeft = parseInt(window.getComputedStyle(jeep).getPropertyValue("left"));
        if (jeepLeft < 260) {
            jeep.style.left = (jeepLeft + 130) + "px";
            carraceSound.play()
        }
    }

    if (e.keyCode == "37") {

        let jeepLeft = parseInt(window.getComputedStyle(jeep).getPropertyValue("left"));
        if (jeepLeft > 0) {
            jeep.style.left = (jeepLeft - 130) + "px";
            carraceSound.play()
        }
    }
})

//Game Over

setInterval(function Gameover() {
    let carTop = parseInt(window.getComputedStyle(car).getPropertyValue("top"));
    let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    let jeepLeft = parseInt(window.getComputedStyle(jeep).getPropertyValue("left"));


    if ((carLeft === jeepLeft) && (carTop > 350) && (carTop < 550)) {

        result.style.display = "block";
        game.style.display = "none"
        score.innerHTML = `score: ${counter}`;

        counter = 0;
    }
}, 50
)