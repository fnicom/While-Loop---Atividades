// Faça um programa que recebe um número e imprima todos os
// números pares de 0 até o número inserido.
// Ex: usuário inseriu 8
// O programa imprime
// 0
// 2
// 4
// 6
// 8

let rs = require('readline-sync');

let cont = rs.questionInt('Digite um número: \n')

let par = 0

while (par <= cont) {
    
    console.log(`Par ${par}`);

    par = par + 2
      
} 