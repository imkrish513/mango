const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var fakestone;

function preload()
{
sky = loadImage("sky.jpeg")
boyimage = loadImage("boy.png")
treeimage = loadImage("tree.png")
stoneimage = loadImage("stone.png")
mangoimage = loadImage("mango.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree = createSprite(windowWidth-400,windowHeight-300,100,100)
tree.addImage(treeimage)
tree.scale = 0.6
tree.depth = 6
ground = new Ground(windowWidth/2,windowHeight,windowWidth,50)
stone = new Stone(300,windowHeight-120,80,80)
stone.depth = 5
boy = createSprite(350,windowHeight-75,10,10)
boy.scale = 0.1
boy.addImage(boyimage)
rope = new SlingShot(stone.body,{x:300,y:windowHeight-120})
fakestone = createSprite(stone.body.position.x,stone.body.position.y,80,80)
fakestone.addImage(stoneimage)
fakestone.scale = 0.1
mango = new Mango(windowWidth-600,windowHeight-400,100,100)
mango1 = createSprite(mango.body.position.x,mango.body.position.y,50,50)
mango1.addImage(mangoimage)
mango1.scale = 0.1

mango2 = new Mango(windowWidth-500,windowHeight-500,100,100)
mango3 = createSprite(mango2.body.position.x,mango2.body.position.y,50,50)
mango3.addImage(mangoimage)
mango3.scale = 0.1

mango4 = new Mango(windowWidth-400,windowHeight-550,100,100)
mango5 = createSprite(mango4.body.position.x,mango4.body.position.y,50,50)
mango5.addImage(mangoimage)
mango5.scale = 0.1

mango6 = new Mango(windowWidth-300,windowHeight-400,100,100)
mango7 = createSprite(mango6.body.position.x,mango6.body.position.y,50,50)
mango7.addImage(mangoimage)
mango7.scale = 0.1

mango8 = new Mango(windowWidth-200,windowHeight-450,100,100)
mango9 = createSprite(mango8.body.position.x,mango8.body.position.y,50,50)
mango9.addImage(mangoimage)
mango9.scale = 0.1

Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
  background(sky);
  ground.display()
  stone.display()
  rope.display()
  fakestone.x = stone.body.position.x
  fakestone.y = stone.body.position.y
  mango1.x = mango.body.position.x
  mango1.y = mango.body.position.y
  mango3.x = mango2.body.position.x
  mango3.y = mango2.body.position.y
  mango5.x = mango4.body.position.x
  mango5.y = mango4.body.position.y
  mango7.x = mango6.body.position.x
  mango7.y = mango6.body.position.y
  mango9.x = mango8.body.position.x
  mango9.y = mango8.body.position.y
  drawSprites();
  detectCollision(stone,mango)
  detectCollision(stone,mango2)
	detectCollision(stone,mango4)
  detectCollision(stone,mango6)
  detectCollision(stone,mango8)

 
}



function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})



}

function mouseReleased(){
 rope.fly();
} 


function detectCollision(stone,mango){
mangopos = mango.body.position
stonepos = stone.body.position 

var distance = dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y)

if(distance <= mango.width+stone.width){
  Matter.Body.setStatic(mango.body,false)
}
}


function keyPressed(){
  if(keyCode === 32){
Matter.Body.setPosition(stone.body,{x:300,y:windowHeight-120})
rope.attach(stone.body)

  }
}