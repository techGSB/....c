class Hero {
    constructor(x,y,r) {
        var options = {
            density:1,
            frictionAir:1
        }
       
      
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Superhero-01.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke("black");
        ellipse(0,0,width,height);
        pop()
    }
}