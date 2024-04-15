//FUNÇÕES: Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
function areaQuadrado(lado) {
  return lado * lado
}

var quadrado = areaQuadrado(4)

console.log('A área do quadrado é: ', quadrado)
console.log('-----------------------------------')
console.log(areaQuadrado(3))
console.log('-----------------------------------')
console.log('A área do quadrado é: ', areaQuadrado(3))
console.log('-----------------------------------')
function mensagem() {
  console.log('teste')
}
mensagem()

// Parâmetros e Argumentos:
// Ao criar uma função, você pode definir parâmetros.
// Ao executar uma função, você pode passar argumentos.
// peso e altura são os parÂmetros:
function imc(peso, altura) {
  const imc = peso / altura ** 2
  return imc
}
console.log(imc(80, 1.8))
console.log(imc(60, 1.7))

console.log('-----------------------------------')

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Você gosta do Céu'
  } else if (cor === 'verde') {
    return 'Você gosta de mato'
  } else {
    return 'Você não gosta de nada'
  }
}
console.log(corFavorita())

console.log('-----------------------------------')
function corFavorita2(cor2) {
  switch (cor2) {
    case 'azul':
      console.log('vocÊ gosta do céu')
      break
    case 'verde':
      console.log('você gosta da natureza')
      break
    default:
      console.log('Você gosta de tudo')
  }
}
corFavorita2('azul')
corFavorita2(' ')
console.log('-----------------------------------')

// Argumentos podem ser funções.
// Chamadas de CAllback, geralmente são funções que ocorrem após algum evento.

addEventListener('click', function () {
  console.log('Clicou')
})
// a função possui dois argumentos
// primeiro é a string 'click'
// segundo é uma função anônima
// função anônima é aquela em que o nome da função não é definido, escritas como: function() {} ou () => {}

// PODE OU NÃO RETORNAR UM VALOR: Quando não definimos o return, ela irá retornar "UNDEFINED". O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso, altura) {
  const imc = peso / altura ** 2
  console.log(imc)
  return imc
}
imc2(30, 1.4) // retorna o imc2
console.log(imc2(180, 1.4)) // retorna o imc e undefined

// VALORES RETORNADOS: Uma função pode retornar qualquer tipo de dados e até outras funções: ** não é boa prática função retornar tipos de dados diferentes.
function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor preencha um número!'
  } else if (idade >= 60) {
    return true
  } else {
    return false
  }
}

console.log(terceiraIdade(30.0))

// ESCOPO: variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

// var totalPaises = 193

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193
  return `falta visitar ${totalPaises - paisesVisitados} paises`
}
// console.log(totalPaises) // erro, total países não definido.
console.log(faltaVisitar(20))

// ESCOPO LÉXICO: Funções conseguem acessar variáveis que foram criadas no contexto pai:

var profissao = 'Designer'

function dados() {
  var nome = 'André'
  var idade = 28
  function outrosDados() {
    var endereco = 'Rio de Janeiro'
    var idade = 29
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados()
}
console.log(dados())

/*  HOISTING: Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória 

*/
