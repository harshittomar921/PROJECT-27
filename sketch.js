
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roof1;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  roof1 = new roof(350,100,300,30);
  World.add(world,roof1)

    bob1=new bob(250,300);
    bob2=new bob(300,300);
    bob3=new bob(350,300);
    bob4=new bob(400,300);
    bob5=new bob(450,300);
    rope1=new rope(bob1.body,roof1.body,-100,0);
    World.add(world,rope1)
    rope2=new rope(bob2.body,roof1.body,-50,0);
    World.add(world,rope2)
    rope3=new rope(bob3.body,roof1.body,0,0);
    World.add(world,rope3)
    rope4=new rope(bob4.body,roof1.body,+50,0);
    World.add(world,rope4)
    rope5=new rope(bob5.body,roof1.body,+100,0);
    World.add(world,rope5)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white")
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed()
{
if (keyCode===32){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0});
}
}

