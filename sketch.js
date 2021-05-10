const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var flakes=[];
function preload(){
  bg=loadImage("snow3.jpg");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 engine = Engine.create();
  world = engine.world;

  if (frameCount%101 == 0){
    for ( var i=0; i<100;i++){
    flakes.push(new Snow(random(0,700),random(0,400)))
      
 
    }
 }   

}

function draw() {


  background(bg);  

  Engine.update(engine);
  for ( var i=0; i<100;i++){
    flakes[i].display()
 flakes[i].update()
 }
  drawSprites();
}