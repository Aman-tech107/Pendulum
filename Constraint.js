class SlingShot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stifness: 0.7,
            lenght: 200
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;

            var pointB = this.pointB;
            push();
            strokeWeight(10);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
}