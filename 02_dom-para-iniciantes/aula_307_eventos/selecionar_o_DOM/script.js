// const img = document.querySelector('img')
// // console.log(img)
// // img.addEventListener('click', () => {
// //   console.log('clicou')
// // })

// function callback() {
//   console.log('cliquei')
// }

// img.addEventListener('click', callback)

// const img3 = document.querySelector('img')
// function callback(event) {
//   console.log(event)
// }

// img.addEventListener('click', callback)

// const animaisLista = document.querySelector('.animais-lista')

// function callbackLista(event) {
//   console.log(event.currentTarget)
//   console.log(event.target)
//   console.log(event.type)
//   console.log(event.path)
// }

// animaisLista.addEventListener('click', callbackLista)

// function executarCallback(event) {
//   const currentTarget = event.currentTarget // this
//   const target = event.target // onde o clique ocorreu
//   const type = event.type // tipo do evento
//   const path = event.path
//   console.log(currentTarget, target, type, path)
// }

// const linkExterno = document.querySelector('a[href^="http"]')

// function handlinkExterno(event) {
//   event.preventDefault()
//   // console.log(event)
//   console.log(this)
//   console.log(this.getAttribute('href'))
//   console.log(event.target)
//   console.log(event.currentTarget)
// }
// linkExterno.addEventListener('click', handlinkExterno)

// Diferentes Eventos: Existem diversos eventos como click, scroll, resize, keydow, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também:

// const h1 = document.querySelector('h1')

// function handleEvent(event) {
//   console.log(event.type, event)
// }

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)

// window.addEventListener('scroll', handleEvent)
// window.addEventListener('resize', handleEvent)
// window.addEventListener('keydown', handleEvent)

// function callback(event) {
//   console.log(event.type, event)
// }

// h1.addEventListener('click', calback)
// h1.addEventListener('mouseEnter', callback)
// window.addEventListener('scroll', callback)
// window.addEventListener('resize', callback)
// window.addEventListener('keydown', callback)

// KEYBOARD: Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do KEYBOARD.

// function handleKeyboard(event) {
//   if (event.key === 'a') {
//     document.body.classList.toggle('azul')
//   } else if (event.key === 'r') {
//     document.body.classList.toggle('red')
//   }
// }

// // function handleKeyboard(event) {
// //   console.log(event.key)
// // }

// window.addEventListener('keydown', handleKeyboard)

// const imgs = document.querySelectorAll('img')

// function imgSrc(event) {
//   const src = event.currentTarget.getAttribute('src')
//   console.log(src)
// }

// imgs.forEach(img => {
//   img.addEventListener('click', imgSrc)
// })

// const links = document.querySelectorAll('a')
// console.log(links)

// function imgSrc(event) {
//   const src = event.currentTarget.getAttribute('href')
//   console.log(src)
// }

// links.forEach(img => {
//   img.addEventListener('click', imgSrc)
// })

// FORMATO 01: MOSTRA A IMAGEM
// const img001 = document.querySelector('a[href^="#"]')

// function callback() {
//   console.log(img001)
// }
// img001.addEventListener('click', callback)

// // FORMAT0 02: COM PARÂMETRO:

// const img002 = document.querySelector('a[href^="#"]')

// function callback2(maria) {
//   console.log(maria)
// }
// img002.addEventListener('click', callback2)

// const links99 = document.querySelectorAll('a[href^="#"]')

// function add(event) {
//   console.log(event)
// }

// links99.forEach(add => {
//   links99.addEventListener('click', add)
// })

// const body = document.querySelector('body')

// function callbackTipo(event) {
//   console.log(event.target)
// }

// body.addEventListener('click', callbackTipo)

// 'a[href^="#"]

// const links99 = document.querySelector('li')

// function clickNoLink(event) {
//   links99.classList.toggle('ativo')
//   event.preventDefault()
// }

// links99.forEach((){
// addEventListener('click', clickNoLink)
// })

// function aumentarLetra(event) {
//   if (event.key === 't') {
//     document.body.classList.toggle('aumentoTamanho')
//   }
// }

// window.addEventListener('keydown', aumentarLetra)

// const links99 = document.querySelectorAll('a[href^="#"]')

// function add2(event) {
//   event.preventDefault()

//   links99.forEach(link => {
//     link.classList.remove('ativo')
//   })
//   event.currentTarget.classList.add('ativo')
// }

// links99.forEach(add => {
//   add.addEventListener('click', add2)
// })

// const todosElementos = document.querySelectorAll('body *')

// function callbackTipo(event) {
//   console.log(event.currentTarget)
// }

// todosElementos.forEach(item => {
//   item.addEventListener('click', callbackTipo)
// })

function aumentarLetra(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('aumentaLetra')
  }
}

window.addEventListener('keydown', aumentarLetra)
