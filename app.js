var color = 'white';
var selection = document.getElementById('selection');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

// set color picker


document.getElementById('black').addEventListener('click', () => {
    color = 'black';
    selection.classList = "";
    selection.classList = color;
    console.log(color);
})
document.getElementById('brown').addEventListener('click', () => {
    color = 'brown';
    selection.classList = "";
    selection.classList = color;
    console.log(color);
})
document.getElementById('red').addEventListener('click', () => {
    color = 'red';
    selection.classList = "";
    selection.classList = color;
    console.log(color);
})
document.getElementById('orange').addEventListener('click', () => {
    color = 'orange';
    selection.classList = "";
    selection.classList = color;
    console.log(color);
})
document.getElementById('yellow').addEventListener('click', () => {
    color = 'yellow';
    selection.classList = "";
    selection.classList = color;
    console.log(color);
})
document.getElementById('green').addEventListener('click', () => {
    color = 'green';
    selection.classList = "";
    selection.classList = color;
    console.log(color);
})
document.getElementById('blue').addEventListener('click', () => {
    color = 'blue';
    selection.classList = "";
    selection.classList = color;
    console.log(color);
})
document.getElementById('violet').addEventListener('click', () => {
    color = 'violet';
    selection.classList = "";
    selection.classList = color;
    console.log(color);
})
document.getElementById('grey').addEventListener('click', () => {
    color = 'grey';
    selection.classList = "";
    selection.classList = color;
    console.log(color);
})
document.getElementById('white').addEventListener('click', () => {
    color = 'white';
    selection.classList = "";
    selection.classList = color;
    console.log(color);
})

createCanvas();
})

// generate canvas 16x16

var canvas = document.getElementById('canvas');


function createCanvas() {
    for (var i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

     for (var j = 0; j < 16; j++) {
         let block = document.createElement('div');
         block.addEventListener('click', (event) => {
             event.target.classList = "";
             event.target.classList.toggle(color)

         })
        row.appendChild(block);
        }

    canvas.appendChild(row);
    }
}

