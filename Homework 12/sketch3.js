//ship
var shipX = 100;
var shipY = 100;
//keys
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
//astroid
var astroidX = 0;
var astroidY = 10;
var astroidXSpeed;
var astroidYSpeed;
var astroidsize

// Might come back to this >
//var startside
 //   startside = Math.floor(Math.random() * 2);
    //if(startside = 1)
    //{
    //   astroidX = width;   
    //} else{
    //astroidX = 400;
    //   }


var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(400, 600);
    astroidXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    astroidYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createship(200,500);
    fill (112,112,112);
    astroidsize = 40;
}

function createship(x,y)
{
    shipX = x;
    shipY = y;
    
}

function drawship()
{
    fill(204,204,204);
    circle(shipX,shipY,25);
}
function shipMovement()
{
    if(keyIsDown(w))
    {
        shipY -= 10;   
    }
    if(keyIsDown(s))
    {
        shipY += 10;   
    }
    if(keyIsDown(a))
    {
        shipX -= 10;   
        console.log("movement: " + shipX);
    }
    if(keyIsDown(d))
    {
        shipX += 10;   
    }
}
function createBorders(thickness)
{
 //top
    rect(0,0,width-240,thickness);
    rect(240,0,width-160,thickness);
 //right
    rect(width-thickness,0,thickness,height);
 //bottom
    rect(0, height-thickness,width, thickness);
 //left
    rect(0,0,thickness,height);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
function draw()
{
    background(0);
    stroke(250,250,250);;
    fill (250,250,250);
    
   
    fill (250,250,250);
    textSize(15);
    text("EXIT", width-220,height-550)
     createBorders(10);
    stroke(0)
    drawship();
    shipMovement()
    fill (128,102,89);
    
    //astroid 
    circle(astroidX, astroidY, astroidsize);
    
     astroidXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     astroidYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    astroidX += astroidXSpeed;
    astroidY += astroidYSpeed;

    if(astroidX > width)
    {
       
           astroidX = 0;   
        astroidsize = Math.floor(random() * (60 - 10)) + 10;
    }
    if(astroidX < 0)
    { 
        astroidX = 0
        astroidsize = Math.floor(random() * (60 - 10)) + 10;
        }
       

    if(astroidY > height)
    {
        astroidY = Math.floor(random() * (400 - 0)) + 0;
        astroidsize = Math.floor(random() * (60 - 10)) + 10;
    }
    if(astroidY < 0)
    {
        astroidY = Math.floor(random() * (400 - 0)) + 0;
        astroidsize = Math.floor(random() * (60 - 10)) + 10;
    }

// Win Condition
    if(240 > shipX && shipX>160 && shipY < 0)
    {
        fill(250,250,250);
        stroke(5);
        textSize(26);
        text("You Win!", width-250, height-300);
    }
    fill (128,102,89);
    circle(mouseShapeX, mouseShapeY, 25);
}