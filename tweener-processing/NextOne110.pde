

GUI GUI;
PImage img;

void setup() {

  size(1690, 950, P3D);

  colorMode(HSB, 255);
  smooth(8);
  font = createFont("Consolas.ttf", 20);

  textFont(font);
  frame = new Frame(250, 115, 1280, 720);
  visualization = new Visualization();
  textField = new TextField(new PVector(375, 800));
  v = new VisElements();
  img = loadImage("c5.png");
  cursor(img);

  initializeCreate();
  initializePlay();

  GUI = new GUI();
  codeBox = new CodeBox();
}

void draw() {

  background(v.b1);

  if (GUI.switchMain.num == 0) create();
  if (GUI.switchMain.num == 1) runPlay();

  GUI.draw();
  codeBox.draw();
  textField.draw();
  //if (!GUI.Area()) cursor(img);
  
}

void initializeCreate() {
  
  recording = new Recording();
  getPolynom = new GetPolynom();
  sound = new Sound();
  osc = new Osc();
  
  textField.enter("Recording new data from mouse position. Please perform your flow while dragging the mouse.");
}

void create() {
  createControl();
  //if(GUI.Area()) cursor(ARROW);
  
  if (isRecording && !recording.edit) {
    if (GUI.switchEdit.num==0) recording.enterNewValue(new PVector(mouseX, mouseY, 0));
    if (GUI.switchEdit.num==1) {
      sound.listen();
      //recording.enterNewValue(new PVector(sound.vol, 0, 0));
    }
  } 


  recording.update();

  frame.PixelToMapped(new PVector(mouseX, mouseY, 0));
  visualization.drawFrame();

}

void createControl(){
  if (GUI.switchEdit.num==1) sound.listen();
  if (GUI.switchEdit.num==2) osc.updateReceiving();
}


void startRecording() {
  
  
  recording = new Recording();
  isRecording=true;
  isEmpty = false;

}

void stopRecording() {
  if (!isEmpty) {
    isRecording=false;
    recording.remap();
  }
}

void mousePressed() {
  if (codeBox.checkHit()) return;
  GUI.checkHit();
  GUI.radioButtonExport.checkHit();
  if (mouseButton==LEFT) {
    GUI.checkLogics();

    if (!GUI.exportL.on) {
      if (GUI.switchMain.num == 0) {
        if (!GUI.Area() && !recording.edit) {
          startRecording();
          
        }

        if (recording.edit) recording.lockEdit();
      }
      if (GUI.switchMain.num == 1) startPlay();

      if (GUI.edit.on) recording.edit=true; 
      else recording.edit = false;
    }


    if (GUI.showExport && !GUI.exportL.on) {
      GUI.showExport=false;
    }

    if (GUI.exportL.on)  GUI.showExport=true;
  }
  if (mouseButton==RIGHT ) {
    getPolynomExported();
  }
}


void mouseDragged() {
  if (mouseButton==LEFT) {
    if (recording.edit) {
      recording.updateEdit();
    }
  }
}

void mouseReleased() {
  if (mouseButton==LEFT) {
    if (GUI.switchMain.num == 0 ) { 
      if (!recording.edit && isRecording  ) { 
        stopRecording();
      }
      if (recording.edit) recording.unlockEdit();
    }
  }
}

void keyPressed() {
  if (recording.edit) {
    if (key == 's' || key == 'S') {
      if (recording.moments2D.size()==10) textField.enter ("Deleting element not possible. Not enough data." );
      if (recording.moments2D.size()>10) recording.suprMom();
    }
  }
  if (key=='e' || key == 'E') {
    recording.edit=!recording.edit;
    GUI.edit.on = !GUI.edit.on;
    //println(recording.edit);
  }

  if (key=='i' || key == 'I') {
    GUI.showInfo=!GUI.showInfo;
  }
  if (key=='c' || key == 'C') {
    getPolynomExported();
  }

}