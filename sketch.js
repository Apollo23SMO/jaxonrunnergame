var runner
var ground

function preload(){
  //pre-load images
runner=loadAnimation("Runner-1.png","Runner-2.png")
ground=loadImage("path.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here

Ground1=createSprite(200,200,400,400)
Ground1.addImage(ground)

Runner=createSprite(200,300)
Runner.addAnimation("running",runner)

//scale runner
Runner.scale=0.1

}

function draw() {
  background(0);

  edges= createEdgeSprites();

//move runner when mouse moved
Runner.x=World.mouseX;

  //make ground move
Ground1.velocityY=-10
console.log(Ground1.y)

  //reset ground
if (Ground1.y<0){
  Ground1.y=Ground1.height/2;
}

Runner.collide(edges);

  drawSprites();
}
