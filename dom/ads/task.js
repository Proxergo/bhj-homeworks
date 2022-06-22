const rotateAdvs = function () {
    const caseActive = document.querySelector('.rotator__case_active');
    const rotator = document.querySelector('.rotator');

    if (caseActive.nextElementSibling !== null) {
        caseActive.classList.remove('rotator__case_active');
        caseActive.nextElementSibling.classList.add('rotator__case_active');
    } else {
        rotator.firstElementChild.classList.add('rotator__case_active');
        caseActive.classList.remove('rotator__case_active');
    }
    
    caseActive.style.color = caseActive.dataset.color;
    caseActive.setAttribute('data-speed', randomSpeed());
    caseActive.setAttribute('data-color', randomColor());
}

setInterval(rotateAdvs, 1000);

const color = ['green', 'blue', 'red', 'yellow', 'black', 'gray'];
const speed = [200, 400, 600, 800, 1000, 2000];

function randomColor() {
    let random = Math.floor(Math.random() * color.length);
    return color[random];
};

function randomSpeed() {
    let random = Math.floor(Math.random() * speed.length)
    return speed[random];
};

