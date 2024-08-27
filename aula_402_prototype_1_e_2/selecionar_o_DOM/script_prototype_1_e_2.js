function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
}
console.log(Pessoa.prototype) // retorna o objeto
console.log('---')

const andre = new Pessoa('Andre', 28)
console.log('-- prototype é UNDEFINED, pois andré é um objeto e não uma função')
console.log(andre.prototype) // undefined

Pessoa.prototype.andar = function () {
  return this.nome + ' andou'
}

Pessoa.prototype.nadar = function () {
  return this.nome + ' nadou'
}
console.log('---')

console.log(Pessoa.prototype) // retorna o objeto

console.log('wilber')

// const andre2 = new Pessoa('André', 28)
// console.log(andre2.nome)
// console.log(andre2.idade)
// console.log(andre2.andar())
// console.log(andre2.nadar())

// const lista = document.querySelectorAll('li')

// // transforma em um array:
// const listaArray1 = Array.prototype.slice.call(lista)
// const listaArray2 = Array.from(lista)

// const Carro = {
//   marca: 'Ford',
//   preco: 2000,
//   acelerar() {
//     return true
//   }
// }

// Carro // Object
// Carro.marca //String
// Carro.preco //Number
// Carro.acelerar // Function
// Carro.acelerar() // Boolean
// Carro.marca.charAt() // Function
// Carro.marca.charAt(0) // String

// // Verifique o nome do construtor com .constructor.name

// function Pessoas(nome, sobrenome, idade) {
//   this.nome = nome
//   this.sobrenome = sobrenome
//   this.idade = idade
// }

// Pessoas.prototype.nomeCompleto = function () {
//   return `${this.nome} ${this.sobrenome}`
// }

// const wilber2 = new Pessoas('wilber', 'ribeiro', 51)
// wilber2.nomeCompleto()
// console.log(wilber2.nomeCompleto())
