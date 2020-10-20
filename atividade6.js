// Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
// EX: usuário informou BANANA
// Algoritmo imprime:
// ANANAB

let rs = require('readline-sync');

let word = rs.question('Escreva uma palavra: \n');

console.log(word.split('').reverse().join(''));

