//=VARIABLES.
const bombs = [];

const userNumbersList = [];

const bombsNumber = 16;

const difficulties = ['easy', 'medium', 'hard', 'insane'/*EASTER EGG SECRET MODE*/]

let choosenDifficulty;

let totalNumbers;

let j = 0;//^USER NUMBER COUNTER.


//=GAME SETTINGS.
do {
    choosenDifficulty = prompt('Scegli una difficoltà: "easy", "medium", "hard".')
} while (!(difficulties.includes(choosenDifficulty)));


if (choosenDifficulty == difficulties[0]) {
    totalNumbers = 100;
} else if (choosenDifficulty == difficulties[1]) {
    totalNumbers = 80;
} else if (choosenDifficulty == difficulties[2]) {
    totalNumbers = 50;
} else if (choosenDifficulty == difficulties[3]) {
    totalNumbers = 20;
}


//?BOMBS GENERATOR.
for (let v = 0; v < bombsNumber; v++) {
    const randomBombsNumber = Math.floor(Math.random() * (totalNumbers) + 1);
    if (!(bombs.includes(randomBombsNumber))) {
        bombs.push(randomBombsNumber);
    } else {
        v--;
    }
}

//?USER NUMBERS.
do {
    var chosenUserNumber = parseInt(prompt('Inserisci un numero da 1 a ' + totalNumbers + ', attento a non ripeterti.'));
    if (!(userNumbersList.includes(chosenUserNumber)) && !(isNaN(chosenUserNumber))
        && !(chosenUserNumber < 1) && !(chosenUserNumber > totalNumbers)) {
        //""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""//
        userNumbersList.push(chosenUserNumber);
    } else {
        alert('ATTENZIONE!! Inserisci un valore valido.');
        j--;//^ COSI IL CONTATORE NON AUMENTA; SENNO' PER VINCERE BASTEREBBE INSERIRE
        //^ SEMPRE LO STESSO NUMERO CONSAPEVOLMENTE.
    }

    j++;
} while (j < (totalNumbers - bombsNumber) && !(bombs.includes(chosenUserNumber)));

//?RESULTS.
console.log("Numeri inseriti dall'utente: " + userNumbersList);
console.log('Numeri delle bombe: ' + bombs.sort());
console.log('Il numero che ti ha fatto perdere è: ' + chosenUserNumber);
console.log('Il punteggio finale è di: ' + (j - 1) + '/' + (totalNumbers - bombsNumber) + ' punti.');