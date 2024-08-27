// SHOWCONSOLEDRAWER OU ESC NO INSPECIONAR = ABRE OUTRA ABA DE CONSOLE.

// Height e Width: Estas saão propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only:

const section = document.querySelector('.animais')
section.clientHeight // height + padding
section.offsetHeight // height+padding+border
section.scrollHeight // height total, mesmo dentro de scroll

// mesma coisa para o Width, clientWidth
console.log(section.clientHeight)
console.log(section.clientWidth)
console.log(section.scrollWidth)
console.log(section.scrollHeight)

//offsetTop e offsetLeft:
const section2 = document.querySelector('.animais')

// Distância entre o topo do elemento e o topo da página:
section2.offsetTop

// Distância entre o canto esquerdo do elemento e o canto esquerdo da página:
section2.offSetLeft

// getBoundingClientRect(): Método que retorna um objeto com valore de width, height, distâncias do elemento e mais.

const section3 = document.querySelector('.animais')
const rect = section3.getBoundingClientRect()
rect.height // height do elemento
rect.width //width do elemento
rect.top // distância entre o topo do elemento e o scroll

// window:
window.innerWidth // width da janela;
window.outerWidth // soma dev tools também
window.innerHeight // height da janela
window.outerHeight // soma a barra de endereço

window.pageXOffset // distância total do scroll horizontal
window.pageYOffset // distância total do scroll vertical

if (window.innerWidth < 600) {
  console.log('Tela menor que 600px')
}

// matchMedia(): Utilize um media-querie como no CSS para verificar a largura do browser:

const small = window.matchMedia('(max-width: 600px').matches

if (small.matches) {
  console.log(`Tela menor que 600px' ${small.matches}`)
} else {
  console.log('Tela maior que 600px')
}
