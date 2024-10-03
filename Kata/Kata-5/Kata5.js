function encryptMessage(message) {
   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const lowerAlphabet = alphabet.toLowerCase();
 
   return message.split('').map(char => {

     const isUpper = alphabet.includes(char);
     const isLower = lowerAlphabet.includes(char);
 
     return isUpper
       ? alphabet[(alphabet.indexOf(char) + 3) % 26] // Majuscule
       : isLower
       ? lowerAlphabet[(lowerAlphabet.indexOf(char) + 3) % 26] // Minuscule
       : char; // Caractères non alphabétiques inchangés
   }).join('');
 }
 
 const phrase = 'Cryptage de Caesar';
 const result = encryptMessage(phrase);
 console.log(result); // Résultat : 'Fubswdjh gh Fdhvdu'
 