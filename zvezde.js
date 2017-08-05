function Zvezde() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(1, 5);
    
    this.display = function() {
        fill(235);
        noStroke();
        ellipse(this.x, this.y, this.r, this.r);
    }
}