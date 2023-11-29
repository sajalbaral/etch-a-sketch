const container = document.getElementById('container');

function makeDivs(numDivs) {
    for(let i = 0; i < numDivs; i++) {
        let cells = document.createElement('div');
        container.appendChild(cells)
    }
}

console.log(makeDivs(16))