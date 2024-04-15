// 7 TIPOS DE DADOS:
var nome = 'wilber' // String
var idade = 28 // Number
var possuiFaculdade = true // boolean
var time // undefined
var comida = null // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} //Object

var sobrenome = 'ribeiro'
// exibe o valor da variável:
console.log(nome)
// exibe o tipo da variável:
console.log(typeof nome)
var idade = null

console.log(typeof idade)

// concatenação:

var nomeCompleto = nome + sobrenome
console.log(nomeCompleto)

var nomeSobrenome = nome + ' ' + sobrenome
console.log(nomeSobrenome)

var nomeSobrenome2 = console.log(nome + ' ' + sobrenome)
var nomeSobrenome3 = console.log(nome + ' ' + sobrenome)
console.log(typeof nomeSobrenome)

var melhor = 'teste'
var frase = 'este é o "melhor" jogo'
console.log(frase)

// TEMPLATE STRING: acento ao contrário e variável dentro de ${}:

var gols = 1000
var frase1 = 'romário fez' + gols + 'gols'
var frase2 = `romario fez ${gols} gols`
console.log(frase2)
