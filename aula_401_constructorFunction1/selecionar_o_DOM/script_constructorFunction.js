// const carro = {
//   marca: 'Marca',
//   preco: 0
// }
// console.log(carro)

// const honda = carro
// honda.marca = 'Honda'
// honda.preco = 4000

// const fiat = carro
// fiat.marca = 'Fiat'
// fiat.preco = 3000

// function Carro() {
//   this.marca = 'Marca'
//   this.preco = 0
// }

// const honda = new Carro()
// honda.marca = 'Honda'
// honda.preco = 4000

// const fiat = new Carro()
// fiat.marca = 'Fiat'
// fiat.preco = 3000

//

// function Carro(marca, precoInicial) {
//   const taxa = 1.2
//   const precoFinal = precoInicial * taxa
//   this.marca = marca
//   this.preco = precoFinal
//   console.log(this)
// }

// const honda = new Carro('Honda', 2000)
// console.log(Carro)

// Exemplo Real:
// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor)
//   },
//   ativo() {
//     this.element().classList.add('ativo')
//   }
// }

// Dom.ativo() // adiciona ativo ao li
// Dom.seletor = 'ul'
// Dom.ativo() // adiciona ativo ao ul

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor)
//   }
//   this.ativar = function () {
//     this.element().classList.add('ativar')
//   }
// }

// const li = new Dom('li')
// li.ativar()

// function Dom2(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor)
//   }
//   this.ativar = function (classe, class2) {
//     this.element().classList.add(classe, class2)
//   }
// }

// const li2 = new Dom2('li:last-child')
// li2.ativar('ativando', 'sem_ativar')

// Oiii, bom dia!
// Quero agradecer a todos que participaram da rifinha da Arielly que foi encerrada na sexta-feira.
// O sorteio vai ficar para quarta-Feira.
// Boa Sorte e Obrigada a todos os participantes.
