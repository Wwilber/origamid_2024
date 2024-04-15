// Array:  É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável:
var videoGames = ['Switch', 'PS4', 'XBox']
videoGames[0]
videoGames[1]

// FOR LOOP: Fazem algo repetidamente até que uma condição seja atingida:

for (let i = 0; i < videoGames.length; i++) {
  console.log('usando o FOR: o video game é:', videoGames[i])
}

console.log('-------------------------------------------------')

let contagem = 0
while (contagem < videoGames.length) {
  console.log('USANDO O WHILE: o video game é:', videoGames[contagem])
  if (videoGames[contagem] == 'PS4') {
    break
  }
  contagem++
}

console.log(videoGames.pop()) // remove o último item e retorna ele.
console.log(videoGames)
// console.log(videoGames.push('atari')) // adiciona como último item e retorna ele.

console.log('-------------------------------------------------')

// forEach: é um método que executa uma função para cada item do array. É uma forma mais simples de utilizarmos um loop com arrays(ou array-like)
const numeros = [0, 1, 2, 3, 4, 5, 6]
numeros.forEach(function (num) {
  console.log(num)
})

const numeros2 = [0, 1, 2, 3, 4, 5, 6]
numeros2.forEach(function () {
  console.log('oi')
})

const numeros3 = [0, 1, 2, 3, 4, 5, 6]
numeros3.forEach(function (numero, index, array) {
  numeros3.pop()
  console.log(numero, index, array)
})
