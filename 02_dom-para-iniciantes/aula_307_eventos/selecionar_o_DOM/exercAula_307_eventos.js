// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais items caso eles possuam a mesma. Previna o comportamento padrão desses links.
const links99 = document.querySelectorAll('a[href^="#"]')

function add2(event) {
  event.preventDefault()

  links99.forEach(link => {
    link.classList.remove('ativo')
  })
  event.currentTarget.classList.add('ativo')
}

links99.forEach(add => {
  add.addEventListener('click', add2)
})

// Selecione todos os elementos do site começando a partir do body, ao clicar mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *')

function callbackTipo(event) {
  console.log(event.currentTarget)
}

todosElementos.forEach(item => {
  item.addEventListener('click', callbackTipo)
})

// utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado. O método remove() remove um elemento.

const todosElementos2 = document.querySelectorAll('body *')

function callbackTipo(event) {
  event.currentTarget.remove()
}

todosElementos2.forEach(item => {
  item.addEventListener('click', callbackTipo)
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function aumentarLetra(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('aumentaLetra')
  }
}

window.addEventListener('keydown', aumentarLetra)
