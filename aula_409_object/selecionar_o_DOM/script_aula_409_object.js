// Object: Todo objeto é criado com o construtor Object e por isso herda as proprieddes e métodos do seu prototype:

const carro = {
  marca: 'Ford',
  ano: 2018
}

const pessoa = new Object({
  nome: 'Andre',
  idade: 28
})
console.log(carro)
console.log(pessoa)

// Object.create(obj, defineProperties): retorna um novo objeto que terá como protótipo o objeto do primeiro argumento:

const carro2 = {
  rodas: 4,
  init(marca) {
    this.marca = marca
    return this
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas}`
  },
  buzinar() {
    return this.marca + ' buzinou'
  }
}
const honda = Object.create(carro2)
console.log(honda.init('Honda').acelerar())

const ferrari = Object.create(carro2).init('Ferrari')
console.log(ferrari.acelerar())

// Object.assign(): Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O Assign irá modificar o objeto alvo.

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou'
  },
  buzinar() {
    return 'buzinou'
  }
}

const moto = {
  rodas: 2,
  capacete: true
}

console.log(Object.assign(moto, funcaoAutomovel))
console.log(moto.acelerar())

const carro3 = {
  rodas: 4,
  mala: true
}
const carro3Completo = Object.assign(carro3, funcaoAutomovel)
console.log(carro3Completo.buzinar())
console.log((carro3Completo.rodas = 3))
console.log(carro3Completo)
const carro4Completo = Object.assign(carro3, funcaoAutomovel, carro)
console.log(carro4Completo)

// Object.defineProperties(): Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

const motoX = {}
Object.defineProperties(motoX, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true // torna enumerável(não mudar o valor)
  },
  capacete: {
    value: true,
    configurable: true, // pode deletar
    writable: false
  } // impede mudança de valor.
})
console.log(motoX)
delete motoX.capacete.value
console.log(motoX)

// GET e SET: É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade. a função get é ativada e ao setarmos ob.propriedade = "valor" a função de set é ativada.

const motoY = {}
Object.defineProperties(motoY, {
  velocidade: {
    get() {
      return this._velocidade
    },
    set(valor) {
      this._velocidade = 'velocidade ' + valor
    }
  }
})

console.log((moto.velocidade = 200))

// Object.getOwnPropertyDescritors(obj): Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.

Object.getOwnPropertyDescriptors(Array) // Lista com métodos e propriedades e Array
Object.getOwnPropertyDescriptors(Array.prototype) //Lista com métodos e propriedades do protótipo de Array.
console.log(Object.getOwnPropertyDescriptor(window, 'innerHeight')) // Puxa de uma única propriedade.

console.log(Object.getOwnPropertyDescriptors(motoY))

// Object.keys(obj), Object.values(obj), Object.entries(obj):
// Object.keys(obj): retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto.
Object.keys(Array) // [] vazia, pois não possui propriedades enumeráveis

const carroP = {
  marca: 'Ford',
  ano: 2018
}
console.log(Object.keys(carroP)) // ['marca', 'ano']

// Object.values(obj): retorna uma array com os valores do objeto.
console.log(Object.values(carroP)) // ['Ford', 2018]

// Object.entries(obj): retorna uma array com array´s contendo a chave e o valor.
console.log(Object.entries(carroP)) // [Array(2), Array(2)]

// Object.getOwnPropertyNames(obj): retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

console.log(Object.getOwnPropertyNames(Array)) // ['lenght', 'name', 'prototype', 'isArray', 'from', 'of']

console.log(Object.getOwnPropertyNames(Array.prototype)) //[..., 'filter', 'map', 'every', 'some', 'reduce'', ...]

console.log(Object.getOwnPropertyNames(carroP))
console.log(Object.getOwnPropertyDescriptors(carroP))

console.log('--------------------------------')
//Object.getPrototypeOf() e Object.is():
// Object.getPrototypeOf(): retorna o protótipo do objeto.
// Object.is(obj1, obj2): verifica se os objetos são iguais e retorna true ou false.

const frutasS = ['Banana', 'Pêra']
console.log(Object.getPrototypeOf(frutasS))
console.log(Object.getPrototypeOf('')) // String

const frutas11 = ['Banana', 'Pêra']
const frutas12 = ['Banana', 'Pêra']
console.log(Object.is(frutas11, frutas12))

const novaFruta = frutas11
console.log(Object.is(frutas11, novaFruta))

// Object.freeze(), Object.seal(), Object.preventExtensions():
// Object.freeze(): impede qualquer mudança nas propriedades:
// Object.seal(): previne a adição de novas propriedades e impede que as atuais sejam deletadas;
// Object.preventExtensions(): previne a adição de novas propriedades.
// isFrozen(): consulta se o objeto está congelado.
// isExtensible(): consulta se o objeto pode ser extendido.
// isSealed():  verifica se pode prevenir a adição de novas propriedades.
Object.seal(carroP)
carroP.marca = 'xxx'
console.log(carroP)
console.log('----------')
