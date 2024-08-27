// Number: É a construtora de números. Todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns números.

const ano = 2018
const preco = new Number(99)
console.log(preco)
console.log(ano)

// Number.isNaN() e Number.isInteger();
// isNan() é um método de Number, ou seja, não faz parte do protótipo. isInteger() verifica se é integral.

console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(4 + 5)) // false

console.log(Number.isInteger(20)) // true
console.log(Number.isInteger(23.6)) // false

// Number.parseFloat() e Number.parseInt(): parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parÂmetro que é o Radix, 10 é para decimal:

parseFloat('99,99') // mesma função sem o Number
Number.parseFloat('99.50') // 99.5
Number.parseFloat('100 Reais') // 100
Number.parseFloat('R$ 100') // NaN

parseInt('99.50', 10) // 99
parseInt(5.43434355555, 10) //5
Number.parseInt('100 Reais', 10) // 100

// Float possui decimal, Integer não.

// n.toFixed(decimais): Arredonda o número com base no total de casas decimais do argumento:

const preco2 = 2.99
console.log(parseFloat(preco2.toFixed())) // 3

const preco6 = 2.99
console.log(parseFloat(preco6.toFixed(2))) // 2.99

const carro = 1000.455
console.log(carro.toFixed(2)) // 100.46

const preco3 = 1499.99
console.log(parseFloat(preco3.toFixed(2))) //1499

const preco4 = 1499.99
console.log(+preco4.toFixed(2)) //1499

const preco5 = 1499.99
console.log(preco5.toFixed(2)) //1499

//n.toString(radix): Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

const preco7 = 2.99
preco7.toString(10) // '2.99'
console.log(preco7)

// n.toLocaleString(lang, options): Formata o número de acordo com a língua e opções passadas.

let preco8 = 59.79
preco8 = preco8.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}) //$59.79
console.log(preco8)
// console.log(
//   preco8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
// ) //R$59.79
// console.log(preco8)

// Math: É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns:

Math.PI // 3.14159
Math.E // 2.718
console.log(Math.LN10) // 2.303

Math.abs(-5.5) // 5.5 - retorna o valor absoluto, ou seja, transforma negativo em positivo
Math.ceil(4.8334) //5 - arredonda para cima;
Math.ceil(4.3) // 5
Math.floor(4.8334) // 4 - arredonda para baixo
Math.floor(4.3) // 4 - arredonda para baixo
Math.round(4.8334) // 5 - arredonda para o número integral mais próximo.
Math.round(4.3) // 4 - arredonda para o número integral mais próximo.

Math.max(5, 3, 10, 42, 2) // 42
Math.min(5, 3, 10, 42, 2) // 2

Math.random() // 0.xxx
Math.floor(Math.random() * 100) // entre 0 e 100
Math.floor(Math.random() * 500) // entre 0 e 500

// Numero random entre 72 e 32:
console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32)
// Math.floor(Math.random() * (max - min + 1)) + min;
