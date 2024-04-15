// OPERADORES ARITMÉTICOS:

var soma = 100 + 50
var subtracao = 100 - 50
var multiplicacao = 100 * 50
var divisao = 100 / 50
var expoente = 10 ** 2
var restoDivisao = 165315 % 4

console.log(soma)
console.log(subtracao)
console.log(divisao)
console.log(multiplicacao)
console.log(expoente)
console.log(restoDivisao)

// OPERADORES ARITMÉTICOS(STRING):

var soma1 = '100' + 10
var subtracao1 = '100' - 50
var divisao1 = 'comprei 100' / 2 // NaN Not a Number
var multiplicacao1 = '100' * '2'
console.log(soma1)
console.log(subtracao1)
console.log(divisao1)
console.log(multiplicacao1)

var teste = isNaN(divisao1)
console.log(teste)

// OPERADORES UNÁRIOS:

var frase = 'Isso é um teste'
;+frase //NaN
;-frase //NaN

var idade = '28'
;+idade // 28 (numero)
;-idade // -28 (numero)
console.log(+idade + 5) // 33

var possuiFaculdade = true
console.log(+possuiFaculdade) // 1

/* truthy e falsy:
falsy:
if(false)
if(0) ou -0
if(NaN)
if(null)
if(undefined)
if('') ou "" ou ``

truthy:
if(true)
if(1)
if(' ')
if('andré')
if(-5)
if({})
*/
