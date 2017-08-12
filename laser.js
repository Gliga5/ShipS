function Laser(others) {
    this.x = others.x;
    this.y = others.y + 40;
    this.r = 5;
    this.a = 1;
    this.speed = 1 + others.speed;
    this.timer = 0;
    
    this.intersects = function(other) {
        var d = dist(this.x, this.y, other.x, other.y);
        
        if (d < this.r + other.r2) {
            return true;
        }else {
            return false;
        }
    }
    
    this.display = function() {
        rectMode(CENTER);
        noStroke();
        fill(255, 0, 0);
        rect(this.x, this.y, this.r * 2, this.r * 2);
        stroke(0);
    }
    this.update = function() {
        this.y += this.speed;
        this.timer += this.a;
        if (this.timer > 200) {
            this.timer = 0;
            this.speed = 7;
        }
    }
}
