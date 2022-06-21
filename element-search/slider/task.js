const slides = document.getElementsByClassName("slider__item");
const prevButton = document.querySelector(".slider__arrow_prev");
const nextButton = document.querySelector(".slider__arrow_next");
const dots = document.getElementsByClassName("slider__dot");

let arrLinks = Array.from(slides);
let index = 0;

function deactivateSlide(index) {
    slides.item(index).className = "slider__item";
    dots.item(index).className = "slider__dot";
}

function activateSlide (index) {
    slides.item(index).className = "slider__item slider__item_active";
    dots.item(index).className = "slider__dot slider__dot_active";
}

prevButton.onclick = prevSlide;
function prevSlide() {
    let index = arrLinks.findIndex((element) => element.className === "slider__item slider__item_active");
    deactivateSlide(index);
    if (index === 0) {
        index = slides.length - 1;
        activateSlide(index);
    } else {
        index--;
        activateSlide(index);
    }
}

nextButton.onclick = nextSlide;
function nextSlide() {
    let index = arrLinks.findIndex((element) => element.className === "slider__item slider__item_active");
    deactivateSlide(index);
    if (index === (slides.length - 1)) {
        index = 0;
        activateSlide(index);
    } else {
        index++;
        activateSlide(index);
    }
}


for (i = 0; i < dots.length; i++) {
    let dot = dots.item(i);
    let indexDot = i;
    dot.onclick = leafDots;

    function leafDots() {
        let index = arrLinks.findIndex((element) => element.className === "slider__item slider__item_active");
        deactivateSlide(index);
        activateSlide(indexDot);
    }
}