// exercícios:

// Crie uma função que verifique corretamente o tipo de dado:
function verificarDado(dado) {
  return Object.prototype.toString.call(dado)
}

console.log(verificarDado([]))
// Crie um objeto quadrado com a propriedade lados e torne ele imutável:
const quadrado = {}
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    configurable: false,
    enumerable: true
  }
})

quadrado.lados = 5
console.log(quadrado)
// Previna qualquer mudança no objeto abaixo:

const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao)

console.log(Object.isExtensible(configuracao))

// Liste o nome de todas as propriedades do protótipo de Strign e Array:
console.log(Object.getOwnPropertyDescriptors(Array.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))

console.log(Object.getOwnPropertyDescriptors(String.prototype))
console.log(Object.getOwnPropertyNames(String.prototype))
