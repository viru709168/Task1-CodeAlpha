const images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic3.jpg"
];

let currentIndex = 0;

const currentImageElement = document.getElementById('current-image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

function showImage(index) {
    currentIndex = index;
    updateImage();
}

function updateImage() {
    currentImageElement.src = images[currentIndex];
}
