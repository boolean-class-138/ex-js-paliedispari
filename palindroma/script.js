// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/**
 * Check if a word is palindrome
 * 
 * @param {string} word - the word to check
 * @returns {boolean}
 */
function isPalindrome(word) {
    let reverseWord = "";
    for(let i = word.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + word[i];
    }

    if(word.toLowerCase() === reverseWord.toLowerCase()) {
       return true;
    }
    
    return false;
}

// PROGRAMMA PRINCIPALE
const userWord = prompt("Inserisci una parola");
const checkIsPalindrome = isPalindrome(userWord);

if(checkIsPalindrome) {
    console.log("la parola è palindroma");
} else {
    console.log("la parola non è palindroma");
}

// location.reload()