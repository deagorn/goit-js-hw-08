// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';


const markup = galleryItems
    .map((items) => `<li class="gallery__item">
   <a class="gallery__link" href="${items.original}">
      <img class="gallery__image" src="${items.preview}" alt="${items.description}" />
   </a>
</li>`)
    .join("");




// Adding a gallery to HTML
const gallery = document.querySelector(".gallery");
gallery.innerHTML = markup;


 // creating a modal window
    var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
     captionDelay: 250  });
