const galleryOfImages = [{
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];


const imageGallery = document.querySelector('.js-gallery');
const modal = document.querySelector('.lightbox');
const modalImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('.lightbox__button');
const overlay = document.querySelector('.lightbox__overlay');


const imagesToInsert = galleryOfImages.map(image => {

    return `<li class="gallery__item">
    <a class="gallery__link"
    href=${image.original}>
    <img class="gallery__image" src=${image.preview} data-source=${image.original} data-index=${galleryOfImages.indexOf(image)} alt=${image.description}></a></li>`;

}).join('');
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