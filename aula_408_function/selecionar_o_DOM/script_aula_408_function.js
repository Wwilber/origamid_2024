// // //FUNCTION: Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.

// // function areaQuadradro(lado) {
// //   return lado * lado
// // }

// // console.log(areaQuadradro(2))

// // const perimetroQuadrado = new Function('lado', 'return lado * 4')
// // console.log(perimetroQuadrado(1))

// // // PROPRIEDADES:
// // // function.length: retorna o total de argumentos da função:

// // function somar(n1, n2) {
// //   return n1 + n2
// // }

// // console.log(somar.length) // retorna a quantidade de argumentos: "2"

// // // function.name: retorna o nome da função.
// // console.log(somar.name)
// // console.log(somar.name.toUpperCase())

// // // MÉTODOS:
// // // function.call(): function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

// // const carro = {
// //   marca: 'Ford',
// //   ano: 2018
// // }

// // function descricaoCarro() {
// //   console.log(this.marca + ' ' + this.ano)
// // }

// // descricaoCarro() // undefined undefined
// // descricaoCarro.call() // undefined unefined
// // descricaoCarro.call(carro) // Ford 2018

// // // this: O valor de this faz referência ao objeto criado durante a construção do objeto(Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().

// // const carros = ['Ford', 'Fiat', 'VW']
// // carros.forEach(item => {
// //   console.log(item.toUpperCase())
// // }) // Log de cada carro

// // console.log('-------------')
// // carros.forEach.call(carros, item => {
// //   console.log(item)
// // }) // log de cada carro

// // const frutas = ['Banana', 'Pêra', 'Uva']
// // carros.forEach.call(frutas, item => {
// //   console.log(item)
// // }) // log de cada fruta

// // // EXEMPLO REAL: O objeto atribuído a lista será o substituído pelo primeiro argumento de call():

// // function Dom(seletor) {
// //   this.element = document.querySelector(seletor)
// // }

// // Dom.prototype.ativo = function (classe) {
// //   this.element.classList.add(classe)
// // }

// // const lista = new Dom('ul')
// // lista.ativo('ativar')
// // console.log(lista)

// // // O Objeto deve ser parecido: O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso Contrári o método não conseguirá interagir de forma correta com o novo this.

// // const novoSeletor = {
// //   element: document.querySelector('li')
// // }

// // Dom.prototype.ativo.call(novoSeletor, 'ativar')

// // // Array´s e Call: É comum utilizarmos o call() nas funções do protótipo do construtor Array. Assim podemos estender todos os métodos de Array à objetos que se parecem com uma Array(array-like):

// // Array.prototype.mostrarThis = function () {
// //   console.log(this)
// // }

// // const frutas2 = ['Mamão', 'Laranja', 'Abacate']
// // frutas2.mostrarThis() // ['Mamão', 'Laranja', 'Abacate']

// // Array.prototype.pop.call(frutas) // remove banana
// // frutas.pop() // Mesma coisa que a função acima.

// // // ARRAY-LIKE: HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call:

// // const li = document.querySelectorAll('li')
// // const filtro = Array.prototype.filter.call(li, function (item) {
// //   return item.classList.contains('ativar')
// // })

// // console.log(filtro)

// // // function.apply(): O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.

// // const numeros = [3, 4, 6, 1, 34, 44, 32]
// // Math.max.apply(null, numeros)
// // Math.max.call(null, 3, 4, 5, 6, 7, 20)

// // Podemos passar null para o valor
// // de this, caso a função não utilize
// // o objeto principal para funcionar

// // Apply vs Call: A única diferença é a array como segundo argumento:

// const liX = document.querySelectorAll('li')

// function itemPossuiAtivo(item) {
//   return item.classList.contains('ativo')
// }

// const filtro1 = Array.prototype.filter.call(liX, itemPossuiAtivo)
// const filtro2 = Array.prototype.filter.apply(liX, [itemPossuiAtivo])
// console.log(filtro1)
// console.log(filtro2)

// // function.bind(): diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this:

// const li = document.querySelectorAll('li')
// const arrayLi = Array.from(li)

// const filtro = Array.prototype.filter.bind(li, item => {
//   return item.classList.contains('ativo')
// })
// console.log(filtro())
// // console.log(li)

// // Argumentos e Bind: Não precisamos passar todos os argumentos no momento do bind. Podemos passar os mesmos na nova função no momento da execução da mesma.

// const carrosX = {
//   marca: 'Ford',
//   ano: 2018,
//   acelerar: function (aceleracao, tempo) {
//     return `${this.marca} acelerou ${aceleracao} em ${tempo}`
//   }
// }
// console.log(carrosX.acelerar(100, 20))
// // Ford acelereu 100 em 20

// const honda = {
//   marca: 'Honda'
// }
// const acelerarHonda = carrosX.acelerar.bind(honda)
// console.log(acelerarHonda(200, 10))
// // Honda acelerou 200 em 10

// // Argumentos Comuns: Podemos passar argumentos padrões para uma função e retornar uma nova função:

// function imc(altura, peso) {
//   return peso / (altura * altura)
// }

// const imc180 = imc.bind(null, 1.8)

// console.log(imc(1.8, 70)) // 21.6
// console.log(imc180(70)) // 21.6
