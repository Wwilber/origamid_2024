// 1 - SELEÇÃO DO ELEMENTOS POR ID:

console.log('1. ---CONSULTA DE ELEMENTOS POR - ID:')
const animais = document.getElementById('animais')
console.log(animais)

console.log(
  '1.1. --- CONSULTA DO ELEMENTO POR ID e MOSTRAR O TEXTO DO ELEMENTO: animais.innerText'
)
console.log(animais)
console.log(animais.innerText)

// 2 - SELEÇÃO DE ELEMENTOS POR CLASSE OU TAG(ao vivo e ainda retorna um HTMLCollection):
console.log('2. ---CONSULTA DOS ELEMENTOS POR CLASSE:')
const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection)

const gridSection2 = document.getElementsByClassName('grid-section faq')
console.log(gridSection2)

console.log(gridSection.length)
console.log(gridSection[0])

console.log(
  '3. --- CONSULTA DOS ELEMENTOS PELO SELETOR: PARA CLASSE: .animais; PARA ID: #contato e etc...:'
)
const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

// const primeiraUl = document.querySelector('ul')
// console.log(primeiraUl)

// const linksInternos = document.querySelector('[href^="#"]')
// console.log(linksInternos)

// const linksInternos2 = document.querySelectorAll('[href^="#"]')
// console.log(linksInternos2)

// const animaisImg = document.querySelectorAll('.animais-lista img')
// console.log(animaisImg)
// console.log(animaisImg[1])

// const gridSectionHTML = document.getElementsByClassName('grid-section')
// const gridSectionNode = document.querySelectorAll('.grid-section')

// // primeiraUl.classList.add('grid-section')

// console.log(gridSectionHTML)
// console.log(gridSectionNode)

// gridSectionNode.forEach(function (item, index) {
//   console.log(item)
// })

// const arrayGrid = Array.from(gridSectionHTML)
// console.log(arrayGrid)

// arrayGrid.pop()
//console.log(arrayGrid)
