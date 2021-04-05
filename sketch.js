const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var g1;

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(50,30,30,30);
    box2 = new box(100,32,30,30);
    box3 = new box(150,20,50,50);
    g1 = new ground(100,height,300,20);


}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    
    g1.display();
   
}