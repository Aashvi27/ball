
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var options={
	isStatic:fals,
	restitution:0.3,
	friction:0.3,
	dencity:1.2
}
function keyPressed() {


	if(keyCode === Up_Arrow){

		Matter.Body.applyForce (PaperObject.body,PaperObject.body,PaperObject.position,{x:85,y:-85});
	}
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



