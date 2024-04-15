// verifique se a sua idade é maior do que a de algum parente
// dependendo do resultado coloque no console 'é maior', 'é igual', 'é menor':

var minhaIdade = 20
var idadeParente = 32

if (minhaIdade == idadeParente) {
  console.log('é igual')
} else if (minhaIdade > idadeParente) {
  console.log('é maior')
} else {
  console.log('é menor')
}

// qual o valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2
console.log(expressao)

//verifique as seguintes variáveis são truthy ou falsy:

var nome = 'André' // truthy;
var idade = 28 // truthy
var possuiDoutorado = false // falsy;
var empregoFuturo //falsy
var dinheiroNaConta = 0 //falsy

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
)

if (nome) {
  console.log('verdadeiro')
} else {
  console.log('falso')
}

if (idade) {
  console.log('verdadeiro')
} else {
  console.log('falso')
}

if (possuiDoutorado) {
  console.log('verdadeiro')
} else {
  console.log('falso')
}

if (empregoFuturo) {
  console.log('verdadeiro')
} else {
  console.log('falso')
}

if (dinheiroNaConta) {
  console.log('verdadeiro')
} else {
  console.log('falso')
}

// Compare o total de habitantes do brasil com china:

var brasil = 207
var china = 1340

if (brasil > china) {
  console.log('O Brasil tem população maior que a china')
} else if (brasil === china) {
  console.log('O Brasil tem população igual a China')
} else {
  console.log('O Brasil tem população menor a China')
}

// o que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
  console.log('Verdadeira')
} else {
  console.log('Falso')
}

// o que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
  console.log('Verdadeira')
} else {
  console.log('Falso')
}
