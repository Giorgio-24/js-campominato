//=VARIABLES AND FUNCTIONS.
const bombs = [];

const userNumbersList = [];

let bombsNumber;

const difficulties = ['easy', 'medium', 'hard', 'insane'/*EASTER EGG SECRET MODE*/]

let choosenDifficulty;

let totalNumbers;

let userScore = 0;//^USER NUMBER COUNTER AND ALSO SCORE COUNTER.

function getRandomNumber(min, max) {//?RANDOM NUMBER GENERATOR.
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//=GAME SETTINGS.
do {
    choosenDifficulty = prompt('Scegli una difficoltà: "easy", "medium", "hard".')
} while (!(difficulties.includes(choosenDifficulty)));


if (choosenDifficulty == difficulties[0]) {
    totalNumbers = 100;
    bombsNumber = 15;
} else if (choosenDifficulty == difficulties[1]) {
    totalNumbers = 80;
    bombsNumber = 20;
} else if (choosenDifficulty == difficulties[2]) {
    totalNumbers = 60;
    bombsNumber = 25;
} else if (choosenDifficulty == difficulties[3]) {
    totalNumbers = 30;
    bombsNumber = 28;
}

//?BOMBS GENERATOR.
while (bombs.length < bombsNumber) {
    var randomBombsNumber = getRandomNumber(1, totalNumbers)
    if (!(bombs.includes(randomBombsNumber))) {
        bombs.push(randomBombsNumber)
    }
}

//?USER NUMBERS.
do {
    var chosenUserNumber = parseInt(prompt('Inserisci un numero da 1 a ' + totalNumbers + ', attento a non ripeterti.'));
    if (!(userNumbersList.includes(chosenUserNumber)) && !(isNaN(chosenUserNumber))
        && !(chosenUserNumber < 1) && !(chosenUserNumber > totalNumbers)) {
        //""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""//
        userNumbersList.push(chosenUserNumber);
        userScore++;//^IL PUNTEGGIO AUMENTA.
    } else {
        alert('ATTENZIONE!! Inserisci un valore valido.');
    }

} while (userScore < (totalNumbers - bombsNumber) && !(bombs.includes(chosenUserNumber)));

//?RESULTS.
if (bombs.includes(chosenUserNumber)) {
    alert('Oh no! Hai preso una bomba ed hai perso.');
    console.log("Numeri inseriti dall'utente: " + userNumbersList);
    console.log('Numeri delle bombe: ' + bombs.sort());
    console.log('Il numero che ti ha fatto perdere è: ' + chosenUserNumber);
    console.log('Il punteggio finale è di: ' + (userScore - 1) + '/' + (totalNumbers - bombsNumber) + ' punti.');
} else {
    console.log('Congratulazioni! Hai vinto!')
}