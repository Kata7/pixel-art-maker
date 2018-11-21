document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");




// set color picker
var color = 'white';

document.getElementById('black').addEventListener('click', () => {
    color = 'black';
    console.log(color);
})
document.getElementById('brown').addEventListener('click', () => {
    color = 'brown';
})
document.getElementById('red').addEventListener('click', () => {
    color = 'red';
})
document.getElementById('orange').addEventListener('click', () => {
    color = 'orange';
})
document.getElementById('yellow').addEventListener('click', () => {
    color = 'yellow';
})
document.getElementById('green').addEventListener('click', () => {
    color = 'green';
})
document.getElementById('blue').addEventListener('click', () => {
    color = 'blue';
})
document.getElementById('violet').addEventListener('click', () => {
    color = 'violet';
})
document.getElementById('grey').addEventListener('click', () => {
    color = 'grey';
})
document.getElementById('white').addEventListener('click', () => {
    color = 'white';
})

createCanvas();
})

// generate canvas 16x16

var canvas = document.getElementById('canvas');

function createCanvas() {
    for (var i = 0; i < 16; i++) {
        var row = document.createElement('div');
        row.classList.add('row');

     for (var j = 0; j < 16; j++) {
         var block = document.createElement('div');
         block.addEventListener('click', (event) => {
             event.target.classList.toggle(color)
         })
        row.appendChild(block);
        }

    canvas.appendChild(row);
    }
}

