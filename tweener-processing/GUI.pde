PFont font; 

class ToggleL {
  boolean on;

  public ToggleL() {
    on =false;
  }
}

class Switch {
  int num;

  public Switch() {
    num =0;
  }
  public Switch(int i) {
    num =i;
  }
}
class GUI {



  RadioButton radioButtonMain;
  RadioButton radioButtonCreate;  
  RadioButton radioButtonPlay;
  RadioButton radioButtonExport;


  Switch switchMain;
  Switch switchEdit;
  Switch switchPlay;
  Switch switchExport;

  Button buttonExport;
  Button buttonEdit;
  ToggleL edit;
  ToggleL exportL;

  boolean showInfo = false;
  boolean showExport=false;
  float showExportA=0;
  float showInfoA=0;

  int hitButton = 0;
  float textSize=v.s2;

  PVector position = new PVector(80, 60);
  PVector dist1 = new PVector(50, 50);
  PVector dist2 = new PVector(35, 35);

  public GUI() {

    this.setup();
  }

  void setup() {


    //Radiobutton Main
    int numMain = 2;
    String labelsMain[] = {"CREATE", "PLAY"};

    switchMain = new Switch(0);

    radioButtonMain = new RadioButton(new PVector(position.x, position.y), new PVector(100, 0), labelsMain, textSize+1, switchMain, numMain);

    //Radiobutton create
    int numEdit = 3;
    String labelsEdit[] = {"MOUSE", "SOUND", "OSC"};

    switchEdit = new Switch(0);
    radioButtonCreate = new RadioButton(new PVector(position.x, position.y+dist1.y), new PVector(0, dist2.y), labelsEdit, textSize, switchEdit, numEdit);

    //Radiobutton play
    int numPlay = 7;
    String labelsPlay[] = {"PARTICLES", "PARTICLES ROTATE", "SHAPE_1", "SHAPE_2","SHAPE_3","SHAPE_4", "ICONS"};

    switchPlay = new Switch(0);
    radioButtonPlay = new RadioButton(new PVector(position.x, position.y+dist1.y), new PVector(0, dist2.y), labelsPlay, textSize, switchPlay, numPlay);

    //Radiobutton export
    int numExport = 6;
    String labelsExport[] = {"HLSL", "GLSL", "JAVA", "JAVASCRIPT", "C++", "C#"};

    switchExport = new Switch(0);
    radioButtonExport = new RadioButton(new PVector(width/2, height/3.5), new PVector(0, dist2.y), labelsExport, textSize, switchExport, numExport);


    //Buttons
    edit = new ToggleL();
    exportL = new ToggleL();
    buttonExport = new Button(new PVector(position.x, height-dist1.y*2.1), "EXPORT", textSize, exportL);
    buttonEdit = new Button(new PVector(position.x, height-dist1.y*2.1-dist2.y), "EDIT", textSize, edit);
  }

  void draw() {

    checkLogics();

    radioButtonMain.draw();
    radioButtonCreate.draw();
    radioButtonPlay.draw();
    buttonEdit.draw();
    showExport();
    showInfo();
    buttonExport.draw();
  }





  void checkLogics() {


    if (switchMain.num==0) {
      radioButtonPlay.active=false;
      radioButtonPlay.active=false;
      radioButtonCreate.active=true;
      radioButtonCreate.active=true;
      buttonEdit.active = true;
      buttonExport.active = true;
    } else {
      radioButtonCreate.active=false;
      radioButtonCreate.active=false;
      radioButtonPlay.active=true;
      radioButtonPlay.active=true;
      buttonEdit.active = false;
    }

    if (!exportL.on) radioButtonExport.active = false;
    else radioButtonExport.active = true;

    if (!recording.valid) {
      edit.on=false;
    }
  }

  void checkHit() {
    radioButtonMain.checkHit();
    radioButtonCreate.checkHit();
    radioButtonPlay.checkHit();
    radioButtonExport.checkHit();
    buttonExport.checkHit();
    buttonEdit.checkHit();

    showText();
  }

  boolean Area() {

    boolean mainMenu = ((mouseX > 0) && (mouseX < position.x+dist1.x*3) &&
      (mouseY > position.z) && (mouseY < position.y+dist1.y*4) );

    boolean secondaryMenu = ((mouseX > position.x-dist1.x) && (mouseX < position.x+dist1.x*3) &&
      (mouseY > height-dist1.y*2-dist2.y) && (mouseY < height-dist1.y*1.4) );  


    boolean exportMenu = exportMenu = ((mouseX > 280) && (mouseX < width-280) &&
      (mouseY > 0) && (mouseY < height) );

    if (showExportA==0) exportMenu = false;
    return mainMenu || secondaryMenu || exportMenu;
  }




