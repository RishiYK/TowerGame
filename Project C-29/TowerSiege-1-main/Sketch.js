const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder, ball, ground; 

var stand1, stand2; 

var sling; 

var BlockBlue1,BlockBlue2,BlockBlue3,BlockBlue4,BlockBlue5,BlockBlue6,BlockBlue7, BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;
var BlockRed1,BlockRed2,BlockRed3,BlockRed4,BlockRed5,BlockRed6,BlockRed7;
var polygon_img;

function preload(){ 
  polygon_img = loadImage("polygon.png")
}

function setup(){
    createCanvas(900, 400);
    engine = Engine.create();
    world = engine.world

    ground = new Ground(450,380,900,20);

    stand1 = new Stand(390, 300, 250, 10); 
    stand2 = new Stand(700, 200, 200, 10); 

     //first level
  BlockBlue1 = new Box(300, 275, 30, 40);

     
  BlockBlue2 = new Box(330, 275, 30, 40);

  BlockBlue3 = new Box(360, 275, 30, 40);

  BlockBlue4 = new Box(390, 275, 30, 40);

  BlockBlue5 = new Box(420, 275, 30, 40);

  BlockBlue6 = new Box(450, 275, 30, 40);

  BlockBlue7 = new Box(480, 275, 30, 40);

  //second level
  BlockBlue8 = new Box(330, 235, 30, 40); 

  BlockBlue9 = new Box(360, 235, 30, 40);
 
  BlockBlue10= new Box(390, 235, 30, 40);
 
  BlockBlue11= new Box(420, 235, 30, 40);
 
  BlockBlue12= new Box(450, 235, 30, 40);

     //third level
 
   BlockBlue13 = new Box(360, 195, 30, 40);
 
   BlockBlue14 = new Box(390, 195, 30, 40);
  
  BlockBlue15  = new Box(420, 195, 30, 40);

  BlockBlue16  = new Box(390, 155, 30, 40);

  

  BlockRed1 = new Box(640, 175, 30, 40);

     
  BlockRed2 = new Box(670, 175, 30, 40);

  BlockRed3 = new Box(700, 175, 30, 40);

  BlockRed4 = new Box(730, 175, 30, 40);

  BlockRed5 = new Box(760, 175, 30, 40);

  BlockRed6 = new Box(670, 135, 30, 40);

  BlockRed7 = new Box(700, 135, 30, 40);

  

  //second level
  BlockRed8 = new Box(730, 135, 30, 40); 

  BlockRed9 = new Box(700, 95, 30, 40);

  ball = Bodies.circle(50,200,20); 
  World.add(world,ball);

  sling = new Slingshot(this.ball, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw(){
    background(56,45,44);

    text("Drag Polygon to the tower",100,30);
    ground.display();

    stand1.display();
    stand2.display();

    BlockBlue1.display();

  BlockBlue2.display();

  BlockBlue3.display();

  BlockBlue4.display();

  BlockBlue5.display();

  BlockBlue6.display();

  BlockBlue7.display();

  BlockBlue8.display();

  BlockBlue9.display();

  BlockBlue10.display();

  BlockBlue11.display();

  BlockBlue12.display();

  BlockBlue13.display();

  BlockBlue14.display();
  
  BlockBlue15.display();

  BlockBlue16.display();


  BlockRed1.display();

  BlockRed2.display();

  BlockRed3.display();

  BlockRed4.display();

  BlockRed5.display();

  BlockRed6.display();

  BlockRed7.display();

  BlockRed8.display();

  BlockRed9.display();

  sling.display();

  imageMode(CENTER); 
  image(polygon_img, ball.position.x, ball.position.y, 40, 40)

}
function mouseDragged() {
    Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY })
  }
  
  function mouseReleased() {
    sling.fly();
  }