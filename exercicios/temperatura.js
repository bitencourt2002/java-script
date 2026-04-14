/**
 * exercicios - conversao de temperatura
 * @author gustavo
 * 
 */
const prompt = require('prompt-sync')()

//variaveis
let c,f

console.clear()
console.log('conversao de temperatura fahrenheit -> celsius')

//entrada
f = Number(prompt('digite a temperatura em fahrenheit:'))

//processamento 
c =(f - 32)* 5/9

//saida
console.log(`${f} ° f equivale a ${ c.toFixed(1)}° c`)


