//FUNCTION: Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.

function areaQuadradro(lado) {
  return lado * lado
}

console.log(areaQuadradro(2))

const perimetroQuadrado = new Function('lado', 'return lado * 4')
console.log(perimetroQuadrado(1))

// PROPRIEDADES:
// function.length: retorna o total de argumentos da função:

function somar(n1, n2) {
  return n1 + n2
}

console.log(somar.length) // retorna a quantidade de argumentos: "2"

// function.name: retorna o nome da função.
console.log(somar.name)
console.log(somar.name.toUpperCase())

// MÉTODOS:
// function.call(): function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

const carro = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano)
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined unefined
descricaoCarro.call(carro) // Ford 2018

// this: O valor de this faz referência ao objeto criado durante a construção do objeto(Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().

const carros = ['Ford', 'Fiat', 'VW']
carros.forEach(item => {
  console.log(item.toUpperCase())
}) // Log de cada carro

console.log('-------------')
carros.forEach.call(carros, item => {
  console.log(item)
}) // log de cada carro

const frutas = ['Banana', 'Pêra', 'Uva']
carros.forEach.call(frutas, item => {
  console.log(item)
}) // log de cada fruta

// EXEMPLO REAL: O objeto atribuído a lista será o substituído pelo primeiro argumento de call():

function Dom(seletor) {
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe)
}

const lista = new Dom('ul')
lista.ativo('ativar')
console.log(lista)

// O Objeto deve ser parecido: O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso Contrári o método não conseguirá interagir de forma correta com o novo this.

const novoSeletor = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(novoSeletor, 'ativar')

// Array´s e Call: É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array(array-like):

Array.prototype.mostrarThis = function () {
  console.log(this)
}

const frutas2 = ['Mamão', 'Laranja', 'Abacate']
frutas2.mostrarThis() // ['Mamão', 'Laranja', 'Abacate']

Array.prototype.pop.call(frutas) // remove banana
frutas.pop() // Mesma coisa que a função acima.

// ARRAY-LIKE: HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call:

const li = document.querySelectorAll('li')
const filtro = Array.prototype.filter.call(li, function (item) {
  return item.classList.contains('ativar')
})

console.log(filtro)
