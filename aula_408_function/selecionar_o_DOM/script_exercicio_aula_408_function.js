function Dom(seletor) {
  this.element = document.querySelector(seletor)
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe)
}
const lista = new Dom('section')
console.log(lista)
console.log(Dom.length)
console.log(Dom.name.toLowerCase())

lista.ativo('ativar')
console.log(lista)

// // Retorne a soma total de caracteres dos parágrafos acima utilizando reduce:

// const paragrafos = document.querySelectorAll('p')
// const totalCaracteres = Array.prototype.reduce.call(
//   paragrafos,
//   (acumulador, item) => {
//     // console.log(item.innerText.length)
//     return acumulador + item.innerText.length
//   },
//   0
// )
// console.log(totalCaracteres)
// console.log(paragrafos)

// // Crie uma função que retorne novos elementos html, com os seguintes parametros: tag, classe e conteudo.
// function criarElement(tag, classe, conteudo) {
//   const elemento = document.createElement(tag)
//   classe ? elemento.classList.add(classe) : null
//   conteudo ? (elemento.innerHTML = conteudo) : null
//   return elemento
// }

// console.log(criarElement('li', 'azul', 'esse é o conteudo'))

// // Crie uma nova função utilizando a anterior como base. Essa nova função devera sempre criar h1 com a classe titulo. Porém o parÂmetro conteudo continuará dinamico.

// const h1titulo = criarElement.bind(null, 'h1', 'titulo')

// console.log(h1titulo('mudou o conteudo'))
