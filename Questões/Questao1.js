// Declaração de variáveis globais
let raio = 30; // Tamanho do raio 
let xpos, ypos; // Posição inicial
let yspeed = 10; // Velocidade vertical 
let xspeed = 11.5; // Velocidade horizontal (720/60 frames por 2 segundos)

function setup() {
  createCanvas(720, 400);
  frameRate(30);
  ellipseMode(RADIUS);
  
  // Posição inicial (canto inferior esquerdo)
  xpos = 30;
  ypos = height - 30;
}

function draw() {
  background('#0FA798');
  
  // Muda a posição do círculo
  xpos = xpos + xspeed;
  ypos = ypos + yspeed;

  // Quando ele encosta nas bordas, muda a direção da velocidade
  if (xpos > width - raio || xpos < raio) {
    xspeed *= -1;
  }
  if (ypos > height - raio || ypos < raio) {
    yspeed *= -1; 
  }
  else {
    yspeed = yspeed + 0.5 // Gravidade
  }
  
  // Cria o círculo
  noStroke();
  fill('#E91E63');
  ellipse(xpos, ypos, raio, raio);
}
