// Exercícios:
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']
// Remova o primeiro valor de comidas e coloque em uma variável;
const comidasRemPrimeiro = comidas.shift()
console.log('O primeiro valor removido é: ', comidasRemPrimeiro)

// Remova o ultimo valor de comidas e coloque em uma variável:
const comidasRemUltimo = comidas.pop()
console.log('O ultimo valor removido e: ', comidasRemUltimo)

// Adicione 'Arroz' ao final da Array:
comidas.unshift('Arroz')
console.log(comidas)

// Adicione 'Peixe' e 'Batata' ao inicio da array:
comidas.unshift('Peixe', 'Batata')
console.log(comidas)

// Arrume os estudantes em ordem alfabética:
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']
console.log(estudantes.sort())

// Inverta a ordem dos estudantes
console.log(estudantes.reverse())

// Verifique se Joana faz parte dos estudantes:
console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))

let html = `<section><div>Sobre</div><div>Produtos</div><div>Contato</div></section>`
// substitua section por ul e div por li:
html = html.split('section')
console.log(html)
html = html.join('ul')
console.log(html)
html = html.split('div')
console.log(html)
html = html.join('li')
console.log(html)

const carrosx = ['Ford', 'Fiat', 'VW', 'Honda']
// Remova o ultimo Carro, mas antes de remover salve o array original em outra variável:
const carrosCopia = carrosx.slice()
console.log(carrosx.pop())
console.log(carrosx)
console.log(carrosCopia)
