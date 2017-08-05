function Wave() {
    this.x = 0;
    this.y = 20;
    this.number = 1;
    this.timer = 0;
    
    this.display = function() {
        textSize(24)
        strokeWeight(5);
        stroke(0);
        fill(255);
        text("Score: " + this.number, this.x, this.y)
    }
    this.update = function() {
        this.timer += 1;
        if (this.timer == 100) {
            this.timer = 0;
            this.number += 2;
        }
    }
}
