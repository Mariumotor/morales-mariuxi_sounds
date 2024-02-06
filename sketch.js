let t;
let osc;
let playing = false;
let freq, amp;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator('sine');
  osc.amp(0);
  background(0);
  stroke(255, 0, 255);
  noFill();
  t = 0;
}

function draw() {
  freq = constrain(map(noise(t), 0, 1, 200, 800), 200, 800);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  if (playing) {
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  } else {
    osc.amp(0, 0.1);
  }

  let x1 = width * noise(t + 0);
  let x2 = width * noise(t + 15);
  let x3 = width * noise(t + 25);
  let x4 = width * noise(t + 35);
  let y1 = height * noise(t + 45);
  let y2 = height * noise(t + 55);
  let y3 = height * noise(t + 65);
  let y4 = height * noise(t + 75);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.005;
}

function mousePressed() {
  if (!playing) {
    // Iniciar el audio en respuesta al interactuar con la ventana, para evitar errores posibles con seguridad del navegador
    userStartAudio();
    
    // Iniciar el oscilador
    osc.start();
    
    playing = true;
  } else {
    playing = false;
    osc.amp(0, 0.1);
  }
}
