// EVENTOS:

//addEventListener: Adiciona uma função ao elemento, esta chamada de CALLBACK, que será ativada assim que cento EVENTO ocorrer neste elemento.
const img = document.querySelector('img')

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function () {
  console.log('Clicou')
})
// o terceiro parâmetro é opcional

// CALLBACK: é boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima:

const img2 = document.querySelector('img')
function callback() {
  console.log('Clicou')
}

img2.addEventListener('clicou', callback) // melhor prática e forma correta.
img2.addEventListener('click', callback()) //undefined
img2.addEventListener('clicou', function () {
  console.log('Clicou')
})
img2.addEventListener('click', () => {
  console.log('Clicou')
})

// Event: O primeiro parâmetro do callback é referente ao evento que ocorreu.
const img3 = document.querySelector('img')
function callback(event) {
  console.log(event)
}

img.addEventListener('click', callback)

// GERALMENTE UTILIZAM e COMO NOME DO PARÂMETRO OU MESMO O event

// PROPRIEDADE DO EVENT:
const animaisLista = document.querySelector('.animais-lista')

function executarCallback(event) {
  const currentTarget = event.currentTarget // this
  const target = event.target // onde o clique ocorreu
  const type = event.type // tipo do evento
  const path = event.path
  console.log(currentTarget, target, type, path)
}

animaisLista.addEventListener('click', executarCallback)

// event.preventDefault(): Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá prevenir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="http"]')

function clickNoLink(event) {
  event.preventDefault()
  console.log(event.currentTarget.href)
}
linkExterno.addEventListener('click', clickNoLink)

// this: A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

const imgx = document.querySelector('img')

function callback(event) {
  console.log(this) // retorna a imagem
  console.log(this.getAttribute('src'))
}
imgx.addEventListener('click', callback)

// Diferentes Eventos: Existem diversos eventos como click, scroll, resize, keydow, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também:

https://developer.mozilla.org/en-US/docs/Web/Events

const h1 = document.querySelector('h1')
function callback(event) {
  console.log(event.type, event)
}

h1.addEventListener('click', callback)
h1.addEventListener('mouseEnter', callback)
window.addEventListener('scroll', callback)
window.addEventListener('resize', callback)
window.addEventListener('keydown', callback)


// KEYBOARD: Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do KEYBOARD.

function handleKeyboard(event) {
  if (event.key === 'a') document.body.classList.toggle('azul')
  else if (event.key === 'v') document.body.classList.toggle('vermelho')
}
window.addEventListener('keydown', handleKeyboard)

// forEach e EventSource: O método addEventListener é adicionado a um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos a cada um deles.

const imgs = document.querySelectorAll('img')

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src')
  console.log(src)
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc)
})
