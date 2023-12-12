



const grid = document.getElementById("grid");
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');

let currentSize = 16;

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

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

function makeGrid(size) {
  grid.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "grid-item";
  };
  
};

makeGrid(16);