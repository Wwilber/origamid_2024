export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
  // console.log(accordionList)
  const activeClass = 'ativo'
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
      // console.log(this.nextElementSibling)
      // console.log(event.currentTarget)
    }

    accordionList.forEach(item => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
