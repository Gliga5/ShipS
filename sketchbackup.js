/*
-SPLICE OBAVEZAN!
*/
var ships = [];
var stars = [];
var timer = 0;
var wave;
var x = 0;
var canvas;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight - 3.501);
    for (var i = 0; i < 10000; i++) {
        ships[i] = new Ship();
    }
    for (var j = 0; j < 10; j++) {
        stars[j] = new Star();
    }
    wave = new Wave();
}
window.onresize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;  
    canvas.size(w,h);
    width = w;
    height = h;
}
function draw() {
    background(0);
    stars.push(new Star(mouseX))
    for (var j = 0; j < stars.length; j++) {
        stars[j].display();
    }
    timer += 1;
    for (var i = 0; i < 10 + x; i++) {
        if (timer > 100) {
            timer = 0;
            x += 10;
        }
        ships[i].display();
        ships[i].update();
        if (ships[i].timer > 100) {
            ships.splice(0, 10);
            ships[i].timer = 0;
        }
    }  
    
    for (var k = 0; k < stars.length; k++) {
        stars[k].update();
    }
    if (stars.length > 3) {
        stars.splice(0,1);
    }
    wave.display();
    wave.update();
}