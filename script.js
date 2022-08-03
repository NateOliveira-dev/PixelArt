function firstColor() {
    const cor = document.querySelector('.black');
    cor.classList.add('selected');
}

firstColor();

function removeOrAddClass(element) {
    const aimElement = element.target;
    const catchClass = document.getElementsByClassName('selected');

    for (let i = 0; i < catchClass.length; i++) {
        catchClass[i].classList.remove('selected');
    }
    aimElement.classList.add('selected');
}

const chosenPalette = document.querySelector('#color-palette');
chosenPalette.addEventListener('click', removeOrAddClass);

function colorPixel(element) {
    const aimElement = element.target;
    const catchClass = document.getElementsByClassName('selected')[0];
    const picketColor = getComputedStyle(catchClass).backgroundColor;
    aimElement.style.backgroundColor = picketColor;
}

const selectColors = document.querySelector('#pixel-board');
selectColors.addEventListener('click', colorPixel);