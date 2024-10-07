// // // HTMLElement: Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement:
// const div = document.querySelector('div')
// console.log(div.dataset)
//console.log(Object.prototype.toString.call(div))
// // // [object HTMLHeadingElement]
// console.log(h1.dataset)

// // Dataset: É uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.

// <div data-cor="azul" data-width="500">Uma Div</div>
// <span data-anime="left" data-tempo="2000">Um Span</span>

// // // Ambos os valores selecionam a mesma div acima:
// let div = document.querySelector('div');
// div = document.querySelector('[data-cor]');
// div = document.querySelector('[data-cor="azul"]');

// div.dataset;
// // DOMStringMap {cor: "azul", width: "500"}
// div.dataset.cor; // 'azul';
// div.dataset.width; // '500';

// Exercício:

// Adicione um atributo data-anime='shown-down" e data -anime='show-right' a todas as section´s com descrição dos animais.

// Utilizando estes atributos, adicione a classe show-down ou show-rigut a sua respectiva section assim que a mesma aparecer na tela (animação tab)

// No CSS faça com que show-down anime de cima para baixo e show-right continue com a mesma animação da esquerda para a direita

// substitua todos as classes js- por data atributos.
