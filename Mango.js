class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:1,
            friction:0
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("mango.png")
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}