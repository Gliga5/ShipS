var ships = [];
var stars = [];
var timer = 0;
var indexship;
var indexstar = 0;
var wave;
var canvas;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight - 3.501);
    for (i = 0; i < 10; i++) {
        ships[i] = new Ship();
    }
    for (i = 0; i < 10; i++) {
        stars[i] = new Star();
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
    if (indexstar => 10) {
        indexstar = 0;
    } else {
        indexstar += 1;
    }
    timer += 1;
    for (var i = 0; i < ships.length; i++) {
        if (timer > 100) {
            timer = 0;
            for (var knez = 0; knez < 10; knez++) {
                ships.push(new Ship());
            }
        }
        ships[i].display();
        ships[i].update();
        if (ships[i].timer > 1400) {
            ships.splice(0, 10);
            ships[i].timer = 0;
        }
        if (ships[i].intersects(stars[indexstar])) {
            textSize(100);
            fill(255, 0, 0);
            text("GAME OVER", width/2 - 325, height/2 + 10);
            ships[i].upd();
        }
    } 
    
    
    
    stars.push(new Star(mouseX, mouseY))
    for (var i = 0; i < stars.length; i++) {
        stars[i].display();
    }
    if (stars.length > 10) {
        stars.splice(0,1);
    }
    
    wave.display();
    wave.update();
}
