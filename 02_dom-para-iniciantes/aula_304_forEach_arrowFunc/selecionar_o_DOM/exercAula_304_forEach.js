// exercício:

// Mostre no console cada paragrafo do site
const paragrafo = document.querySelectorAll('p')
console.log(paragrafo)
paragrafo.forEach(item => {
  console.log(item)
})
// Mostre o texto dos parágrafos no console
paragrafo.forEach(item => {
  console.log(item.innerText)
})
// como corrigir os erros abaixo:

imgs.forEach((item, index) => {
  console.log(item, index)
})

const imgs = document.querySelectorAll('img')
imgs.forEach((item, index) => {
  console.log(item)
  console.log(index)
  console.log(item, index)
})

let i = 0
imgs.forEach(() => {
  console.log(i++)
})

imgs.forEach(() => i++)
