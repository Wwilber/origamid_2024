// Document Object Model(DOM): É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos:
// console.log(window);
// window é o objeto global do browser;
// possui diferentes métodos e propriedades;

// window.innerHeight // retorna a altura do browser

// ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.
// window.alert('teste')
const teste = window.location.href
console.log(teste)

const h2Selecionado = document.querySelector('h2')

// window e Document: São objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

// NODE: Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const titulo = document.querySelector('h2')
titulo.innerText // retorna o texto;
titulo.classList // retorna as classes;
titulo.id // retorna o id;
titulo.offsetHeight // retorna a altura do elemento;
//titulo.addEventListener('click', callback) // ativa a função callback ao click no titulo.

h2Selecionado.addEventListener('click', function () {
  console.log('clicou', h2Selecionado.innerText)
})

function callback1() {
  console.log(h2Selecionado.innerText)
}

h2Selecionado.addEventListener('click', callback1)
