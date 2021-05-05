class Throw{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.01,
            lenght : 10
        }
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);

    }
    fly(){
        this.throw.bodyA=null;
    }
    launch(bodyA){
    this.throw.bodyA=bodyA;
    }

    display(){
        
    }
}