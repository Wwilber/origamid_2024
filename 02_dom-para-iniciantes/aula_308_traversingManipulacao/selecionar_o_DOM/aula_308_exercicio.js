// Duplique o menu e adicione ele em copy:

const menu2 = document.querySelector('.menu')
console.log(menu2)
const cloneMenu = menu2.cloneNode(true)
const copy = document.querySelector('.copy')
copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de faq:

const dt1 = querySelector('.faq-list dt')
console.log(dt1)

// Substitua o conteúdo html de .faq pelo de animais:
