import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const makeGallery = ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</li>`;
const markup = galleryItems.map((el) => makeGallery(el));


gallery.insertAdjacentHTML("afterbegin", markup.join(""));

gallery.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return
    }
    const selectedImage = event.target.dataset.source;
    modalForGallery(selectedImage);
});
function modalForGallery(args) {
    const instance = basicLightbox.create(`
    <img src="${args}" width="800" height="600">
`, {
      onShow: (instance) => { document.addEventListener('keydown', onCloseModalButton) },
      onClose: (instance) => { document.removeEventListener('keydown', onCloseModalButton) }
    });

    instance.show()
    function onCloseModalButton(e) {
  if (e.code === "Escape") {
      instance.close()
    }
}
};

