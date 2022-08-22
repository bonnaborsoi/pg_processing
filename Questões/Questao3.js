let screenWidth = 720;
let screenHeight = 400;

//ângulo inicial do vetor que vai de (0,0) até o ponto da trajetória
let angle = 0;

//distância inicial entre (0,0) e o ponto da trajetória
let distance = 100;

function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(screenWidth, screenHeight);
}

function draw() {
    // Conta o tempo decorrido em segundos
    const t = millis()/1000; 

    // 180deg /120 frames (4 segundos)
    const alpha = 1.5;

    //o quanto deve ser somado com o módulo do vetor
    const increment = 100*alpha/PI;

    background(255);
    frameRate(30);
    angleMode(DEGREES);

    //matriz de translação que posiciona (0,0) no meio da tela
    applyMatrix(1, 0, 0,
                1, screenWidth/2, screenHeight/2);

    //vetor que vai da origem ao ponto da trajetória
    let vetor = createVector(100, 0);

    //desenho dos eixos x e y
    strokeWeight(1);
    stroke('green');
    line(0, -screenWidth/2, 0, screenWidth/2);

    stroke('red');
    line(-screenWidth/2, 0, screenWidth/2, 0);

    //matriz de rotação que muda a inclinação do vetor a cada frame
    applyMatrix(cos(angle), sin(angle), -sin(angle), cos(angle), 0, 0);

    //ângulo do vetor somado com alpha a cada frame (negativo - sentido anti-horário)
    angle -= alpha;

    //incrementar a distância entre o ponto e a origem a cada frame (usar a variável increment)
    applyMatrix(1, 0, 0,
        1, t*increment, 0
    );

    //desenho do ponto na posição nova
    strokeWeight(5);
    stroke('purple');
    point(vetor.x, vetor.y);

    //para a animação quando passam 4 segundos (120 frames)
    if (t>=4) {
        noLoop();
    }
}