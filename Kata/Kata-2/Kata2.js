/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
 */

const numbers = [1, 2, 3, 4, 5, 6];

// your code here

function sumOfEvenNumbers(numbers) {
   return numbers.reduce((acc, curr) => { 
      if (curr % 2 === 0) { 
         acc += curr; 
      }
      return acc;
   }, 0); 
}

console.log(sumOfEvenNumbers(numbers));


/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
 */

const numbers2 = [12, 21, 67, 36, 49, 51];

// your code here
function maxNumber(numbers) {
   return Math.max(...numbers);
}

console.log(maxNumber(numbers2));