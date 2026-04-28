/**
 * exemplo de uso da estrutura switch case
 * @author gustavo
 */


const prompt = require('prompt-sync')()

let opcao

console.clear()
console.log('menu de opçoes:')
console.log('')
console.log('1. cadastro de clientes')
console.log('2. cadastro de produto')
console.log('3. relatorios')
opcao = Number(prompt('digete a opçao desejada:'))

// uso da estrutura switch case para tratamento do valor digitado. obs: esta estrutura aceita variaveis numericas do tipo numeros inteiros e caracter unicos, dentro da estrutrura

switch (opcao) {
    case 1: 
    console.clear()
    console.log('tela de cadastro de clientes')
    break

case 2:
    console.clear()
    console.log('tela de cadastro de produtos')
    break
case 1: 
    console.clear()
    console.log('tela de cadastro de clientes')

    break

    default: 
    console.clear()
    console.log('opçao invalida')

    break



}

