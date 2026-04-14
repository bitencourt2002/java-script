/**
 * calculo da media de 2 notas
 * exemplo de uso da biblioteca prompt-sync
 * @author gustavo
 */  

const prompt = require('prompt-sync')()

let disciplina, nota1, nota2, media


console.clear()
console.log('calculo de media de 2 notas')

//entrada de dados
disciplina = prompt('digite o nome da disciplina:')
console.log(disciplina)
console.log(typeof{disciplina})
//number() converte para tipo numerico 
nota1 = Number (prompt('digite a nota1:'))
//console.log(nota1)
//console.log(typeof(nota1))
nota2 = Number (prompt('digite a nota2:'))

//processamento
media = (nota1+nota2) / 2

//saida
console.log(`media: ${media.toFixed(2)}`)

