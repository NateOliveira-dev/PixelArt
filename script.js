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

function pixelclean() {
  const btnClear = document.querySelector('#clear-board');
  btnClear.addEventListener('click', () => {
    const board = document.querySelectorAll('.pixel');
    for (let i = 0; i < board.length; i += 1) {
      board[i].style.backgroundColor = 'white';
    }
  });
}
pixelclean();

let newBoardSize = 0;
function vqvBoardSize() {
  const newTable = document.querySelector('#pixel-board');
  newTable.innerHTML = '';

  for (let i = 0; i < newBoardSize; i += 1) {
    const newDivTable = document.createElement('div');
    newTable.appendChild(newDivTable);
    newDivTable.className = 'column border';

    for (let j = 0; j < newBoardSize; j += 1) {
      const squarePixel = document.createElement('div');
      newDivTable.appendChild(squarePixel);
      squarePixel.className = 'pixel border';
    }
  }
}
const newBoardBtn = document.getElementById('generate-board');
newBoardBtn.addEventListener('click', () => {
  newBoardSize = document.getElementById('board-size').value;

  if (newBoardSize.length === 0) {
    alert('Board inválido!');
    newBoardSize = 5;
  } else if (newBoardSize < 5) {
    newBoardSize = 5;
  } else if (newBoardSize > 50) {
    newBoardSize = 50;
  }
  vqvBoardSize();
  console.log(newBoardSize);
});

const colorFirst = document.getElementsByClassName('purple')[0];
const secondColor = document.getElementsByClassName('yellow')[0];
const thirdColor = document.getElementsByClassName('pink')[0];

function randomColor() {
  const randomFirstColor = Math.ceil(Math.random() * 255);
  const randomSecondColor = Math.ceil(Math.random() * 255);
  const randomThirdColor = Math.ceil(Math.random() * 255);

  return `rgb(${randomFirstColor}, ${randomSecondColor}, ${randomThirdColor})`;
}
colorFirst.style.backgroundColor = randomColor();
secondColor.style.backgroundColor = randomColor();
thirdColor.style.backgroundColor = randomColor();
