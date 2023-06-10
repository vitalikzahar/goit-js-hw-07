import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector('.gallery')
console.log(ulEl)

const newGallary = galleryItems.map((item) => 
 `<li class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  /></a>`).join("");

ulEl.innerHTML = newGallary;


document.addEventListener('click', (event) => {
    event.preventDefault();
       
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`)
    instance.show()

})

