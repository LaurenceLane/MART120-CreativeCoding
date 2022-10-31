function setup(){
    createCanvas(500, 600);
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
rect(280, 250, 50, [100]);
rect(140, 250, 50, [100]);

// mouth

noFill();
stroke(2)
strokeWeight(5.0);
strokeJoin(ROUND);
beginShape();
vertex(155, 375);
vertex(225, 410);
vertex(300, 375);
endShape();

//hair
strokeWeight(5.0);
fill(120,50,50);
quad(60, 250, 100, 350, 120, 270, 150, 190)
quad(100, 170, 100, 250, 150, 150, 320, 150)
quad(100, 250, 150, 145, 260, 150, 240, 200)
quad(380, 180, 260, 150, 360, 370, 420, 300)
quad(210, 150, 250, 210, 410, 250, 310, 140)
quad(230, 180, 280, 280, 410, 250, 310, 240)

//glasses
noFill()
circle(305, 303, 120)
circle(165, 303, 120)
line(245, 300, 225, 300)
 
//nose 
line(225, 360, 230, 365)


 }
