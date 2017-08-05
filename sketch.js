var ships = [];
var stars = [];
var zvezde = [];
var timer = 0;
var timer2 = 0;
var a = 1;
var indexship;
var indexstar = 9;
var wave;
var readysetgo;
var canvas;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight - 3.501);
    for (var i = 0; i < 7; i++) {
        ships[i] = new Ship();
    }
    for (var i = 0; i < 10; i++) {
        stars[i] = new Star();
    }
    for (var i = 0; i < 100; i++) {
        zvezde[i] = new Zvezde();
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
    background(35);
    for (var i = 0; i < zvezde.length; i++) {
        zvezde[i].display();
    }
    if (indexstar <= 0) {
        indexstar = 9;
    } else {
        indexstar -= 1;
    }
    timer += 1;
    for (var i = 0; i < ships.length; i++) {
        if (timer > 100) {
            timer = 0;
            for (var knez = 0; knez < 7; knez++) {
                ships.push(new Ship());
            }
        }
        ships[i].display();
        ships[i].update();    
        if (ships[i].timer > 1400) {
            ships.splice(0, 7);
            ships[i].timer = 0;
        }
        if (ships[i].intersects(stars[indexstar])) {
            textSize(100);
            fill(255, 0, 0);
            strokeWeight(5);
            text("GAME OVER", width/2 - 325, height/2 + 10);
            fill(255);
            textSize(45);
            text("SCORE: " + wave.number, width/2 - 125, height/2 + 75)
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
    
    var r = 255;
    var g = 145;
    var b = 0;
    timer2 += a;
    
    
    if (timer2 > 100 && timer2 < 150) {
        textSize(100);
        stroke(0);
        strokeWeight(5);
        fill(0, 255, 0);
        text("GO", width/2 - 95, height/2 + 10);
    }
    
    if (timer2 > 50 && timer2 < 100) {
        textSize(100);
        stroke(0);
        strokeWeight(5);
        fill(255, 255, 0);
        text("SET", width/2 - 115, height/2 + 10);
    }
    
    if (timer2 > 0 && timer2 < 50) {
        textSize(100);
        stroke(0);
        strokeWeight(5);
        fill(255, 145, 0);
        text("READY", width/2 - 190, height/2 + 10);
    }
}
