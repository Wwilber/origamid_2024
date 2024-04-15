// TRANSVERSING E MANIPULAÇÃO:
// const h1 = document.querySelector('h1')

// console.log(h1.innerText)
// console.log(h1.innerHTML)
// console.log(h1.outerHTML)

// const lista = document.querySelector('.animais-lista')
// console.log(lista)
// console.log(lista.parentElement)
// console.log(lista.parentElement.parentElement)
// console.log(lista.nextElementSibling)
// console.log(lista.previousElementSibling)
// console.log(lista.children)
// console.log(lista.children[2])

// const animais = document.querySelector('.animais')
// console.log(animais)

// const contato = document.querySelector('.contato')
// console.log(contato)
// const titulo = contato.querySelector('.titulo')
// console.log(titulo)

// animais.appendChild(titulo)

// const h1 = document.querySelector('h1')
// const faq = document.querySelector('.faq')

// const cloneh1 = h1.cloneNode(true)

// cloneh1.classList.add('azul')
// faq.appendChild(cloneh1)

// const menu2 = document.querySelector('.menu')
// console.log(menu2)
// const cloneMenu = menu2.cloneNode(true)
// const copy = document.querySelector('.copy')
// copy.appendChild(cloneMenu)

// const faq = document.querySelector('.faq')
// const dt1 = faq.querySelector('dt')
// const dd = dt1.nextElementSibling
// console.log(dt1)
// console.log(dd)

const faq43 = document.querySelector('.faq')
const animais = document.querySelector('.animais')
console.log(faq43)
console.log(animais)

faq43.innerHTML = animais.innerHTML
