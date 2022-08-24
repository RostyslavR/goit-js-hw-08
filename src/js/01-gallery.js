import SimpleLightbox from 'simplelightbox';
import '../../node_modules/simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const refGallery = document.querySelector('.gallery');
const galleryMarkUp = galleryItems.map(makeGalleryItem).join('');
refGallery.innerHTML = galleryMarkUp;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function makeGalleryItem(item) {
  return `
  <a class="gallery__item" href="${item.original}">
  <img
  class="gallery__image" src="${item.preview}"
  alt="${item.description}" 
  />
  </a>`;
}

console.log(galleryItems);
