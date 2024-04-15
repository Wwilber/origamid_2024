// Crie um objeto com seus dados pessoais:

const pessoa = {
  nome: 'Wilber',
  sobrenome: 'Ribeiro',
  idade: 51,
  sexo: 'masculino'
}

// Crie um método no objeto anterior, que mostre o se nome completo:
pessoa.nomeCompleto = function () {
  console.log(this.nome + ' ' + this.sobrenome)
  console.log(`${this.nome} ${this.sobrenome}`)
}
pessoa.nomeCompleto()

// Modifique o valor da propriedade preco para 3000:

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi'
}
carro.preco = 3000
console.log(carro.preco)
console.log(carro)

var cachorro = {
  raca: 'labrador',
  cor: 'preta',
  idade: 10,
  latir(pessoa) {
    if (pessoa == 'homem') {
      return 'au au au'
    } else {
      console.log('não latir')
    }
  },
  rosnar: function () {
    console.log('aaaarrrgggg')
  }
}
console.log(cachorro.latir('mulher'))
cachorro.rosnar()

// NOMEIE 3 PROPRIEDADES OU MÉTODOS DE STRINGS:

var nome = 'Wilber'
// nome.replace
// nome.split
// nome.indexOf

// NOMEIE 5 PROPRIEDADES OU MÉTODOS DE ELEMENTOS DO DOM:

var btn = document.querySelector('.btn')
// btn.addEventListener
// btn.appendChild
// btn.dispatchEvent
// btn.scroll
// btn.id

// BUSQUE NA WEB UM OBJETO (MÉTODO) CAPAZ DE INTEGRAGIR COM O CLIPBOARD: PARTE DO SEU COMPUTADOR QUE LIDA COM O CTRL+C E CTRL+V:
