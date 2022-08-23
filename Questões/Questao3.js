let screenWidth = 720;
let screenHeight = 400;

let t = 0;
let alpha = 0;
let distanciaSomada = 0;

function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(screenWidth, screenHeight);
}

function draw() {
    // Conta o tempo decorrido em segundos
    t += deltaTime/1000; 

    background(255);
    frameRate(30);
    angleMode(DEGREES);

    //matriz de translação que posiciona (0,0) no meio da tela
    applyMatrix(1, 0, 0,
                1, screenWidth/2, screenHeight/2);
  
    
    /*
    push()
    strokeWeight(5)
    point(100,0)
    point(-200,0)
    pop()
    */
    
    
  
    //desenho dos eixos x e y
    strokeWeight(1);
    stroke('green');
    line(0, -screenWidth/2, 0, screenWidth/2);

    stroke('red');
    line(-screenWidth/2, 0, screenWidth/2, 0);

    //matriz de rotação que muda a inclinação do vetor a cada frame
    applyMatrix(cos(alpha), -sin(alpha), sin(alpha), cos(alpha), 0, 0);

    alpha = (180/4)*t;
    distanciaSomada = 100*alpha/180
    
    push()
    applyMatrix(1,0, 0,1, distanciaSomada,0)
    strokeWeight(5);
    point(100,0)
    pop()

    //para a animação quando passam 4 segundos (120 frames)
    if (t>=4) {
        //noLoop()
        alpha = 0;
        t = 0;
        distanciaSomada = 0;  
    }
}
