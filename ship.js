function Ship() {
    this.x = random(0, width);
    this.y = 0;
    this.s = random(0, 15);
    this.speed = random(0, 5);
    this.timer = 0;
    
    this.display = function() {
        rectMode(CENTER);
        stroke(0);
        strokeWeight(3);
        fill(170);
        rect(this.x, this.y, 50 + this.s, 25 - this.s);
        rect(this.x, this.y, 25 - this.s, 100 - this.s);
        rect(this.x - 30, this.y, 20 - this.s, 50 - this.s);
        rect(this.x + 30, this.y, 20 - this.s, 50 - this.s);
    }
    this.update = function() {
        this.y += 1 + this.speed;
    }
}