  void showExport() {

    if (!showExport) showExportA-=0.07;
    else showExportA+=0.07;
    showExportA=clamp(showExportA, 0, 1);

    float showL = recording.polyFitter.solve(showExportA);
    pushStyle();
    //pushMatrix();
    fill(0, 0, 0, showL* 200);
    rect(0, 0, width, height);

    popStyle();
    //popMatrix();
    pushStyle();
    translate(0,0,0);
    radioButtonExport.draw();
    popStyle();


  }

  void showInfo() {

    if (!showInfo) showInfoA-=0.07;
    else showInfoA+=0.07;
    showInfoA=clamp(showInfoA, 0, 1);

    float showL = recording.polyFitter.solve(showInfoA);
    pushStyle();
    fill(0, 0, 0, showL* 200);
    rect(0, 0, width, height);
    popStyle();

    if (showInfo) text("SHORTCUTS\n"+"'c','C', right click - Copy polynom to clipboard\n"+"'e','E' - Enter edit mode\n"+"'s','S' - Delete element", width/2.3, height/3);
  }

  void showText() {
    if (radioButtonCreate.buttons[0].hitBox()) textField.enter("Recording new data from mouse position. Please perform your flow while dragging the mouse.");
    if (radioButtonCreate.buttons[1].hitBox()) textField.enter("Recording new data from microphone. Please perform your flow while singing.");
    if (radioButtonCreate.buttons[2].hitBox())
    {
      if (osc.receiving) textField.enter("Receiving data from OSC. Left click to record.");
      else textField.enter("Not receiving data from osc.");
    }

    if (radioButtonMain.buttons[0].hitBox()) textField.enter("Recording data.");
    if (radioButtonMain.buttons[1].hitBox()) textField.enter("Visualize different representations of your recording.");
    
    if (buttonEdit.hitBox() && recording.edit == false) textField.enter("Edit mode enabled.");
    if (buttonEdit.hitBox() && recording.edit == true) textField.enter("Edit mode disabled.");
  }
}




class RadioButton {
  Button[] buttons;
  Switch s;
  int count;
  boolean active=true;

  public RadioButton(PVector pos, PVector dist, String[] textLabel, float sizeLabel, Switch switchL, int nrBut) {


    count = nrBut;
    buttons = new Button[count];
    s = switchL;

    PVector posL = new PVector(pos.x, pos.y);   
    for ( int i = 0; i < nrBut; i++) {
      buttons[i] = new Button(new PVector(posL.x+i*dist.x, posL.y+i*dist.y), textLabel[i], sizeLabel);
      if (s.num== i) buttons[i].toggleL.on = true;
    }
  }

  void draw() {
    if (active) {
      for (int i = 0; i< count; i++) {
        buttons[i].draw();
      }
    }
  }

  void checkHit() {
    if (active) {
      int hit=-1;
      for (int i = 0; i < count; i++) {
        if (buttons[i].hitBox()) hit =i;
      }

      if (hit>=0) {
        for (int i = 0; i < count; i++) {
          if (i==hit) buttons[i].toggleL.on=true;
          else buttons[i].toggleL.on=false;
        }
        s.num=hit;
      }
    }
  }
}

class Button {
  PVector position;
  PVector boxSize;
  float textSizeL;
  color onColor;
  color offColor;
  String text;
  ToggleL toggleL;
  boolean active=true;

  public Button(PVector pos, String textLabel, float textSize, ToggleL tog) {
    position = new PVector(pos.x, pos.y);
    text = textLabel;
    textSizeL=textSize;
    onColor = v.b4;
    offColor = v.b3;
    toggleL = tog;
    textSize(textSizeL);
    boxSize = new PVector(textWidth(text)*1.1, textSize*1.55);
  }



  public Button(PVector pos, String textLabel, float textSize) {
    position = new PVector(pos.x, pos.y);
    text = textLabel;
    onColor = v.b4;
    offColor = v.b3;
    toggleL = new ToggleL();
    textSizeL=textSize;
    textSize(textSizeL);
    boxSize = new PVector(textWidth(text)*1.1, textSize*1.55);
  }

  void draw() {
    if (active) {
      pushMatrix();
      pushStyle();

      translate(position.x, position.y);

      if (hitBox() || toggleL.on) fill(onColor);
      else fill (offColor);

      textSize(textSizeL);
      text(text, 0, boxSize.y);
      popStyle();
      popMatrix();
    }
  }

  void checkHit() { 
    if (active) {
      if (hitBox() ) {
        changeState();
      }
    }
  }
  void changeState() {

    toggleL.on =!toggleL.on;
  }

  boolean hitBox() {
    boolean in = false;
    if (mouseX >= position.x && mouseX <= position.x+ boxSize.x && mouseY >= position.y && mouseY <= position.y+ boxSize.y) {
      in = true;
    }
    return in;
  }
}