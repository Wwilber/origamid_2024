// Escopo de função: Variáveis declaradas dentro de funções não são acessdas fora das mesmas:

// 'use strict'

function mostrarCarro() {
  var carro = 'corolla'
  console.log(carro)
}
mostrarCarro()
// console.log(carro)

// variável global(Erro): Declarar variáveis sem a palavra chave var, let ou consst. Cria uma variável que pode ser acessada em qualquer escopo(global). ISSO É UM ERRO.

function mostrarCarro2() {
  carro2 = 'opala'
  console.log(carro2)
}
mostrarCarro2()
console.log(carro2)

// Escopo de bloco: variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco:

if (true) {
  var carro3 = 'Fusca'
  console.log(carro3)
}
console.log(carro3)
