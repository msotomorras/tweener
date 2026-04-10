
void initializePlay() {
  particles = new Particles();
  heartBeat = new HeartBeat();
  heartBeat2 = new HeartBeat2();
  shape3 = new Shape3();
  shape4 = new Shape4();
  shape5 = new Shape5();
  icons = new Icons();
}

void runPlay() {  

  if (GUI.switchPlay.num == 0) executeParticles();

  if (GUI.switchPlay.num == 1) executeParticles();

  if (GUI.switchPlay.num == 2) shape4.draw();

  if (GUI.switchPlay.num == 3) executeShape2();
  //if (GUI.switchPlay.num == 4) executeShape3();
  if (GUI.switchPlay.num == 5) executeShape();
  if (GUI.switchPlay.num == 4) shape5.draw();


  if (GUI.switchPlay.num == 6) {

    
    executeIcons();

}
}

void startPlay() {

  if (GUI.switchPlay.num == 0) {
    pushMatrix();
    startParticles();
    popMatrix();
  }

  if (GUI.switchPlay.num == 1) startParticlesRot();
}

///PARTICLES
void startParticles() {
  if (!GUI.Area()) particles.addParticles(mouseX, mouseY, 30);
}
void startParticlesRot() {
  if (!GUI.Area()) particles.addParticlesRot(mouseX, mouseY, 30);
}
void executeParticles() {

  particles.execute();
}

void restartParticles() {
  particles.particles.clear();
}



///SHAPE

void executeShape() {

  heartBeat.draw();
}





///POINTS
void startPoints() {
}
void executeShape2() {

  heartBeat2.draw();
}

void executeShape3() {

  shape3.draw();
}

void restartPoints() {
}

///LINES
void startColor() {
}
void executeColor() {
}

void restartColor() {
}

void executeIcons() {
  icons.display();
}