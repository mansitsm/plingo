const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;

var gameState = "onSling";
var score=0;
function preload() {
   
    
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(240,20,480,20);
    ball=new Ball(20,20,20,20);

    

    //log6 = new Log(230,180,80, PI/2);
   
}

function draw(){
    
    noStroke();
    textSize(35);
    fill(255);
    text("score: "+score,width-300,50);
    
    Engine.update(engine);
    //strokeWeight(4);
   ground.display();
   ball.display();   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}
