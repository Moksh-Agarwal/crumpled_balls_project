const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var ball;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,395,1200,20);
    box1 = new Box(1000,300,150,190);
    
    ball= new paper(100,300,70);
}

function draw(){
    background("white");
    fill("green");
    
    Engine.update(engine);
   
    ground.display();
    
    box1.display();
    
    ball.display();
}
function keyPressed()
{
    if(keyCode=== UP_ARROW )
    {
    Matter.Body.applyForce(ball.body, ball.body.pos,{x:800, y:-620.83})
    }
}