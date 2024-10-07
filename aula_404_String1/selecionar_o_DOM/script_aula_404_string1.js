// // String:
// const comida = 'Pizza'
// const frasef = 'A melhor comida'

// // str.length:

// console.log(comida.length) // 5
// console.log(frasef.length) // 15

// // consulta como array:
// console.log(comida[3]) // P
// console.log(frasef[0]) // A
// console.log(frasef[frasef.length - 1]) // a

// // str.charArt(n):

// const linguagemL = 'JavaScript'
// console.log(linguagemL.charAt(0)) // J
// console.log(linguagemL.charAt(2)) // v
// console.log(linguagemL.charAt(linguagemL.length - 1)) // t

// // str.concat(str2, str3, ...): Concatena as strings e retorna o resultado

// const frase2 = 'A melhor linguagem é: '
// const linguagem2 = 'JavaScript, '

// const fraseCompleta = frase2.concat(linguagem2, '!!!!')
// console.log(fraseCompleta)

// const fraseCompleta2 = linguagem2.concat(frase2, ' a melhor')
// console.log(fraseCompleta2)

// // str.includes(search, position): Procura pela string exata dentro de outra string. /A procura é case sensitive.

// const fruta = 'Banana'
// const listaFrutas = 'Melancia, Banana, Laranja'

// console.log(listaFrutas.includes(fruta)) // true
// console.log(listaFrutas.includes(fruta, 17)) // false - conta o caractere

// fruta.includes(listaFrutas) // false

// // str.endsWith(search) e str.startsWith(search): Procura pela String exata dentro de outra string. A procura é case sensitive.

// const fruta3 = 'Banana'
// fruta.endsWith('nana') // true
// fruta.startsWith('Ba') // true
// fruta.startsWith('na') // false

// // str.slice(start, end): Corta a string de acordo com os valores de start e end:
// const transacao1 = 'Depósito de cliente'
// const transacao2 = 'Depósito de fornecedor'
// const transacao3 = 'Taxade camisas'

// console.log(transacao1.slice(0, -2)) // Depósito de clien
// console.log(transacao1.slice(0, 3)) // Dep
// console.log(transacao1.slice(1, 3)) // ep
// console.log(transacao1.slice(2, 3)) // p
// console.log(transacao1.slice(12)) // cliente
// console.log(transacao1.slice(-4)) // ente
// console.log(transacao1.slice(3, 6)) // ósi
// console.log(transacao2.slice(0, 3)) // Dep
// console.log(transacao3.slice(0, 3)) // Tax
// console.log(transacao3.slice(0, 5)) // Taxa
// console.log(transacao3.slice(1, 5)) // axad

// // str.substring(atart,end): Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice:

// const linguagem = 'JavaScript'
// linguagem.substring(3, 5) //aS
// linguagem.substring(0, 4) //Java
// linguagem.substring(4) //Script
// linguagem.substring(-3) //JavaScript **** NÃO FUNCIONA O COMANDO COM " - "

// // str.indexOf(serach) e str.lastIndexOf(search): Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado:
// const instrumento = 'Guitarra'
// console.log(instrumento.indexOf('r')) // 5
// console.log(instrumento.lastIndexOf('r')) //6
// console.log(instrumento.indexOf('ta')) //3

// // str.padStart(n,str) e str.padEnd(n, str): Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

// const listaprecos = ['R$ 99', 'R$ 199', 'R$ 12000']

// listaprecos.forEach(preco => {
//   console.log(preco.padStart(10, '.'))
// })

// console.log(listaprecos[0].padStart(10, '.')) // .....R$ 99
// console.log(listaprecos[0].padEnd(10, '.')) // R$ 99.....

// // str.repeat(n): Repete a string (n) vezes.
// const frase = 'Ta'
// console.log(frase.repeat(5)) //TaTaTaTaTa

// // str.replace(regexp|substr, newstr|function): Troca parte da strung por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primento valor que encontrar:

// let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'
// listaItens = listaItens.replace(/[ ]+/g, ', ')
// console.log(listaItens)

// let preco = 'R$ 1200,43'
// console.log((preco = preco.replace(',', '.'))) // 'R$ 1200.43

// // str.split(padrao): Divide a string de acordo com o padrão passado e retorna uma array.

// const listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias'
// const arrayItens = listaItens2.split(' ')
// console.log(arrayItens)

// const htmlText = '<div> O melhor item</div><div>A melhor lista</div>'
// const htmlArray = htmlText.split('div')
// console.log(htmlArray)
// const htmlNovo = htmlArray.join('section')
// console.log(htmlNovo)

// // jin é um método de Array.

// // str.toLowerCase() e str.toUpperCase(): Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

// const sexo1 = 'Feminino'
// const sexo2 = 'feminino'
// const sexo3 = 'FEMININO'
// sexo1.toLowerCase() === 'feminino' // true
// sexo2.toLowerCase() === 'feminino' // true
// sexo1.toLowerCase() === 'feminino' // true

// // str.trim(), str.trimStart(), str.trimEnd(): Remove os espaços em branco do início ao fim de uma string.
// const valor = '  R$ 23.00   '
// valor.trim() // 'R$ 23.00'
// valor.trimStart() // 'R$ 23.00   '
// valor.trimEnd() // '   R$ 23.00'

// let listaItens5 = 'Camisas Bonés Calças Bermudas Vestidos Saias'
// console.log(listaItens5)
// listaItens = listaItens5.replace(/[ ]+/g, ', ')
// console.log(listaItens5)
// // cria um array removendo a "," e colocando o " " no lugar da virguma:
// const arrayLista = listaItens5.split(', ')
// console.log(arrayLista)

// const arrayLista2 = listaItens5.split(' ')
// console.log(arrayLista2)

// const arrayLista3 = listaItens5.split('')
// console.log(arrayLista3)
