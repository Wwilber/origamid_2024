// EXERCÍCIO

// Liste cinco objetos nativos:
Object
String
Array
Function
Number
Math

// Liste cinco objetos do browser:
window
window.history
NodeList
HTMLCollection
Document

// Liste 2 Métodos, Propriedades ou Objetos presentes no Chrome que não existem no Firefox

if (typeof document.webkitHidden !== 'undefined') {
  console.log('Existe!!!')
} else {
  console.log('Não Existe!!!')
}
