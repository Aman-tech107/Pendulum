const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stand, ball, slingshot;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create(); 
  world = engine.world;

  stand = new Stand(200,50,200,20);
  ball = new Ball(200,200,50,50);
  slingshot = new SlingShot(ball.body , {x: 200, y: 50});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  stand.display();
  ball.display();

  slingshot.display();
  fill("Blue");
  textSize(25);
  if(keyCode === 32){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
  }
  
  drawSprites();
}
