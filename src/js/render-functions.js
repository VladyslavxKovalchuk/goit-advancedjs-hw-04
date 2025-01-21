export function createGallery(cards) {
  return cards
    .map(
      ({
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        largeImageURL,
      }) =>
        `
            <li class="gallery-card">
                <a class="gallery-link" href="${largeImageURL}">
                    <img class="gallery-image" src="${webformatURL}" alt="${tags}" height=312 width=200>
                    <ul class="gallery-image-data">
                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Likes</p>
                            <p class="gallery-image-data-item-value">${likes}</p>
                        </li>

                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Views</p>
                            <p class="gallery-image-data-item-value">${views}</p>
                        </li>

                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Comments</p>
                            <p class="gallery-image-data-item-value">${comments}</p>
                        </li>

                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Downloads</p>
                            <p class="gallery-image-data-item-value">${downloads}</p>
                        </li>
                    </ul>
                </a>
            </li>
      `
    )
    .join('');
}
