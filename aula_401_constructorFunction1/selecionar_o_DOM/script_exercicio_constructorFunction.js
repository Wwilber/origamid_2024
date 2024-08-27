// EXERCÍCIO

// TRANSFORME O OBJETO ABAIXO EM UMA Constructor Function:

// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou' )
//   }
// }

// function Pessoa(nomePessoa, idadePessoa) {
//   this.nome = nomePessoa
//   this.idade = idadePessoa
//   this.andar = function () {
//     console.log(this.nome + ' andou')
//   }
// }

// // CRIE 3 PESSOAS: João - 20 anos, Maria - 25 anos, Bruno - 15 anos.

// const joao = new Pessoa('joao', 20)
// console.log(joao)
// joao.andar()

// const maria = new Pessoa('maria', 25)
// console.log(maria)
// maria.andar()

// const bruno = new Pessoa('bruno', 15)
// console.log(bruno)
// bruno.andar()

// Crie uma Constructor Function(DOM) para manipulação de listas de elementos do dom. Deve conter as seguintes propriedades e métodos:
// elements, retorna Nodelist com os elementos selecionados
// addClasse(classe, adiciona a classe a todos os elementos
// removeClass(classe), remove a classe em todos os elementos.

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor)
  this.elements = elementList
  // console.log(elementList)
  this.addClass = function (classe) {
    elementList.forEach(element => {
      element.classList.add(classe)
    })
  }
  this.removeClass = function (classe) {
    elementList.forEach(element => {
      element.classList.remove(classe)
    })
  }
}

const listaItens = new Dom('li')
console.log(listaItens)
console.log(listaItens.elements)
// listaItens.addClass('ativo')
// listaItens.removeClass('ativo')
