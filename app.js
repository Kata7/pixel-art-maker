var color = 'white';
const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
var selection = document.getElementById('selection');

document.addEventListener('DOMContentLoaded', function (event) {
    createPalette();
    createCanvas();
})

var canvas = document.getElementById('canvas');

function createPalette() {
    for (let col = 0; col < colors.length; col++) {
        let palette = document.getElementById(`${colors[col]}`)
        palette.addEventListener('click', () => {
            color = `${colors[col]}`;
            selection.classList = color;
        })
    }
}

function createCanvas() {
    for (var i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (var j = 0; j < 16; j++) {
            let block = document.createElement('div');
            block.addEventListener('click', (event) => {
                event.target.classList = '';
                event.target.classList.toggle(color)
            })
            row.appendChild(block);
        }
        canvas.appendChild(row);
    }
}

