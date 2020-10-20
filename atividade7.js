// // Faça um programa que calcule a potência (potenciação) de um número.
// // Para isso ele deve receber dois números de entrada: o primeiro número é a base da
// // potência, o segundo número será a potência.

let rs = require('readline-sync');

let result

let base = rs.questionInt('Digite um número: \n');

let potencia = rs.questionInt('Elevado á qual potência ? \n');

while(potencia > 0) { 
    result = base * base
    potencia--
}
console.log(result);