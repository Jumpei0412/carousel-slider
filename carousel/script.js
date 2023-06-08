let counter = 1;
const carouselInterval = 3000;
const imgClass = ".img";

setInterval(() => {
    document.querySelector(`${imgClass}.show`).classList.remove('show');
    const img = document.querySelector(`${imgClass}-${counter}`);
    img.classList.add('show');
    counter++;

    if(counter > document.querySelectorAll(imgClass).length) { 
        counter = 1;
    }
}, carouselInterval);