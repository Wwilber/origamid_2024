// Crie uma função construtora de Pessoas:

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
}

Pessoas.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome
}

const wilber = new Pessoas('wilber', 'ribeiro', 51)
wilber.nomeCompleto()

// liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document:
NodeList
NodeList.prototype
HTMLCollection
HTMLCollection.prototype
Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores de dados abaixo:
const li = document.querySelector('li')

li // HTMLLIElement
li.click // function li.click.constructor.name
li.innerText // string function li.click.constructor.name
li.value // Number li.value.constructor.name
li.hidden // Boolean - li.hidden.constructor.name
li.offsetLeft // Number - li.offsetLeft.constructor.name
li.click() // undefined(não tem construtor para undefined)

// qual o construtor do dado abaixo:
li.hidden.constructor.name // string
