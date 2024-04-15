// Retorne no console todas as imagens do site:
const img0 = document.querySelectorAll('img')
const img1 = document.getElementsByTagName('img')
console.log(img0)
console.log(img1)
// retorne no console apenas as imagens que começaram com a palavra imagem:
const img2 = document.querySelectorAll('img[src^="img/imagem"]')
console.log(img2)

// Selecione todos os links internos(onde o href começa com #):
const linkInterno = document.querySelectorAll('[href^="#"]')
console.log(linkInterno)
// selecione o primeiro h2 dentro de .animais-descricao:
const primeiro = document
  .querySelector('.animais-descricao')
  .querySelector('h2')

console.log(primeiro)

const primeiro2 = document.querySelector('.animais-descricao h2')

console.log(primeiro2)

// selecione o ultimo p do site
const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[ultimoP.length - 1])
console.log(ultimoP.length - 1)
