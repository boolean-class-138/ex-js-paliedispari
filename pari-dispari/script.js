// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

/**
 * Returns a random number between min and max (both included).
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @returns {number}
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * Check if a number is even.
 * 
 * @param {number} num 
 * @returns {boolean}
 */
function isEven(num){
    if(num % 2 === 0) {
        return true;
    }
    return false;
}

// PROGRAMMA PRINCIPALE

let userEvenOrOdd;
do {
    userEvenOrOdd = prompt("Inserisci pari o dispari");
} while(userEvenOrOdd !== 'pari' && userEvenOrOdd !== 'dispari')

let userNumber;
do {
    userNumber = Number(prompt("Inserisci un numero fra 1 e 5"));
} while(isNaN(userNumber) || userNumber < 1 || userNumber > 5)

const cpuNumber = getRndInteger(1, 5);
const sum = userNumber + cpuNumber;

if((isEven(sum) && userEvenOrOdd === 'pari') || (!isEven(sum) && userEvenOrOdd === 'dispari')) {
    alert("Hai vinto");
} else {
    alert("Hai perso");
}