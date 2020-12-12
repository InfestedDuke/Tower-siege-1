const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var ground1,ground2;
var box1,box2,box3,box4,box5,box6;
var slingshot;
var polygonpng;
var polygon;
function preload(){
  polygonpng = loadImage("polygon.png");

}

function setup() {
  var canvas = createCanvas(1200,800);
 
  engine = Engine.create();
    world = engine.world;
  ground =new Ground(600,790,1200,10);
  ground1 =new Ground(600,400,200,10);
  ground2 =new Ground(850,200,200,10);
  box1 = new Box(600,350,50,50);
  box2 = new Box(550,350,50,50);
  box3 = new Box(650,350,50,50);
  box4 = new Box(625,300,50,50);
  box5 = new Box(575,300,50,50);
  box6 = new Box(600,250,50,50);
  var options = {
    density:0.8

  }


  polygon = Bodies.circle(50,200,20,options);
  World.add(world,polygon);
  slingshot = new SlingShot(this.polygon,{x:250,y:200});




  
}

function draw() {
  background("red")
  Engine.update(engine);
  ground.display();
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  slingshot.display();
  imageMode(CENTER);
  image(polygonpng,polygon.position.x,polygon.position.y,40,40);
  
  


} 
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon);
  }
}
