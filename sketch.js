
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//const Render = Matter.Render;

var world,engine;

function setup() {
	createCanvas(400, 400); 
	var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

	log = Bodies.rectangle(200,100,50,20,{isStatic: true}); 
	World.add(world,log);

	ball = Bodies.circle(200,200,50);
	World.add(world,ball);

	chain = new Chain(ball,log);
}


function draw() {
	background("lightskyblue");

	text("Press Space and control with the mouse to set the pendulum",50,50);
	text("Click any other button to release the pendulum for it to freely oscillate",20,80);

	Engine.update(engine);
	rectMode(CENTER);
	fill("saddlebrown");
	rect(log.position.x,log.position.y,150,20);

	ellipseMode(RADIUS);
	fill("springgreen");
	
	ellipse(ball.position.x,ball.position.y,50);

	chain.display();

	if(keyCode === 32)
{
	ball.position.x = mouseX;
	ball.position.y = mouseY;
		
}




}



