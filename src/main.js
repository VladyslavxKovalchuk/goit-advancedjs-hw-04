import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { getPhotos } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const searchForm = document.querySelector('.image-search-form');
const loadMore = document.querySelector('.load-more-btn');

const queryParams = {
  page: 1,
  perPage: 15,
  maxPages: 1,
  searchQuery: '',
};

const simpleLightBox = new SimpleLightbox('.gallery li a', {
  captionsData: 'alt',
  captionDelay: 250,
});

searchForm.addEventListener('input', e => {
  queryParams.searchQuery = e.target.value.trim();
});

loadMore.addEventListener('click', async e => {
  queryParams.page += 1;
  changeVisibility(loader, true);
  changeVisibility(loadMore, false);
  const photos = await getPhotos(
    queryParams.searchQuery,
    queryParams.page,
    queryParams.perPage
  );
  changeVisibility(loader, false);

  gallery.insertAdjacentHTML(
    'beforeend',
    createGallery(photos.hits)
  );
  smoothScroll();
  simpleLightBox.refresh();
  if (photos.totalHits <= queryParams.page * queryParams.perPage) {
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  } else {
    changeVisibility(loadMore, true);
  }
});

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  queryParams.page = 1;
  if (!queryParams.searchQuery) return;

  gallery.innerHTML = '';
  changeVisibility(loader, true);
  changeVisibility(loadMore, false);
  await getPhotos(
    queryParams.searchQuery,
    queryParams.page,
    queryParams.perPage
  ).then(result => {
      changeVisibility(loader, false);
      if (result.hits.length) {
        gallery.innerHTML = createGallery(result.hits);
        simpleLightBox.refresh();
        if (result.totalHits > queryParams.perPage)
          changeVisibility(loadMore, true);
      } else {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
    })
    .catch(error => {
      iziToast.error({
        message: 'There are some errors with loading pictures.',
        position: 'topRight',
      });
      console.error(error);
    });
});

function smoothScroll() {
  const galleryCard = document.querySelector('.gallery-card');
  window.scrollBy({
    top: galleryCard.getBoundingClientRect().height * 2,
    behavior: 'smooth',
  });
}


function changeVisibility(element, newvalue) {
  if (newvalue) element.style.display = 'block';
  else element.style.display = 'none';
}

