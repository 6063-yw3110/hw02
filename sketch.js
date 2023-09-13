function setup() {
 createCanvas(1920, 1080);//w,h
 background(250,0,145);//rgb color
}

function draw() {
noStroke();
ellipse(1920/2, 1080/2, 55, 55,);//x,y,w,h
fill("orange");
ellipse(20, 1080/2, 200,200);//x,y,w,h
fill(20,190,30);
stroke(12,220,220);
strokeWeight(4);
rect(1920, 1080/2, 320, 400);//topleft,
}
