// crie uma função para verificar se um valor é trutty:

function valorVerdadeiro(valor) {
  return !!valor
}
console.log(valorVerdadeiro(1))

// crie uma função matemática que retorne o perímetro de um quadrado
//lembrando: perímetro é a soma dos quatro lados do quadrado.

function perimetroQuadrado(lado1, lado2, lado3, lado4) {
  periQua = lado1 + lado2 + lado3 + lado4
  return periQua
}
console.log(perimetroQuadrado(2, 4, 6, 1))

// crie uma função que retorne o seu nome completo

function nomeCompleto(nome, sobrenome) {
  var nome = nome
  var sobrenome = sobrenome
  return `meu nome completo é: ${nome} ${sobrenome}`
}
console.log(nomeCompleto('Wilber', 'Ribeiro'))
// ela deve possuir os parametros nome e sobrenome

function numeroPar(numero) {
  if (numero % 2 == 0) {
    console.log('Este número é par!!!')
  }
}

numeroPar(10)
// crie uma função que verifica se um número é par

// crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

//addEventListener é uma função nativa do JavaScript
// o primeiro parametro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo quando o evento "scroll" ocorrer

// corrija o erro abaixo:

var totalPaises = 193
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}
console.log(precisoVisitar(20))
console.log(jaVisitei(20))
