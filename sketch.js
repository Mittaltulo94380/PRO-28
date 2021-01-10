
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree,boy,stone;
var mango1,mango2,mango3,mango4,mango5,mango6;
var mango7,mango8,mango9,mango10,mango11,mango12;
var launcher1;

function preload(){
	tree = loadImage("tree.png")
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,690,1500,20);
	stone = new Stone(350,430,30)

	mango1 = new Mango(930,190,40)
	mango2 = new Mango(1000,300,40)
	mango3 = new Mango(900,340,40)
	mango4 = new Mango(1040,140,40)
	mango5 = new Mango(970,100,40)
	mango6 = new Mango(1118,230,40)
	mango7 = new Mango(1230,270,40)
	mango8 = new Mango(850,270,40)
	mango9 = new Mango(1090,290,40)
	mango10 = new Mango(1010,230,40)
	mango11 = new Mango(1200,320,40)
	mango12 = new Mango(1100,150,40)
	launcher1 = new Launcher(stone.body,{x:235,y:430});
	
	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background(230);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);

  image(boy ,200,440,200,300);
  image(tree,700,0,600,800);

  ground.display();
  stone.display();
  launcher1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);

  
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    launcher1.fly()
}
function keyPressed(){
	if(keyCode === 32){
		Matter.body.setPosition(stone.body,{x:235,y:420});
        launcher1.attach(stone.body)
	}
}
function detectCollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r){
		Matter.body.setStatic(Lmango.body,false)
	}
}

