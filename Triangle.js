class Triangle {
    constructor(x, y) {
        this.body = Bodies.rectangle(x, y, 10, 10);
        World.add(world, this.body);
    }
    display() {
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0, 0, 6, 6);
        pop();
    }
}