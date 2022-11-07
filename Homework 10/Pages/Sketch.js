var ReyeX = 280;
var ReyeDirection = .5;

var LeyeX = 140;
var LeyeDirection = .5;

var LframeX = 100;
var LframeY= 350;
var LframeDirectionX = 1;
var LframeDirectionY = 1;

var RframeX = 360;
var RframeY= 370;
var RframeDirectionX = 1;
var RframeDirectionY = 1;

var size = 22;
var count = 0;
var sizeDirection = 2;

var RmouthY = 375;
var RmouthDirection = .5;

var LmouthY = 375;
var LmouthDirection = .5;

var movement;



function setup(){
    createCanvas(500, 600);
    movement = floor(random() * 10) + 1;
 }
 function draw(){  
 console.log("draw?");
    background(120,45,130); 
    fill(0);
    strokeWeight(1)
    textSize(20);
    text("Laurence", 20, 20);
    strokeWeight(2);
    fill(200,150,150);
    ellipse(230, 375, 300, [150]);
    ellipse(240, 300, 300, [300]);
    noStroke();
    ellipse(245, 295, 290, [290]);
    ellipse(237, 355, 280, [190]);
    
    
// Eyes
 fill(0);
rect(ReyeX, 250, 50, [100]);
ReyeX+=ReyeDirection;
rect(LeyeX, 250, 50, [100]);
LeyeX+=LeyeDirection;
if(ReyeX >= 290 || ReyeX <= 270)
    {
        ReyeDirection *=-1;
    }
 if(LeyeX >= 150 || LeyeX <= 130)
    {
        LeyeDirection *=-1;
    }

// mouth

noFill();
stroke(2)
strokeWeight(5.0);
strokeJoin(ROUND);
beginShape();
vertex(155, LmouthY);
LmouthY+=LmouthDirection;
vertex(225, 410);
vertex(300, RmouthY);
RmouthY+=RmouthDirection;
if(RmouthY >= 390 || RmouthY <= 360)
    {
        RmouthDirection *=-1;
    }
 if(LmouthY >= 390 || LmouthY <= 360)
    {
        LmouthDirection *=-1;
    }

endShape();

//hair
strokeWeight(5.0);
fill(120,50,50);
quad(60, 250, LframeX, LframeY, 120, 270, 150, 190)
quad(100, 170, 100, 250, 150, 150, 320, 150)
quad(100, 250, 150, 145, 260, 150, 240, 200)
quad(380, 180, 260, 150, RframeX, RframeY, 420, 300)
quad(210, 150, 250, 210, 410, 250, 310, 140)
quad(230, 180, 280, 280, 410, 250, 310, 240)
RframeX=RframeX + RframeDirectionX;
RframeY=RframeY + RframeDirectionY;
if(RframeX <= 350 || RframeY <= 360) 
    {
        RframeDirectionX *=-1;
        RframeDirectionY *=-1;
    }
 if (RframeX >= 370 || RframeY >= 380)
    {
        RframeDirectionX *=-1;
        RframeDirectionY *=-1;
    }
   
LframeY=LframeY + LframeDirectionY;
LframeX=LframeX + LframeDirectionX;
if(LframeX <= 90 || LframeY <= 340) 
    {
        LframeDirectionX *=-1;
        LframeDirectionY *=-1;
    }
 if (LframeX >= 110 || LframeY >= 360)
    {
        LframeDirectionX *=-1;
        LframeDirectionY *=-1;
    }
//glasses
noFill()
circle(305, 303, 120)
circle(165, 303, 120)
line(245, 300, 225, 300)
 
//nose 
line(225, 360, 230, 365)


fill(0);
textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    if(count < 0)
    {
        sizeDirection *=-1;
        count = 5;
    }
    text("H o w d y", 20,550);
 }
