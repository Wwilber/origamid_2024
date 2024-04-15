// const listaAnimais = document.querySelector('.animais-lista')
// console.log(listaAnimais.clientHeight)
// console.log(listaAnimais.clientWidth)
// console.log(listaAnimais.scrollWidth)
// console.log(listaAnimais.scrollHeight)

// console.log(listaAnimais.offsetHeight)

// const animaisTop = document.querySelector('.animais')
// console.log(animaisTop.offsetTop)
// console.log(animaisTop.offsetLeft)

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

function somaImagem() {
  const imagens = document.querySelectorAll('img')
  let soma = 0
  imagens.forEach(imagem => {
    console.log(imagem.offsetWidth)
    soma = soma + imagem.offsetWidth
  })
  console.log(soma)
}
window.onload = function () {
  somaImagem()
}
