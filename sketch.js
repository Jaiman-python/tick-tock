var hr, min, sec, hrAngle, minAngle, secAngle;


function setup() {
  createCanvas(1200,1000);
  
  


  angleMode(DEGREES);

}

function draw() {
  background("black");  

  translate(600,400);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  hrAngle = map(hr%12,0,12,0,360);
  minAngle = map(min,0,60,0,360);
  secAngle = map(sec,0,60,0,360);

  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,400,0);
  pop();
  
  push();
  rotate(minAngle);
  stroke("darkblue");
  strokeWeight(7);
  line(0,0,250,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("darkgreen");
  strokeWeight(7);
  line(0,0,170,0);
  pop();
  
  strokeWeight(3);
  noFill();

  stroke("white");
  arc(0,0,800,800,20,secAngle);

  stroke("blue");
  arc(0,0,500,500,20,minAngle);
  
  stroke("green");
  arc(0,0,350,350,20,hrAngle);

  strokeWeight(10);
  stroke("white");
  point(0,0);

  drawSprites();
}