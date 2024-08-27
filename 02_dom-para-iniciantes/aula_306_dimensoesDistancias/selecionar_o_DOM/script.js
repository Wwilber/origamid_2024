const listaAnimais = document.querySelector('.animais-lista')
// pode colocar na variável:
const height = listaAnimais.clientHeight
console.log(height)

// ou direto no console.log:
console.log(listaAnimais.scrollHeight)
console.log(listaAnimais.clientWidth)
console.log(listaAnimais.scrollWidth)

//
console.log(listaAnimais.offsetHeight)

const animaisTop = document.querySelector('.animais')

// distancia entre o topo do elemento e o topo da pagina:
console.log('distancia do elemento ao topo da página: ', listaAnimais.offsetTop)
console.log('distancia do elemento ao topo da página: ', animaisTop.offsetTop)
// distancia entre o canto esquerdo do elemento e o canto esquerdo da página:
console.log(animaisTop.offsetLeft)

// const rect = animaisTop.getBoundingClientRect()
// console.log(rect.top)
// console.log(rect.width)
// console.log(window.innerWidth)

// console.log(
//   window.innerWidth,
//   window.outerWidth,
//   window.innerHeight,
//   window.outerHeight,
//   window.pageYOffset
// )
// console.log(listaAnimais.scrollHeight)
// console.log(listaAnimais.clientHeight)

// const small = window.matchMedia('(max-width: 600px')

// // const listaAnimais2 = document.querySelector('.animais-lista')

// // console.log(section.clientHeight)

// function somaImagem() {
//   const imagens = document.querySelectorAll('img')
//   let soma = 0
//   imagens.forEach(imagem => {
//     console.log(imagem.offsetWidth)
//     soma = soma + imagem.offsetWidth
//   })
//   console.log(soma)
// }
// window.onload = function () {
//   somaImagem()
// }
