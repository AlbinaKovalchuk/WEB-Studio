const products = document.querySelectorAll('.products-card-item');
const container = document.querySelector('.btn');
let selectedTag = '';
container.addEventListener('click', onChooseBtn);

function onChooseBtn(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveBtn = document.querySelector('.menu__active--btn');
  currentActiveBtn?.classList.remove('menu__active--btn');
  const nextActiveBtn = e.target;
  nextActiveBtn.classList.add('menu__active--btn');
  selectedTag = nextActiveBtn.value;

  products.forEach((product) => {
    const productTxt = product.querySelector('.products-type').textContent;
    if (productTxt !== selectedTag && selectedTag !== 'Усі') {
      product.style.display = 'none';
    } else {
      product.style.display = 'block';
    }
  });
}
