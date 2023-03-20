let r = 255
let g = 255;
let b = 255;
document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
setInterval(function() {
b -= 1;
g -= 1;
document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}, 25);