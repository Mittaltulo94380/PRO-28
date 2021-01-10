class Launcher{
    constructor(body,pointB){
        var options={
            bodyA:body,
            pointB:pointB,
            stiffness:0.004,
            length:1
        }
        this.bodyA=body
        this.pointB=pointB
        this.launcher=Constraint.create(options)
        World.add(world,this.launcher)
    }
    attach(){
        this.launcher.bodyA=body;
    }
    fly(){
        this.launcher.bodyA=null;
    }
    display(){
        if(this.launcher.bodyA){
            var pointA=this.bodyA.position
            var pointB=this.pointB
            strokeWeight(3)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}