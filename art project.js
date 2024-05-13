triangleColors = ['#f7b267', '#f79d65', '#f4845f', '#f27059', '#f25c54']
triangles = []

function triangleMeshold(){
  push();
  strokeWeight(2);
  stroke(255);
  
  for (let i = 0; i < triangleColors.length; i++){
    fill(triangleColors[i]);
    beginShape(TRIANGLES);
    for (let k = 0; k < 6; k++){
      vertex(triangles[i][k-1][1])
      vertex(triangles[i][k][0]);
      vertex(triangles[i][k][1]);
    }
    endShape();
  }
  
  pop();
}

function triangleMesh(){
  push();
  strokeWeight(2);
  stroke(255);
  
  let x = 0;
  let y = 0;
  let range = 50;
  
  while (y < height+range){
    while (x < width){
      triangles.push([x,y]);
      x += random(80,130);
      y += random(-100,100);
    }
    triangles.push([width,y])
    x = 0
    y += random(0,50);
  }  
  pop();
}


function setup() {
  createCanvas(500, 500);
  
  colorMode(HSB)
  
  background('#070012');
  
  stroke(255);
  strokeWeight(4);
  fill(triangleColors[0]);
  triangle(0,0, 200,0, 150,50);
  fill(triangleColors[1]);
  triangle(150,50, 0,0, 0,100);
  fill(triangleColors[2]);
  triangle(0,100, 150,50, 200,220);
  fill(triangleColors[3]);
  triangle(200,220, 150,50, 320,140)
  fill(triangleColors[4]);
  triangle(320,140, 150,50, 200,0);
  fill(triangleColors[0]);
  triangle(350,0, 500,0, 320,140);
  fill(triangleColors[1]);
  triangle(320,140, 350,0, 200,0);
  fill(triangleColors[2]);
  triangle(500,0, 450,200, 320,140);
  fill(triangleColors[3]);
  triangle(450,200, 320,140, 200,220);
  fill(triangleColors[4]);
  triangle(450,200, 500,0, 500,260);
  fill(triangleColors[0]);
  triangle(500,260, 450,200, 390,340);
  fill(triangleColors[1]);
  triangle(390,340, 450,200, 200,220);
  fill(triangleColors[2]);
  triangle(0,100, 90,210, 200,220);
  fill(triangleColors[3]);
  triangle(90,210, 200,220, 150,300);
  fill(triangleColors[4]);
  triangle(150,300, 200,220, 390,340);
  fill(triangleColors[0]);
  triangle(0,100, 90,210, 40,310);
  fill(triangleColors[1]);
  triangle(0,100, 40,310, 0,320);
  fill(triangleColors[2]);
  triangle(0,320, 40,310, 60,370);
  fill(triangleColors[3]);
  triangle(90,210, 40,310, 150,300);
  fill(triangleColors[4]);
  triangle(60,370, 0,320, 0,440);
  fill(triangleColors[0]);
  triangle(0,500, 120,430, 0,440);
  fill(triangleColors[1]);
  triangle(120,430, 0,500, 180,500);
  fill(triangleColors[2]);
  triangle(0,440, 60,370, 120,430);
  fill(triangleColors[3]);
  triangle(60,370, 40,310, 150,300);
  fill(triangleColors[4]);
  triangle(150,300, 60,370, 120,430);
  fill(triangleColors[0]);
  triangle(150,300, 120,430, 390,340);
  fill(triangleColors[1]);
  triangle(120,430, 360,500, 390,340);
  fill(triangleColors[2]);
  triangle(360,500, 120,430, 180, 500);
  fill(triangleColors[3]);
  triangle(360,500, 500,500, 390,340);
  fill(triangleColors[4]);
  triangle(500,500, 390,340, 500,400);
  fill(triangleColors[0]);
  triangle(500,400, 390,340, 500,260);
  
  stroke('#070012');
  strokeWeight(5);
  noFill()
  circle(width/2, height/2, 400);
  
  
  noStroke();
  fill('#ffff00');
  circle(width/2, height/2, 100);
  
  fill('blue');
  circle(width/2, (height/2)+200, 50);
  
}
