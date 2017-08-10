function Ship() {
    this.x = random(0, width);
    this.y = -500;
    this.r = 45;
    this.s = random(0, 15);
    this.speed = random(0, 3);
    this.timer = 0;
    this.a = 1;
    
    this.intersects = function(other) {
        var d = dist(this.x, this.y, other.x, other.y);
        
        if (d < this.r + other.r) {
            return true;
        }else {
            return false;
        }
    }
    
    this.display = function() {
        rectMode(CENTER);
        stroke(0);
        strokeWeight(3);
        fill(170);
        rect(this.x, this.y, 70, 23);
        rect(this.x, this.y, 25, 100);
        rect(this.x - 40, this.y, 20, 50);
        rect(this.x + 40, this.y, 20, 50);
    }
    this.update = function() {
        this.y += 1 + this.speed;
        this.timer += this.a
    }
}
