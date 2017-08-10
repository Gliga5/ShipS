function Star(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25;
    this.r2 = 15;
    this.timer = 0;
    
    this.display = function() {
        this.timer += 1;
        fill(255, 255, 255, 60);
        strokeWeight(0.5);
        stroke(0);
        ellipse(this.x, this.y, this.r * 2, this.r * 2)
        fill(255);
        rect(this.x, this.y, random(0, 15), random(0, 15));
    }
}
