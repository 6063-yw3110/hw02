let eyeWidth = 150;//variable
let faceWidth = 500;

function setup() {
 createCanvas(1920, 1080);//w,h
 background(250,0,145);//rgb color
}

function draw() {
ellipse(mouseX, mouseY, 100, 100);

ellipse(width/2,0,100,100);

fill("white");
rect(870, 580, 200, 300);

fill("black");
rect(960, 700, 10, 150);

fill("blue");
noStroke();
ellipse(1920/2, 530, faceWidth, faceWidth);//blue face


fill("orange");
ellipse(1400, 500, eyeWidth,eyeWidth);//x,y,w,h,eye right
ellipse(400, 500, eyeWidth, eyeWidth);//x,y,w,h,eye left

fill("black");
ellipse(1400, 500, eyeWidth/2,eyeWidth/2);//x,y,w,h,eye right
ellipse(400, 500, eyeWidth/2, eyeWidth/2);//x,y,w,h,eye left

}
