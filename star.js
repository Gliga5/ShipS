function Star(x, y) {
    this.x = width/2;
    this.y = width/2 - 50;
    this.r = 25;
    this.timer = 0;
    
    this.display = function() {
        this.timer += 1;
        fill(255, 255, 255, 60);
        strokeWeight(1);
        stroke(255);
        ellipse(this.x, this.y, this.r * 2, this.r * 2)
        fill(255);
        rect(this.x, this.y, random(0, 15), random(0, 15));
        
        if (this.timer = 1000) {
            this.x = x;
            this.y = y;
        }
    }
}
