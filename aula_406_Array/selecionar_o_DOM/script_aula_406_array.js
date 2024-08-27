// ARRAYS: Armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

const instrumentos = ['Guitarra', 'Baixo', 'Violão']
const precos = [49, 99, 69, 89]
const dados = [
  new String('Tipo 1'),
  ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
  function andar(nome) {
    console.log(nome)
  }
]

console.log(instrumentos)
console.log(instrumentos[2])
console.log(dados[1][2])

// Construção de Arrays: Toda array herda os métodos e propriedades do protótipo do construtor array.

const instrumento = ['Guitarra', 'Baixo', 'Violão']
const carros = new Array('Corola', 'Mustang', 'Honda')

console.log(carros[1]) //Mustang
carros[2] = 'Ferrari'
console.log(carros) //Ferrari
console.log(carros[2]) //Ferrari
carros[10] = 'Parati'
console.log(carros)
console.log(carros.length)

// Array.from(): é um método utilizado para transformar objetcts em um array:

let li = document.querySelectorAll('li')
console.log(li)
li = Array.from(li)
console.log(li)

// Para construir um objeto que se parece com array em array, no final tem que possuir o length.
const carro = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 5
}
console.log(carro)

const carroArray = Array.from(carro)

//Array.isArray(): Verifica se o valor passado é uma array e retorna um valor booleano:

let li2 = document.querySelectorAll('li')
console.log(Array.isArray(li2))
liArray = Array.from(li2)
console.log(Array.isArray(liArray))

// Array,if(), Array() e new Array(): Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessário para utilizar o construtor Array:

console.log(Array.of(10)) // [10]
console.log(Array.of(1, 2, 3, 4)) // [1,2,3,4]
console.log(new Array(5)) // [....]
console.log(Array(5)) // [....]
console.log(Array(1, 2, 3, 4)) // [1,2,3,4]

// PROPRIEDADES E MÉTODOS DO PROTOTYPE:
// [].length retorna o tamanho da Array.

const frutas = ['Banana', 'Pera', ['Uva Roxa', 'Uva Verde']]
console.log(frutas.length) //3
console.log(frutas[0].length) // 6
console.log(frutas[1].length) //4
console.log(frutas[2].length) //2
console.log(frutas[2][0].length) //8
console.log(frutas[2][1].length) //9

// MÉTODOS MODIFICADORES:
// [].SORT(): Os próximos métodos que vamos falar sobre, são métodos modificadores(mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza pelo unicode.

const instrumento1 = ['Guitarra', 'Baixo', 'Violão']
instrumento1.sort()
console.log(instrumento1) // ['Baixo', 'Guitarra', 'Violão']

const idades = [32, 21, 33, 43, 1, 12, 8]
idades.sort()
console.log(idades) // [1, 12, 21, 32, 33, 8]

//.unshift() e [].push():
const carros1 = ['Ford', 'Fiat', 'VW']
// .unshift(): adiciona elementos ao início da array e retorna o length da mesma.
carros1.unshift('Honda', 'Kia') //5
console.log(carros1) // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];
console.log('quantidade do array com unshift:', carros1.unshift())
//[].push(): adiciona elementos ao final da array e retorna o length da mesma.
carros1.push('Ferrari') //6
console.log(carros1) // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari];
console.log('quantidade do array com push:', carros1.push())

// [].shift(): remove o primeiro elemento da array e retorna o mesmo.
const primeiroCarro = carros1.shift()
console.log(carros1)
console.log(carros1.shift())
// [].pop(): remove o último elemento da array e retorna o mesmo.
const ultimoCarro = carros1.pop()
console.log(carros1)
console.log(carros1.pop())

// [].reverse(): inverte os itens da array e retorna a nova array:
console.log(carros1.reverse())

// [].splice(idex, remover, item1, item2, ...): adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro(retorna esses itens).

const carros2 = ['Ford', 'Fiat', 'VW', 'Honda']
console.log(carros2)
carros2.splice(1, 0, 'kia', 'Mustang')
console.log('incluiu kia e mustang', carros2) // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

console.log(carros2.splice(3, 2, 'Ferrari'))
console.log(carros2) // ['Ford', 'Kia', 'Mustang','Ferrari','Honda']

//[].copyWithin(): [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como início o ) e final o valor total da array.
console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 2))
// ['Item1', 'Item2', 'Item1', 'Item2']

console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1)) // ['Item1', 'Item2', 'Item3', 'Item1']

console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-2)) // ['Item1', 'Item2', 'Item1', 'Item2']

// [].fill(): [].fill(valor, inicio, final) - preenche a array com o valor, do inicio até o fim:

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('banana')) // ['banana', 'banana', 'banana', 'banana']

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('banana', 2)) // ['Item1', 'item2', 'banana', 'banana']
console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('banana', 1, 3)) // ['Item1', 'banana', 'banana', 'Item4']

// METODOS DE ACESSO [].concat(): Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.

const transporte1 = ['Barco', 'Avião']
const transporte2 = ['Carro', 'Moto']
const transportes = transporte1.concat(transporte2) // ['Barco', 'Avião', 'Carro', 'Moto'];
const maisTransportes = [].concat(transporte1, transporte2, 'Van') // ['Barco', 'Avião', 'Carro', 'Moto', 'Van']
console.log(transportes)
console.log(maisTransportes)

// [].include(): [].includes(valor) verifica se a array possui o valor e retorna true ou false:
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js']
console.log(linguagens.includes('css'))
console.log(linguagens.includes('ruby'))

// [].indexOf(): [].indexOf(valor): verifica se a array possui o valor e retorna o index do primeiro valor na array:
console.log(linguagens.indexOf('js'))
console.log(linguagens.indexOf('jssss'))
console.log(linguagens.lastIndexOf('js'))

// [].join(): [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.
const linguagens2 = ['html', 'css', 'js', 'php', 'python']
console.log(linguagens2.join()) // 'html,css,js,php,python'
console.log(linguagens2.join(' ')) // 'html css js php python'
console.log(linguagens2.join('-_-')) // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2') // ['<', '>Título Principal</','>']

htmlString = htmlString.join('h1') // <h1>Título Principal</h1>

//[].slice(): [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

const linguagens3 = ['html', 'css', 'js', 'php', 'python']
console.log(linguagens3.slice(3)) // ['php', 'python'];
console.log(linguagens3.slice(1, 4)) // ['css', 'js', 'php']

const cloneLinguagens = linguagens3.slice()
console.log(cloneLinguagens)
