import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Ініціалізація екземпляра SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();

  if (!searchQuery) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  // Очищення галереї перед новим запитом
  gallery.innerHTML = '';
  showLoader(loader);

  fetchImages(searchQuery)
    .then(data => {
      hideLoader(loader);

      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      // Вставка нових елементів за одну операцію
      const markup = renderGallery(data.hits);
      gallery.innerHTML = markup;

      // Оновлення слайдера SimpleLightbox
      lightbox.refresh();
    })
    .catch(() => {
      hideLoader(loader);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong! Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      form.reset();
    });
});
