const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts, and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    },
];

const carousel = document.querySelector('.carousel');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let activeIndex = 0;

function createFigureElement(imageUrl, title, text) {
    const figureElement = document.createElement('figure');
    const imgElement = document.createElement('img');
    const figcaptionElement = document.createElement('figcaption');
    const captionContainer = document.createElement('div');
    const overlayElement = document.createElement('div');

    imgElement.src = imageUrl;
    figcaptionElement.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
    figcaptionElement.className = 'carousel-caption';
    captionContainer.appendChild(figcaptionElement);
    figureElement.appendChild(imgElement);
    figureElement.appendChild(captionContainer);
    figureElement.appendChild(overlayElement);

    return figureElement;
}

function setActiveImage(index) {
    const figureElements = carousel.querySelectorAll('figure');

    figureElements.forEach((figureElement) => {
        figureElement.classList.remove('active');
    });

    figureElements[index].classList.add('active');
}

function updateCarousel() {
    carousel.innerHTML = '';

    images.forEach((image) => {
        const { image: imageUrl, title, text } = image;

        const figureElement = createFigureElement(imageUrl, title, text);

        carousel.appendChild(figureElement);
    });

    setActiveImage(activeIndex);
}

arrowLeft.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveImage(activeIndex);
});

arrowRight.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % images.length;
    setActiveImage(activeIndex);
});

updateCarousel();