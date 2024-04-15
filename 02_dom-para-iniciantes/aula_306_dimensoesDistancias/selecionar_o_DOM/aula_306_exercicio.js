// verifique a distância da primeira imagem em relação ao topo da página:
const primeiraImagem = document.querySelector('img')
console.log(primeiraImagem)
primeiraImagem.offsetTop

// retorne a soma da largura de todas as imagens:
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

// verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google.)

const links = document.querySelectorAll('a')
console.log(links)

links.forEach(link => {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight
  console.log(linkWidth, linkHeight)
  if (linkWidth > 48 && linkHeight > 48) {
    console.log('São os valores recomendados')
  } else {
    console.log('Não são os valores estabelecidos')
  }
})
// se o browser for menor que 720px, adicione a classe menu-movile ao menu:
const small = window.matchMedia('(max-width: 720px')

if (small.matches) {
  console.log(`Tela mobile' ${small.matches}`)
} else {
  console.log('A tela não é mobile')
}
