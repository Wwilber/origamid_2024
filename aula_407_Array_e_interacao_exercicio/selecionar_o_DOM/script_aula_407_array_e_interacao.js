// // ARRAY - ITERAÇÃO:
// // [].forEach(): []forEach(callback(itemAtual, index, array)) - a função de callback é executada para cada item do array. Ela possui três argumentos, itemAtual(valor do item da array), index(index do valor do array) e array(array original):

// const carros = ['Ford', 'Fiat', 'Honda']
// // COM FUNÇÃO NORMAL:
// // carros.forEach(function (item, index, array) {
// //   console.log(item.toUpperCase())
// //   console.log(index + ' - index')
// // })

// // carros.forEach((item, index, array) => {
// //   console.log(item.toLowerCase())
// // })

// carros.forEach((item, index, array) => {
//   console.log(item)
//   console.log(index)
//   console.log(array)
//   console.log(item, index, array)
// })
// // o método sempre retorna undefined.

// // ARROW FUNCTION:
// const li = document.querySelectorAll('li')
// li.forEach(i => i.classList.add('ativa'))

// li.forEach(function (item, index) {
//   item.classList.add('ativa' + index)
// })

// // Modificar a Array Original: O terceiro argumento do callback é uma referência direta e se modificado irá também modifivar a array original.

// const carros2 = ['Ford', 'Fiat', 'Honda']
// const retornoCarros2 = carros2.forEach((item, index, array) => {
//   array[index] = 'Carro ' + item
// })
// console.log('O retorno é', retornoCarros2)
// console.log('O array ficou: ', carros2)
// // carros2 = // ['Carro Ford', 'Carro Fiat', 'Carro Honda']
// // *** É melhor utilizarmos o MAP para isso.

// // [].MAP(): [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array comn valores atualizados de acordo com o return de cada interação.

// const carros3 = ['Fordx', 'Fiatx', 'Hondax']
// const newCarros = carros3.map(item => {
//   return 'Carro ' + item
// })
// console.log(carros3)
// console.log(newCarros)

// const carros4 = ['Fordy', 'Fiaty', 'Honday']
// const testeMap = carros4.map((item, index, array) => {
//   // console.log('verificando: ', index, item.toUpperCase())
//   return item.toLowerCase(), index, array
// })
// console.log(carros4)
// console.log(testeMap)

// // VALOR RETORNADO: Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que nãop possui o return, será undefined:

// const carrosX = ['Fordxxx', 'Fiatxxx', 'Hondaxxx']
// const newCarrosX = carrosX.map(item => {
//   const novoValor = 'Carro ' + item
// })
// // Arrow Function e [].map(): Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arraw =>

// const numeros = [2, 4, 6, 8, 10, 12, 14]
// const numerosX3 = numeros.map(n => n * 3) //
// console.log(numerosX3) // [6, 12, 18, 24, 30, 36, 42]

// // [].map() vs [].forEach(): Se o objetivo for modificar os valores do array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.

// // [].map com Objetos: Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 10
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   }
// ]
// const tempoAulas = aulas.map(aula => aula.min)

// function nomeAula(aula) {
//   return aula.nome
// }
// const discAulas = aulas.map(nomeAula)
// console.log(tempoAulas)
// console.log(discAulas)

// // [].reduce(): [].reduce(callback(acumulador, valorAtual, index, array), valorInicial): Executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de ACUMULADOR, mas é na verdade apenas o retorno da iteração anterior.

// const aulasA = [10, 25, 30]
// const total = aulasA.reduce((acumulador, atual) => {
//   return acumulador + atual
// })
// console.log(total) //65
// const total1 = aulasA.reduce((acc, cur) => acc + cur, 100)
// console.log(total1) // 165

// console.log('----------------REDUCE--------------')

// const aulasB = [10, 25, 30]

// const reduceAulasB = aulasB.reduce((acumulador, item, index, array) => {
//   console.log(acumulador, item, index)
//   return acumulador + item
// }, 0)
// console.log(reduceAulasB)

// // Maior Valor com [].reduce():

// const numerosM = [10, 25, 60, 5, 35, 10]

// const maiorValor = numerosM.reduce((anterior, atual) => {
//   return anterior < atual ? atual : anterior
// })
// console.log(maiorValor) // 60

// // REDUCE COM OBJETOS:

// const aulasObj = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 10
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   }
// ]
// const listaAulas = aulasObj.reduce((acumulador, atual, index) => {
//   acumulador[index] = atual.nome
//   return acumulador
// }, {})
// console.log(listaAulas)

// // [].reduceRight(): Existe também o método [ ].reduceRight(). a diferença é que estre começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

// const frutas = ['Banana', 'Pêra', 'Uva']

// const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta)
// const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta)
// console.log(frutasRight) // Uva Pêra Banana
// console.log(frutasLeft) // Banana Pêra Uva

// // [].some(): [].some(), se pelo menos um return de iteração for truthy, ele retorna true:

// const frutas1 = ['Banana', 'Pêra', 'Uva']
// const temUva = frutas1.some(fruta => {
//   return fruta === 'Uva'
// }) // true.

// console.log(temUva)

// function maiorQue100(numero) {
//   return numero > 100
// }
// const numero = [0, 43, 22, 88, 101, 2]
// const temMaior = numeros.some(maiorQue100) // true.

// // [].every(): [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false:

// const fruit = ['Banana', 'Pêra', 'Uva', ''] // false pois pelo menos uma fruta está vazia '', o que é um valor falsy.

// const arraysCheias = fruit.every(fruta => {
//   return fruta
// }) // falsy

// console.log(arraysCheias)

// const numerosg = [6, 43, 22, 88, 101, 29]
// const maiorQue3 = numerosg.every(x => x > 3)
// console.log(maiorQue3)

// const numerosh = [6, 43, 22, 88, 101, 29]

// function maiorque(x) {
//   return x > 8
// }
// const maiorQue5 = numerosh.every(maiorque)
// console.log(maiorQue5)

// // [].find() e [].findIndex():
// // [].find(): retorna o valor atual da primeira iterção que retornar um valor truthy.

// const frutasI = ['Banana', 'Pêra', 'Uva', 'Maçã']
// const buscaUva = frutasI.findIndex(frutas => {
//   return frutas === 'Uva'
// })
// console.log(buscaUva)

// // [].findIndex(): ao invés de retornar o valor, retorna o index deste valor na array.
// const frutasj = ['Banana', 'Pêra', 'Uva', 'Maçã']
// const buscaFruta = frutasj.find(frutas => {
//   return frutasj
// })
// console.log(buscaFruta)

// // [].filter(): retorna uma array com a lista dos valores que durante a sua iteração retornaram um valor truthy:

// const frutasf = ['banana', undefined, null, '', 'Uva', 0, 'Maça']
// const arrayLimpa = frutasf.filter(frutasf => {
//   return frutasf
// }) //
// console.log(arrayLimpa)
