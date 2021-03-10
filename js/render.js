import galleryOfImages from "./gallery-items.js";

// create gallery

const imagesToInsert = galleryOfImages.map(image => {

    return `<li class="gallery__item">
    <a class="gallery__link"
    href=${image.original}>
    <img class="gallery__image" src=${image.preview} data-source=${image.original} data-index=${galleryOfImages.indexOf(image)} alt=${image.description}></a></li>`;

}).join('');

export default imagesToInsert;