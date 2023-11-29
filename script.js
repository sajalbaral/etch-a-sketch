const container = document.getElementById('container');

function multiply(num) {
    return num * num
}

function makeDivs(numDivs) {
    let gridSize = multiply(numDivs)

    for(let i = 0; i < gridSize; i++) {
        let cells = document.createElement('div');
        container.appendChild(cells)
    }
}

function defaultGrid() {
    makeDivs(16)
}

makeDivs(24)