/** calculo do IMC
 * @author gustavo
 */
const prompt = require('prompt-sync')()


let peso, altura, imc 

console.clear()
console.log('calculo do imc ---------------')

peso = Number(prompt('digite o seu peso em kg:'))
altura = Number(prompt('digite a sua altura '))

imc = peso / (altura * altura)

console.log(`imc: ${imc.tofixed(2)}`)

if (imc < 18.5) {
    console.log('Peso baixo')
} else if (imc < 25) {
    console.log('Peso normal')
} else if (imc < 30) {
    console.log('Sobrepeso')
} else if (imc < 35) {
    console.log('Obesidade I')
} else if (imc < 40) {
    console.log('Obesidade II')
} else {
    console.log('Obesidade III')
}