import galleryOfImages from "./gallery-items.js";

const imageGallery = document.querySelector('.js-gallery');
const modal = document.querySelector('.lightbox');
const modalImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('.lightbox__button');
const overlay = document.querySelector('.lightbox__overlay');

import imagesToInsert from "./render.js";

imageGallery.insertAdjacentHTML('beforeend', imagesToInsert);

imageGallery.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName === 'IMG') {
        modal.classList.add('is-open');
    }
    modalImage.src = event.target.dataset.source;
    modalImage.dataset.index = event.target.dataset.index;
});


closeButton.addEventListener('click', modalShutDown);
overlay.addEventListener('click', modalShutDown);

function modalShutDown() {
    modal.classList.remove('is-open');
    modalImage.src = "";
}


window.addEventListener("keydown", closeOnKey);

function closeOnKey(event) {

    if (event.code === "Escape") {
        modalShutDown();
    }
    if (event.code === "ArrowLeft") {
        arrowLeft();
    }
    if (event.code === "ArrowRight") {
        arrowRight();
    }
}

function changeImage(step, currentIndex) {
    modalImage.dataset.index = `${currentIndex + step}`;
    modalImage.src = galleryOfImages[currentIndex + step].original;
    modalImage.alt = galleryOfImages[currentIndex + step].description;
}

function arrowLeft() {
    let currentIndex = Number(modalImage.dataset.index);

    if (currentIndex === 0) {
        changeImage(0, galleryOfImages.length - 1);
        return;
    }
    changeImage(-1, currentIndex);
}

function arrowRight() {
    let currentIndex = Number(modalImage.dataset.index);
    if (currentIndex === galleryOfImages.length - 1) {
        changeImage(0, 0);
        return;
    }
    changeImage(1, currentIndex);
}

//знімання класів з попередньої карточки
/* const currentActiveImage = document.querySelector('.lightbox .is-open');

if (currentActiveImage) {
    modal.classList.remove('is-open');
} */


//прослуховування клавіш
/* window.addEventListener('keydown', showKey);

function showKey(event) {
    console.log(event);
} */