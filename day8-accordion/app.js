const accordion = document.querySelector('.accordion');
const accordionItems = document.querySelectorAll('.accordion .accordion-item');

accordion.addEventListener('click', toggleAccordion);

function toggleAccordion(e) {
  if (e.target.classList.contains('fa-minus')) {
    const clickedAccordion = e.target.closest('.accordion-item');
    clickedAccordion.classList.replace('expand', 'collapse');
    switchAccordions(clickedAccordion);
  }
  if (e.target.classList.contains('fa-plus')) {
    const clickedAccordion = e.target.closest('.accordion-item');
    clickedAccordion.classList.replace('collapse', 'expand');
    switchAccordions(clickedAccordion);
  }
}

const switchAccordions = (accordion) => {
  const id = accordion.dataset.id;

  accordionItems.forEach((item) => {
    const itemId = item.dataset.id;

    if (id !== itemId) {
      item.classList.replace('expand', 'collapse');
    }
  });
};
