function setup() {
  createCanvas(720, 400, WEBGL);
  angleMode(DEGREES)
  frameRate(60);
}

function draw() {
  background(255);
  const t = millis()/1000; // Conta o tempo decorrido em segundos
  
  camera(-250,-150,250, 0,0,50 ,0,0,-1)
  
  push() //1
  
  /* 1 */ applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, 100,500,0,1) //translate(100,500,0)
  stroke('blue')
  cylinder(1,1000); //eixo y
  pop() //1
  
  push() //2
  /* 2 */ applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, 100,0,500,1) //translate(100,500,0)
  /* 3 */ applyMatrix(1,0,0,0, 0,cos(90),sin(90),0, 0,-sin(90),cos(90),0, 0,0,0,1)
  stroke('red');
  cylinder(1,1000); //eixo z
  pop() //2
  
  push() //3
  /* 4 */ applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, -400,0,0,1) //translate(-400,0,0)
  /* 5 */ applyMatrix(cos(90),sin(90),0,0, -sin(90),cos(90),0,0, 0,0,1,0, 0,0,0,1)
  stroke('green');
  cylinder(1,1000); //eixo x
  pop() //3
  
  /* 8 */ noFill();
  
  push() //4
  
  /* 9 */ strokeWeight(5)
  
  /* 7 */ applyMatrix(1,0,0,0, 0,cos(60),sin(60),0, 0,-sin(60),cos(60),0, 0,0,0,1)
  
  push() //5
  /* 1 */ applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, -0,100,0,1) //translate(0,100,0)
  
  point(0,0,0)
  
  circle(0, 0, 200); // Círculo de diametro = 200 (não tem z)
  square(-100, -100, 200); // Quadrado circunscrito
  
  /* 6 */ applyMatrix(cos(90*t),-sin(90*t),0,0, sin(90*t),cos(90*t),0,0, 0,0,1,0, 0,0,0,1)
  
  push() //6
  /* 3 */ applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, -100,0,0,1) //translate(-100,0,0)

  /* 5 */ applyMatrix(cos(90),0,-sin(90),0, 0,1,0,0, sin(90),0,cos(90),0, 0,0,0,1)
  
  
  push() //7
  /* 4 */ applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, -25,0,0,1) //translate(-125,0,0);
  
  push() //8
  
  
  /* 2 */ applyMatrix(cos(360*t),-sin(360*t),0,0, sin(360*t),cos(360*t),0,0, 0,0,1,0, 0,0,0,1)
  
  push() //9
  stroke('red')
  strokeWeight(15)
  /* 1 */ applyMatrix(1,0,0,0, 0,1,0,0, 0,0,1,0, -25,0,0,1) //translate(-25,0,0)
  point(0,0) //Cria o ponto na circunferência do círculo menor
  pop() //4
  pop() //5
  
  circle(0,0,50); // Círculo de diametro = 50
  
  pop() //6
  pop() //7
  pop() //8
  pop() //9
 
}
