function setup() {
  createCanvas(720, 400);
}

function draw() {
  background('rgb(236,174,216)') 
  const t = millis()/1000; // Conta o tempo decorrido em segundos
  angleMode(DEGREES);
  
  strokeWeight(3);
  
  // Translação que posiciona a origem no meio da tela
  applyMatrix(1, 0, 0,
              1, 360, 200);
  
  // Círculo maior de raio = 100 (roxo)
  push();
  stroke('purple');
  circle(0,0,200); 
  pop();
  
  // Rotação do círculo menor
  applyMatrix(
  cos((90)*t), -sin((90)*t),
  sin((90)*t), cos((90)*t),
  0,0);
  
  // Círculo menor de raio = 25 (lilás)
  stroke('rgb(113,113,199)');
  circle(0,-75,50); // 0 no eixo x e -75 no eixo y (100-25)
  
  // Translação para o centro do círculo menor (0,-75)
  applyMatrix(1, 0, 0,
              1, 0, -75);
    
  // Rotação do ponto fixo rosa (360 + 90, pois o ponto rosa precisa dar uma volta completa em 1 segundo, e acompanhar a rotação do círculo menor)
  applyMatrix(
    cos((360)*t), sin((360)*t),
    -sin((360)*t), cos((360)*t),
    0,0);
  
  // Ponto fixo rosa
  push();
  strokeWeight(7);
  stroke('rgb(209,78,133)');
  point(0,-25);
  pop();
}
