class paper {
  constructor(x,y,radius )
  {
      var options= {
          
          restitution:0.3,
          friction:0.5,
          density:1.2

      }
      this. image= loadImage("Sprites/paper.png")
      this.body= Bodies.circle(x,y,radius/1.2,options);
       this.radius= radius;
       World.add(world,this.body);
  
  }
  
     
    display()
    {
        push();
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER);
        fill("green");
        image(this.image,0,0, this.radius);
        pop();
    }
  }
  