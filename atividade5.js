// Faça um programa que pergunta ao usuário :
// “Insira 0 para sair ou qualquer outra tecla para o continuar.”
// Se o usuário inserir 0 o programa encerra.
// Se o usuário inserir qualquer outra coisa o programa pergunta novamente :
// “Insira 0 para sair ou qualquer outro número para o continuar.”
// Até o usuário sair 

let rs = require('readline-sync');

// let user = rs.questionInt('Digite 0 para sair: \n');

// let sair = 0

// while(user !== sair){
//     if(user == 0){ 
//         break;
//     }
//     user = rs.question('Insira 0 para sair ou qualquer outro número para o continuar: \n'); // variavel sair deveria ser um numero inteiro
// } 
// console.log('FIM')

let respUser

while(respUser !== 0) {
    respUser = rs.questionInt('Insira 0 para sair ou qualquer outro numero para continuar \n')
} // enquanto resposta do usuario for diferente de 0 o loop continua rodando. //
// Se o usuario digitar 0 o loop encerra