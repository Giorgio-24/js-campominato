/* Consegna
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 
100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.
BONUS: (da fare solo se funziona tutto il resto) */

const bombs = [];

const userNumbers = [];

const bombsNumber = 16;

var difficulties = ['easy', 'medium', 'hard', 'insane'/*EASTER EGG SECRET MODE*/]

var choosenDifficulty;

var x = 0;

var totalNumbers;

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

var i = 0;

for (var v = 0; v < bombsNumber; v++) {//^BOMBS GENERATOR.
    var randomBombsNumber = Math.floor(Math.random() * (totalNumbers) + 1);
    if (!(bombs.includes(randomBombsNumber))) {
        bombs.push(randomBombsNumber);
    } else {
        v--;
    }
}

var j = 0;//?USER NUMBER COUNTER.

do {//^USER NUMBERS.
    var randomUserNumber = parseInt(prompt('Inserisci un numero da 1 a ' + totalNumbers + ', attento a non ripeterti.'));
    if (!(userNumbers.includes(randomUserNumber)) && !(isNaN(randomUserNumber))
        && !(randomUserNumber < 1) && !(randomUserNumber > totalNumbers)) {
        //""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""//
        userNumbers.push(randomUserNumber);
    } else {
        alert('ATTENZIONE!! Inserisci un valore valido.');
        j--;//?COSI IL CONTATORE NON AUMENTA; SENNO' PER VINCERE BASTEREBBE INSERIRE SEMPRE LO STESSO NUMERO CONSAPEVOLMENTE.
    }

    j++;
} while (j < (totalNumbers - bombsNumber) && !(bombs.includes(randomUserNumber)));

console.log("Numeri inseriti dall'utente: " + userNumbers);
console.log('Numeri delle bombe: ' + bombs.sort());
console.log('Il punteggio finale è di: ' + j + '/' + (totalNumbers - bombsNumber) + ' punti.');
