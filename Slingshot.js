class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png") 
        this.sling3=loadImage("sprites/sling3.png")
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body
    }


    display(){
       image(this.sling1,200,20);
       image(this.sling2,170,20);


        if(this.sling.bodyA){
          if(this.sling.bodyA.position.x<220){
           strokeWeight(7);
          stroke(59,27,10);
          line(this.sling.bodyA.position.x-20, this.sling.bodyA.position.y,
                this.pointB.x-20, this.pointB.y);
         line(this.sling.bodyA.position.x-20, this.sling.bodyA.position.y,
                    this.pointB.x+20, this.pointB.y);
         image(this.sling3,this.sling.bodyA.position.x-30, this.sling.bodyA.position.y-10,15,30)
         }else{
            strokeWeight(3);
            stroke(59,27,10);
            line(this.sling.bodyA.position.x+20, this.sling.bodyA.position.y,
                  this.pointB.x-20, this.pointB.y);
           line(this.sling.bodyA.position.x+20, this.sling.bodyA.position.y,
                      this.pointB.x+20, this.pointB.y); 
   image(this.sling3,this.sling.bodyA.position.x+20, this.sling.bodyA.position.y-10,15,30)
         }
        }
    }
    
}