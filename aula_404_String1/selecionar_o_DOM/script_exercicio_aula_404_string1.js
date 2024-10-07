// Utilizando o foreach no array abaixo, some os valores de TAxa e os valores dos recebimentos:
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39'
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129'
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99'
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129'
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49'
  }
]

let taxaTotal = 0
let recebimentoTotal = 0
// transacoes.forEach(item => {
//   const numeroLimpo = +item.valor.replace('R$ ', '')
//   if (item.descricao.slice(0, 4) === 'Taxa')  taxaTotal = taxaTotal + numeroLimpo

// })

transacoes.forEach(item => {
  const numeroLimpo = +item.valor.replace('R$ ', '')
  if (item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal = taxaTotal + numeroLimpo
  }
  if (item.descricao.slice(0, 4) === 'Rece') {
    recebimentoTotal += numeroLimpo
  }
})
console.log('A taxa total é de: ', taxaTotal)
console.log(recebimentoTotal)

// Retorne um array com a lista abaixo:
const transportes = 'Carro;Avião;Trem;ônibus;Bicicleta'
console.log(transportes)
const arrayTransporte = transportes.split(';')
console.log(arrayTransporte)

// Substitua todos os span´s por a´s:

const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
              </ul>`

const htmlArr = html.split('span')
console.log(htmlArr)
const htmla = htmlArr.join('a')
console.log(htmla)

// const htmlText = '<div> O melhor item</div><div>A melhor lista</div>'
// const htmlArray = htmlText.split('div')
// console.log(htmlArray)
// const htmlNovo = htmlArray.join('section')
// console.log(htmlNovo)

// Retorne o último caracter da frase:
const frase2 = 'Melhor do ano!'
const ultimoCara = frase2.slice(-1)
console.log(ultimoCara)

// Retorne o total de taxas:
const transacoes2 = [
  'Taxa do Banco',
  '      TAXA do pão',
  '   taxa do mercado',
  'depósito Bancário',
  'TARIFA especial'
]

taxasTotal = 0
transacoes2.forEach(item => {
  item = item.toLowerCase()
  item = item.trim()
  item = item.slice(0, 4)

  if (item === 'taxa') {
    taxasTotal++
  }
  console.log(taxasTotal)
})

const preco = 10.32323
console.log(+preco.toFixed(4) + 10)
console.log(parseFloat(preco.toFixed(3)) + 10)
console.log((parseFloat(preco) + 20).toFixed(2))
