const grid = document.getElementById("grid");
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const colorPicker = document.getElementById('color-picker');
const colorButton = document.getElementById('color-button');
const clearButton = document.getElementById('clear-button')
const eraserButton = document.getElementById('eraser-button')

let currentSize = 16;
let mouseIsDown = false;
let currentColor = '#000000';



sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)
clearButton.onclick = () => reloadGrid()

colorButton.addEventListener('click', function() {
  currentColor = colorPicker.value;
});

eraserButton.addEventListener('click', function() {
  currentColor = '#fefefe';
});

function setCurrentSize(newSize) {
    currentSize = newSize;
  }

function changeSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    reloadGrid()
  }
  
  function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;
  }
  
  function reloadGrid() {
    clearGrid();
    makeGrid(currentSize);
  }
  
  function clearGrid() {
    grid.innerHTML = '';
  }

  grid.addEventListener('mousedown', function() {
    mouseIsDown = true;
});

  grid.addEventListener('mouseup', function() {
    mouseIsDown = false;
});


function makeGrid(size) {
  grid.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', function() {
      if(mouseIsDown) {
      this.style.backgroundColor = currentColor;
      }

    cell.addEventListener('touchstart', function() {
        this.style.backgroundColor = currentColor;
    });

    cell.addEventListener('mousedown', function() {
      this.style.backgroundColor = currentColor;
  });
  });

  grid.appendChild(cell).className = "grid-item";
  };
};



makeGrid(16);