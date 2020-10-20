let rs = require('readline-sync');

let number = rs.questionInt('Digite um número: \n');

let contador = 0

while(contador < number) {
    console.log('Bip Bip');
    number = number - 1;
}