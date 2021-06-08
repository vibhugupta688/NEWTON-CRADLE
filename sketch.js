const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5,sling1,sling2,sling3,sling4,sling5;
var bg1Image;
function preload(){
bg1Image = loadImage("bg.png");}


function setup(){
  createCanvas(850,550);

  engine = Engine.create();
  world = engine.world;

  bob1 = new Pendulum(180,300,"crimson")
  bob2 = new Pendulum(240,300,"yellowgreen")
  bob3 = new Pendulum(300,300,"yellow")
  bob4 = new Pendulum(360,300,"turquoise")
  bob5 = new Pendulum(420,300,"darkorchid")
  sling1 = new Sling(bob1.body,{x:180,y:50})
  sling2 = new Sling(bob2.body,{x:240,y:50})
  sling3 = new Sling(bob3.body,{x:300,y:50})
  sling4 = new Sling(bob4.body,{x:360,y:50})
  sling5 = new Sling(bob5.body,{x:420,y:50})
  
  Engine.run(engine)
}

function draw(){
  background(bg1Image)

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  fill("white");
  textSize(30);
   textFont("impact regular");

 text("Newton's Cradle",20,400);
 fill("white");
 textSize(25)
 textFont("bernard MT Condensed")
 text("(Press the ⬅️ left arrow key to experiment the law; ",50,450);
 text("Conservation of Energy by Newton)",100,480);  
 textSize(35);
 textFont("mistral regular");
 text("- VibhuG",400,530);

  Engine.update(engine)
}



function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Matter.Body.setPosition(bob1.body,{x:90,y:90})
  
   }
 }