import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const gallery = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', gallery);
galleryContainer.addEventListener('click', onClick);

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
function onClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="750" height="500">
`);

    instance.show();

    galleryContainer.addEventListener('keydown', event => {
        if (event.code === 'Escape') instance.close();
    });
}

console.log(galleryItems);
