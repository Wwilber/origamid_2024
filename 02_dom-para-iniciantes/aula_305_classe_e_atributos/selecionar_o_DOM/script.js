// const menu = document.querySelector('.menu')
// console.log('mostra a classe selecionada', menu)

// // mostra uma lista de classes e elementos da classe menu:
// console.log(menu.classList)
// console.log(menu.classList[0])
// console.log(menu.classList[1])

// // mostra a string da classe menu:
// console.log(menu.className)

// // adicionar a classe ativo:
// menu.classList.add('ativo')
// // remover a classe azul:
// menu.classList.remove('azul')

// menu.classList.add('sempreAtivo', 'amarelo')

// menu.classList.toggle('azul')
// // menu.classList.toggle('azul')

// if (menu.classList.contains('azul')) {
//   menu.classList.add('possui-azul')
// }
// menu.classList.remove('azul')

// console.log(menu.classList[1])

// console.log(menu.classList[2])

// // console.log(menu.className)
// // menu.className = 22
// // menu.className = menu.className + ' este é um teste para concatenar string'

// // menu.className += ' este é um teste para concatenar string'
// // console.log(menu.className)

// // const animais = document.querySelector('.animais')
// // console.log(animais)
// // console.log(animais.attributes) // retorna todos os atributos.
// // console.log(animais.attributes[0]) // retorna o primeiro atribuito
// // console.log(animais.attributes['data-texto']) // retorna o primeiro atribuito

// // const img = document.querySelector('img')
// // console.log(img.getAttribute('src'))

// // const pesquisa = img.getAttribute('alt')
// // console.log(pesquisa) // muda o alt

// // const pesquisa2 = img.setAttribute('alt', 'só testando') // altera o atributo.
// // console.log(pesquisa2)

// // const possuiAtributo = img.hasAttribute('teste')
// // console.log(possuiAtributo)

// // // console.log(img.setAttribute('alt', 'Texto Alternativo')) // muda o alt
// // // img.hasAttribute('id') // true / false
// // // img.removeAttribute() //true / false

// // const menu = document.querySelectorAll('.menu a ')

// const adItem = document.querySelectorAll('.menu a')
// console.log(adItem)
// adItem.forEach(item => {
//   item.classList.add('ativo')
// })

// adItem.forEach(item => {
//   item.classList.remove('ativo')
// })

// adItem[0].classList.add('ativo')
// console.log(adItem)

// // verifique se as imagens possuem o atributo alt
// const img = document.querySelectorAll('img')
// console.log(img)
// img.forEach(item => {
//   console.log(item.classList.contains('alt'))
// })

// const img2 = document.querySelectorAll('img')
// console.log(img2)
// img.forEach(img => {
//   console.log(img, img.hasAttribute('alt'))
// })

// document.querySelector('a[href^="https"]').setAttribute('href', 'teste')
