function Star(x) {
    this.x = x;
    this.y = height - 150;
    this.r = 25;
    
    this.display = function() {
        fill(255, 255, 255, 60);
        strokeWeight(1);
        stroke(255);
        ellipse(this.x, this.y, this.r * 2, this.r * 2)
        fill(255);
        rect(this.x, this.y, random(0, 15), random(0, 15));
    }
}