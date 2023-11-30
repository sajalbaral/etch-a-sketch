const container = document.getElementById('container');
const small = document.querySelector('#small');
const med = document.querySelector('#med');
const big = document.querySelector('#big');
const black = document.getElementById('black');
const random = document.getElementById('random');
const clearColor = document.getElementById('clear');

function makeDivs(numDivs) {
    let gridSize = numDivs * numDivs;

    for(let i = 0; i < gridSize; i++) {
        let cells = document.createElement('div');
        cells.setAttribute('id', 'grids');
        container.appendChild(cells);
    }
}

function smallGrid() {
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

function colorBlack(elem) {
    elem.currentTarget.style.backgroundColor = '#000000'
}

function randomColor(elem) {
    let letters = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    elem.currentTarget.style.backgroundColor = color;
}

small.addEventListener('click', () => {
    smallGrid();
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

black.addEventListener('click', () => {
    black.disabled = true;
    random.disabled = false;
    clearColor.disabled = false;
    let grids = document.querySelectorAll('#grids')
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', colorBlack)
    })
})

random.addEventListener('click', ()=> {
    random.disabled = true;
    black.disabled = false;
    clearColor.disabled = false
    let grids = document.querySelectorAll('#grids')
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', randomColor)
    })
})

clearColor.addEventListener('click', () => {
    let grids = document.querySelectorAll('#grids');
    grids.forEach((grid) => {
        grid.setAttribute('style', 'background-color: white')
    })
    clearColor.disabled = true;
    random.disabled = false;
    small.disabled = false;
    med.disabled = false;
    big.disabled = false;
})
