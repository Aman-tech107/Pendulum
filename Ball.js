class Ball {
    constructor(x, y, width, height){
        var options = {
            'restiutution': 0.8,
            'friction': 0.5,
            'density': 1.0
        }
        this.body = Bodies.circle(x, y, width, height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        ellipse(pos.x, pos.y, this.width, this.height);
    }
}