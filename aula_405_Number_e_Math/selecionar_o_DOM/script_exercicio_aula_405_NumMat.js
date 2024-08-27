// Exercícios:

// 1) Retorne um número aleatório entre 1050 e 2000:
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050)

// 2) Retorne o maior número da lista abaixo:
console.log('exercicio')

let numeros = '4,5,20,8,9'
const arrayNumeros = numeros.split(',')
console.log(arrayNumeros)
const numeroMaximo = Math.max(...arrayNumeros)
console.log(numeroMaximo)

// console.log(Math.max(+numero))

// 3) Crie uma funcção para limpar os poreços e retornar os números com centavos arredodados e depois retorne a soma total:

const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230   ', 'r$ 200']

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
  preco = +preco.toFixed(2)
  return preco
}

let soma = 0
listaPrecos.forEach(preco => {
  soma += limparPreco(preco)
})
console.log(
  soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
)
