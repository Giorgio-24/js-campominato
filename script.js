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
console.log(bombs);

const userNumbers = [];
console.log(userNumbers);

const bombsNumber = 16;

var i = 0;



do {//^BOMBS GENERATOR.
    var randomBombsNumber = Math.floor(Math.random() * (100 - 1) + 1);
    bombs.push(randomBombsNumber);
    i++;
} while (i < bombsNumber || !(bombs.includes(randomBombsNumber)));

var j = 0;

do {//^USER NUMBERS.
    var randomUserNumber = parseInt(prompt('Inserisci un numero da 1 a 100, attento a non ripeterti.'))
    userNumbers.push(randomUserNumber);
    j++;
} while (j < 100 && !(bombs.includes(randomUserNumber)));




console.log(userNumbers);
console.log(bombs);/* 

function generateUniqueRandom(maxNr) {
    //Generate random number
    let random = (Math.random() * maxNr).toFixed();
    if (!haveIt.includes(random)) {
        haveIt.push(random);
        return random;

        //Coerce to number by boxing
        random = Number(random);

        if (!haveIt.includes(random)) {
            haveIt.push(random);
            return random;
        } else {
            if (haveIt.length < maxNr) {
                //Recursively generate number
                return generateUniqueRandom(maxNr);
            } else {
                console.log('No more numbers available.')
                return false;
            }
        }
    } */