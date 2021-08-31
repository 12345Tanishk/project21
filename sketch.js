var astronaut;
var bcg;
function preload() {
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(400, 400);
  bcg = createSprite(200,200,2,2);
  bcg.addImage("bcgimage",bg);
}

function draw() {
  background(220);
}