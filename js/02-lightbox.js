import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const makeGallery = ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
const markup = galleryItems.map((el) => makeGallery(el));
gallery.insertAdjacentHTML("afterbegin", markup.join(""));

const lightBox = new SimpleLightbox('.gallery a', {captionDelay:250, captionPosition:'bottom', captionsData:'alt'});