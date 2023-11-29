const container = document.getElementById('container');
const grids = document.querySelectorAll('#grids');
const small = document.querySelector('#small');
const med = document.querySelector('#med');
const big = document.querySelector('#big');

function multiply(num) {
    return num * num;
}

function makeDivs(numDivs) {
    let gridSize = multiply(numDivs);

    for(let i = 0; i < gridSize; i++) {
        let cells = document.createElement('div');
        cells.setAttribute('id', 'grids');
        container.appendChild(cells);
    }
}

function defaultGrid() {
    makeDivs(16);
    let grids = document.querySelectorAll('#grids').forEach(elem => {
        elem.style.width = '32px'
        elem.style.height = '32px'
    })
}

function medGrid() {
    makeDivs(32);
    let grids = document.querySelectorAll('#grids').forEach(elem => {
        elem.style.width = '16px'
        elem.style.height = '16px'
    })
}

function bigGrid() {
    makeDivs(64);
    let grids = document.querySelectorAll('#grids').forEach(elem => {
        elem.style.width = '8px'
        elem.style.height = '8px'
    })
}

function clear() {
    while (grids.firstChild) {
        grids.removeChild(grids.lastChild)
    }
}

small.addEventListener('click', () => {
    defaultGrid();
    small.disabled = true;
    med.disabled = false;
    big.disabled = false;
})

med.addEventListener('click', () => {
    medGrid();
    med.disabled = true;
    small.disabled = false;
    big.disabled = false;
})

big.addEventListener('click', () => {
    bigGrid()
    big.disabled = true;
    small.disabled = false;
    med.disabled = false;
})

