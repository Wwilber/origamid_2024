// TRANSVERSING E MANIPULAÇÃO:
// const h1 = document.querySelector('h1')

// mostra o texto da tag; somente o texto:
// console.log('*** utilizando o innerText:')
// console.log(h1.innerText)

// console.log('----------')
// console.log('*** utilizando o outerHTML:')
// console.log(h1.outerHTML)
// console.log('----------')

// console.log('*** alterando o texto com innerHTML:')
// h1.innerHTML = '<p> ALTERANDO O TÍTULO COM O innerHTML</P>'
// h1.outerHTML = '<h2> substitui </h2>'
// console.log('----------')
// console.log(h1.outerHTML)

// TRANSVERSING:
// const lista = document.querySelector('.animais-lista')
// console.log(lista)
// // pai
// console.log(lista.parentElement)
// // pai do pai:
// console.log(lista.parentElement.parentElement)
// // elemento abaixo:
// console.log(lista.nextElementSibling)
// // elemento acima:
// console.log(lista.previousElementSibling)
// // html collection com os filhos:
// console.log('lista uma coleção com todos os filhos: ')
// console.log(lista.children)

// // segundo filho:
// console.log('lista o segundo filho: ')
// console.log(lista.children[1])
// // ultimo filho:
// console.log('lista o último filho: ')
// console.log(lista.children[--lista.children.length])

// console.log('lista o último filho: ')
// console.log(lista.querySelector('li:last-child'))

// MANIPULANDO ELEMENTOS:

// const animais = document.querySelector('.animais')
// console.log('classe animais:')
// console.log(animais)
// console.log('-----------------:')

// const contato = document.querySelector('.contato')
// console.log('classe contato:')
// console.log(contato)
// console.log('-----------------:')

// console.log('classe título:')
// const titulo = contato.querySelector('.titulo')
// console.log(titulo)
// console.log('-----------------:')

// console.log(
//   'movido o título para o final da classe animais - usando o appendChild: '
// )
// move lista para o final de animais:
// animais.appendChild(titulo)

// insere a lista antes de titulo:
// contato.insertBefore(lista, titulo)

// substitui o título pelo mapa:
// contato.replaceChild(mapa, titulo)

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

// const faq2 = document.querySelector('.faq')
// const dt1 = faq.querySelector('dt')
// const dd = dt1.nextElementSibling
// console.log(dt1)
// console.log(dd)

// const faq43 = document.querySelector('.faq')
// const animais2 = document.querySelector('.animais')
// console.log(faq43)
// console.log(animais)

// faq43.innerHTML = animais.innerHTML

const faqteste = document.querySelector('.faq dt')
console.log(faqteste)
const proximoDD = faqteste.nextElementSibling
console.log(proximoDD)
