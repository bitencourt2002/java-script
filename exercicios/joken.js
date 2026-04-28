/**
 * 
 * @author gustavo
 */

const { random } = require('colors')

const prompt = require ( 'prompt-sync')()

let jogador, computador 

console.clear()
console.log('teste\\')

console.log("    __     _____         _____   ")
console.log(" __|  |___|  |  |___ ___|  _  |___ ")
console.log("|  |  | . |    -| -_|   |   __| . |")
console.log("|_____|___|__|__|___|_|_|__|  |___|")
console.log("")

//logica do jogador 

console.log('1.pedra')
console.log('2.papel')
console.log('3.tesoura')
jogador = Number(prompt('digite a opção desejada:'))
console.log('')

switch (jogador) {
    case 1:
        console.log( 'jogador escolheu pedra')
        break
     case 2:
        console.log( 'jogador escolheu papel')
        break
     case 3:
        console.log( 'jogador escolheu tesoura ')
        break

        default: 
            console.log('opçao invalida')
            break;
}







// logica do computador 

computador = Math.ceil( Math,random()*3) 

switch ( computador)  {
    case 1:
        console.log( 'computador escolheu pedra')
        break;
}
switch ( computador)  {
     case 2:
        console.log( 'computador escolheu papel')
        break;
}
switch ( computador)  {
        case 3:
        console.log( 'computador escolheu tesoura ')
        break;

}

if ( jogador === computador) {
    console.log('empate')

} else if ((jogador === 1 && computador === 3 ) || ( jogador)) {
    console.log( ' jogador venceu')

} else {
    console.log('computador venceu')
}