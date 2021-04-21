var sc ,scangle ,mn ,mnangle, hr,hrangle
function setup() {

  createCanvas(800,400);
  angleMode(DEGREES)

}

function draw() {
  background(255,255,255); 
  translate(400,200);
  rotate(-90);
  sc = second();
  mn = minute();
  hr = hour();
  scangle = map(sc,0,60,0,360);
  mnangle = map(mn,0,60,0,360);
  hrangle = map(hr,0,60,0,360);

push();
rotate(scangle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
noFill();
stroke(255,0,0);
strokeWeight(3);
arc(0,0,300,300,0,scangle);


push();
rotate(mnangle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,120,0);
pop();
noFill();
stroke(0,255,0);
strokeWeight(3);
arc(0,0,350,350,0,mnangle);

push();
rotate(hrangle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,140,0);
pop();
noFill();
stroke(0,0,255);
strokeWeight(3);
arc(0,0,400,400,0,hrangle);

  }
  