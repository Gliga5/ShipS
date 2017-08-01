function Star(x) {
    this.x = x;
    this.y = height - 150;
    this.r;
    
    this.update = function() {
        fill(255, 255, 255, 60);
        strokeWeight(1);
        stroke(255);
        ellipse(this.x, this.y, 50, 50)
    }
    this.display = function() {
        fill(255);
        rect(this.x, this.y, random(0, 15), random(0, 15));
    }
}