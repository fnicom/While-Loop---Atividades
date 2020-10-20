// Escreva um algoritmo que imprima todos os números ímpares de 1
// até 100

let rs = require('readline-sync');

let cont = 1;

while (cont <= 100) {
    let resto = cont%2;
    if (resto == 1) {
        
        console.log(`Impar ${cont}`);
    }
    cont = cont + 1;
}
