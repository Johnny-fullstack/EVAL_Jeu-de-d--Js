// Variabbles et sélecteurs pour les différents scores
var globalPlayer1 = document.getElementById('globalPlayer1');
var globalPlayer2 = document.getElementById('globalPlayer2');

var roundPlayer1 = document.getElementById('roundPlayer1');
var roundPlayer2 = document.getElementById('roundPlayer2');

var scorePlayer1 = 0;
var scorePlayer2 = 0;

var totalPlayer1 = 0;
var totalPlayer2 = 0;

globalPlayer1.innerHTML = totalPlayer1;
globalPlayer2.innerHTML = totalPlayer2;

roundPlayer1.innerHTML = scorePlayer1;
roundPlayer2.innerHTML = scorePlayer2;

// Variables d'opacité et rond rouge selon le tour 
var opacJ1 = document.getElementById("opacJ1")
var opacJ2 = document.getElementById("opacJ2")

// Fonctions du boutton ROLL DICE selon le tour 
  function player1Turn() {
        opacJ2.style.opacity = "0.3";
        opacJ1.style.opacity = "1";
        let randomNumber = Math.floor(Math.random() * (6)) + 1;
        let dice = document.querySelector("img")
        dice.setAttribute("src", "./dice/face_"+ randomNumber +".png")
        if (randomNumber >= 2) {
            scorePlayer1 += randomNumber; 
            roundPlayer1.innerHTML = scorePlayer1;
        } else if(randomNumber = 1) { 
            opacJ1.style.opacity = "0.3";
            opacJ2.style.opacity = "1";   
            
            
            scorePlayer1 = 0;
            rollDice.removeEventListener('click', player1Turn);
            rollDice.addEventListener('click', player2Turn);
            holdButton.removeEventListener('click', holdPlayer1);
            holdButton.addEventListener('click', holdPlayer2);
            setTimeout(alert('Perdu, vous avez fait 1, au tour du joueur 2.'), 3000);
            roundPlayer1.innerHTML = scorePlayer1;
        }
};

  function player2Turn() {
    opacJ1.style.opacity = "0.3";
    opacJ2.style.opacity = "1";
    let randomNumber = Math.floor(Math.random() * (6)) + 1;
    let dice = document.querySelector("img")
    dice.setAttribute("src", "./dice/face_"+ randomNumber +".png")
    if (randomNumber >= 2) {
        scorePlayer2 += randomNumber; 
        roundPlayer2.innerHTML = scorePlayer2;
    } else if(randomNumber = 1) { 
        opacJ2.style.opacity = "0.3";
        opacJ1.style.opacity = "1";


        scorePlayer2 = 0;
        rollDice.removeEventListener('click', player2Turn);
        rollDice.addEventListener('click', player1Turn);
        holdButton.removeEventListener('click', holdPlayer2);
        holdButton.addEventListener('click', holdPlayer1);
        setTimeout(alert('Perdu, vous avez fait 1, au tour du joueur 1.'), 3000);
        roundPlayer2.innerHTML = scorePlayer2;
    }
};

// Fonctions pour le boutton HOLD


function holdPlayer1() {
    opacJ1.style.opacity = "0.3";
    opacJ2.style.opacity = "1";
    totalPlayer1 += scorePlayer1;
    globalPlayer1.innerHTML = totalPlayer1; 
    scorePlayer1 = 0;
    roundPlayer1.innerHTML = scorePlayer1;
    rollDice.removeEventListener('click', player1Turn);
    rollDice.addEventListener('click', player2Turn);
    holdButton.removeEventListener('click', holdPlayer1);
    holdButton.addEventListener('click', holdPlayer2);
    if (totalPlayer1 >= 100) {
        alert('Bravo ! Vous avez atteint le score de 100 ! Le joueur 1 remporte la partie ! cliquer sur NEW GAME pour relancer.')
        rollDice.removeEventListener('click', player1Turn);
        holdButton.removeEventListener('click', holdPlayer1);
        rollDice.removeEventListener('click', player2Turn);
        holdButton.removeEventListener('click', holdPlayer2);
        opacJ1.style.opacity = "1";
    }
     else {alert('Au tour du joueur 2.')}
};

function holdPlayer2() {
    opacJ2.style.opacity = "0.3";
    opacJ1.style.opacity = "1";
    totalPlayer2 += scorePlayer2;
    globalPlayer2.innerHTML = totalPlayer2;
    scorePlayer2 = 0;
    roundPlayer2.innerHTML = scorePlayer2;    
    rollDice.removeEventListener('click', player2Turn);
    rollDice.addEventListener('click', player1Turn);
    holdButton.removeEventListener('click', holdPlayer2);
    holdButton.addEventListener('click', holdPlayer1);
    if (totalPlayer2 >= 100) {
        alert('Bravo ! Vous avez atteint le score de 100 ! Le joueur 2 remporte la partie ! cliquer sur NEW GAME pour relancer.')
        rollDice.removeEventListener('click', player1Turn);
        holdButton.removeEventListener('click', holdPlayer1);
        rollDice.removeEventListener('click', player2Turn);
        holdButton.removeEventListener('click', holdPlayer2);
        opacJ2.style.opacity = "1";
    }
     else {alert('Au tour du joueur 1.')}
}

// sélecteurs pour les bouttons ROLL DICE et HOLD
let rollDice = document.getElementById('buttonRound');
let holdButton = document.getElementById('buttonHold');

rollDice.addEventListener('click', player1Turn)
holdButton.addEventListener('click', holdPlayer1);


