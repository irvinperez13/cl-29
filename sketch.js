const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balas = [];



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
//crear un objeto para la bala de cañón
//bala = new CannonBall(cannon.x,cannon.y);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);
  
  for(var i = 0; i<balas.length; i++){
  showcannonball(balas[i],i)
  }

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
//mostrar la bala de cañón
//bala.display();
}
function showcannonball(balls,index){
  balls.display();
}
function keyPressed(){
  if(keyCode === DOWN_ARROW){
 bala = new CannonBall(cannon.x,cannon.y);
    balas.push(bala);
  }
}




function keyReleased() {
 //utilizar  keydown para llamar a la función shoot
 if (keyCode===DOWN_ARROW){
  balas[balas.length -1].shoot();
 }
}
