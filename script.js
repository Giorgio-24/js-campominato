//=VARIABLES.
const bombs = [];

const userNumbers = [];

const bombsNumber = 16;

var difficulties = ['easy', 'medium', 'hard', 'insane'/*EASTER EGG SECRET MODE*/]

var choosenDifficulty;

var totalNumbers;

var j = 0;//^USER NUMBER COUNTER.


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
for (var v = 0; v < bombsNumber; v++) {
    var randomBombsNumber = Math.floor(Math.random() * (totalNumbers) + 1);
    if (!(bombs.includes(randomBombsNumber))) {
        bombs.push(randomBombsNumber);
    } else {
        v--;
    }
}

//?USER NUMBERS.
do {
    var randomUserNumber = parseInt(prompt('Inserisci un numero da 1 a ' + totalNumbers + ', attento a non ripeterti.'));
    if (!(userNumbers.includes(randomUserNumber)) && !(isNaN(randomUserNumber))
        && !(randomUserNumber < 1) && !(randomUserNumber > totalNumbers)) {
        //""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""//
        userNumbers.push(randomUserNumber);
    } else {
        alert('ATTENZIONE!! Inserisci un valore valido.');
        j--;//^ COSI IL CONTATORE NON AUMENTA; SENNO' PER VINCERE BASTEREBBE INSERIRE
        //^ SEMPRE LO STESSO NUMERO CONSAPEVOLMENTE.
    }

    j++;
} while (j < (totalNumbers - bombsNumber) && !(bombs.includes(randomUserNumber)));

//?RESULTS.
console.log("Numeri inseriti dall'utente: " + userNumbers);
console.log('Numeri delle bombe: ' + bombs.sort());
console.log('Il punteggio finale è di: ' + j + '/' + (totalNumbers - bombsNumber) + ' punti.');