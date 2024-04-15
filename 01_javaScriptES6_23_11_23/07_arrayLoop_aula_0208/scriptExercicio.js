// Crie um array como os anos que o Brasil ganhou a copa do mundo: 1959, 1962, 1970, 1994, 2002:
const copaBrasil = ['1959', '1962', '1970', '1994', '2002']

// Interaja com o array utilizando um loop para mostrar no console a seguinte mensagem: 'O Brasil ganhou a copa de ${array}:
for (let i = 0; i < copaBrasil.length; i++) {
  console.log(`O Brasil ganhou a Copa do Mundo em: ${copaBrasil[i]}`)
}

//Interaja com um loop nas frutas abaixo e pare ao chegar em Pera:

const frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let i = 0; i < frutas.length; i++) {
  console.log('As frutas são:', frutas[i])
  if (frutas[i] === 'Pera') {
    break
  }
}

const ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)

frutas.forEach(function (num) {
  console.log(num)
})
