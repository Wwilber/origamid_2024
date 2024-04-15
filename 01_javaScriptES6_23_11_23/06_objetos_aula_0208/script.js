// Objetos: Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: 'Wilber',
  idade: 51,
  profissao: 'Desenvolvedor',
  possuiFacudade: true
}

console.log(pessoa.nome)
console.log(pessoa.possuiFacudade)

// Métodos: É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado
  },
  perimetro: function (lado) {
    return this.lados * lado
  }
}

quadrado.lados
quadrado.area(5)
quadrado.perimetro(5)

console.table(quadrado)

// Dot Notation Get: Acesse propriedades de um objeto utilizando o .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2
  }
}

var br = menu.backgroundColor
console.log(br)

menu.backgroundColor = '#000'
console.log(menu.metadeHeight)
console.log(menu.metadeHeight())

// AULA: 0207 - Tudo é objeto: Strings, números, boolean, objetose mais, possuem propriedades e métodos. Por isso são objetos:
var nome = 'Wilber'

console.log(nome.length)
console.log(nome.charAt(2))
var nome2 = nome.replace('er', 'err')
console.log(nome.replace('er', 'err'))
console.log(nome)
console.log(nome2)

var altura = 1.8
console.log(altura.toString()) // transforma em string
console.log(altura.toFixed()) // arrendonda pra maior ou pra menor
console.log(altura)

function areaQuadrado(lado) {
  return lado * lado
}

console.log(areaQuadrado.toString())
console.log(areaQuadrado.length) // total de argumento que a função pode receber
console.log(nome.toLocaleUpperCase()) // transforma a variável nome em maiúscula

console.log('----------------------------------------')
