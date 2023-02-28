import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const gallery = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', gallery);

function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class='gallery__item'>
								<a class='gallery__link'  href="${original}">
									<img class='gallery__image' src="${preview}" data-source="${original}" alt="${description}">
									</img>
								</a>
							</div>`;
        })
        .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});

console.log(galleryItems);
