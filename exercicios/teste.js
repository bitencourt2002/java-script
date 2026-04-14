/**
 * 
 * @author gustavo
  * 
 */
//variaveis

const prompt = require('prompt-sync')()



let valorReais, cotacao, valorDolar

console.clear()
console.log('converte o Real $ para o dolar (US$) ')

//entrada

valorReais = Number(prompt('digite o valor em reais ($):'))
cotacao =Number(prompt('digite a cotacao:'))

//processamento
valorDolar = valorReais / cotacao

//saida 
console.log(`Valor em dólar: US$ ${valorDolar.toFixed(2)}`)
