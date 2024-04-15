// CONDICIONAIS:

// IF e ELSE:

var possuiGraduacao = true

if (possuiGraduacao) {
  console.log('Possui graduação')
} else {
  console.log('Não possui graduação')
}
console.log('---------------')
var possuiGraduacao1 = true
var possuiDoutorado1 = false

if (possuiDoutorado1) {
  console.log('Possui graduação e doutorado')
} else if (possuiGraduacao1) {
  console.log('Possui graduação, mas não possui doutorado')
} else {
  console.log('Não possui graduação')
}
console.log('---------------')

/* truthy e falsy:
falsy:
if(false)
if(0) ou -0
if(NaN)
if(null)
if(undefined)
if('') ou "" ou ``

truthy:
if(true)
if(1)
if(' ')
if('andré')
if(-5)
if({})
*/

tempoDeHoje = 'teste'

switch (tempoDeHoje) {
  case 'chovendo':
    console.log('escorregadio')
    break
  case 'nublado':
    console.log('bom para correr')
    break
  default:
    console.log('ficar em casa')
    break
}
