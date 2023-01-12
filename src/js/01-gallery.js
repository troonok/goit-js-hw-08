// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const imgsGallery = document.querySelector('.gallery');

const markup = galleryItems
	.map(({original,preview,description}) => 
    `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
    </a>`)
	.join('');

imgsGallery.insertAdjacentHTML('afterbegin', markup);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});