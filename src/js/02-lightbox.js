import { galleryItems } from './gallery-items.js';
// Change code below this line



const ulEl = document.querySelector('.gallery')


const newGallary = galleryItems.map((item) => 
`<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
   </a>
</li>`).join("");

ulEl.innerHTML = newGallary;
var lightbox = new SimpleLightbox('.gallery a', {
    
    captionsData : 'alt',
    captionPosition : 'bottom',
    captionDelay : 250,
    
});
