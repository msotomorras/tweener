Frame frame;
Visualization visualization;


boolean showPosition = false;
float avoidInfinite = 0.00000000001;

class Visualization {

  float xMouse;
  PVector extrVal= new PVector(0, 0);


  public void drawFrame() {    

    getExtremeValues();

    frame.pg.beginDraw();
    frame.pg.background(v.b1);


    if(recording.isDataValid() && !isRecording){drawCoordinates(frame.pg);
    drawFitter(frame.pg);} 
    drawCurrentValue();
    visualize2D(frame.pg);
    if (recording.edit)  edit(frame.pg);

    frame.pg.endDraw();

    image(frame.pg, frame.x, frame.y);
  }


  void edit(PGraphics pg) {
    if (recording.moments2D.size()>recording.selectedID && recording.selectedID!=-1) {
      pg.pushStyle();
      pg.stroke(255, 255);
      Moment2D mom = recording.moments2D.get(recording.selectedID);
      PVector PosL = new PVector(mom.pos.x, remapValueY(mom.pos.y));
      drawPointPG(pg,PosL.x, PosL.y,v.h1,2);
      pg.popStyle();

    }
  }


  public void visualize2D(PGraphics pg) {
    
    for (int i =0; i < recording.moments2D.size (); i++) {
      color col = v.h1;
      Moment2D mom2D = new Moment2D();
      mom2D = recording.moments2D.get(i);
      PVector lPos= new PVector(mom2D.pos.x, mom2D.pos.y);
      
      float yMap = remapValueY(mom2D.pos.y);
      pg.pushStyle();
 
      
      if (recording.edit && i==recording.selectedID) col = (80); 
      drawPointPG(pg, lPos.x, yMap,col,1);
      pg.popStyle();

     // if(i== recording.moments2D.size()-1){println("rawdata"+mom2D.pos.y); println("curvee"+recording.polyFitter.solve(1));println("\nr:"+recording.moments2D.size());}
    }
  }

  void drawCoordinates(PGraphics pg) {
    float x =remapValueY(0);
    float y =remapValueY(1);


    drawLinePG(pg, 0, x, 1, x, v.h1);
    drawLinePG(pg, 0, y, 1, y, v.h1);


    for (int i=0; i <=10; i++) {
      float pos=i*0.1;

      String positionS = str(pos);
      if (positionS.length() >3) positionS = positionS.substring(0, 3);
      drawTextPG(pg, positionS, pos, x-.03, v.h1);
    }

    for (int i = 0; i <=5; i++) {
      float pos = i*.2;
      pos= map(pos, 0, 1, x, y);

      drawTextPG(pg, "-", -0.02, pos, v.h1);
    }

    if (!GUI.edit.on) drawCurrentPosition(pg, xMouse);
  }
  void drawFitter(PGraphics pg) { 
    if (recording.valid ) {

      float xPrev, yPrev;

      xPrev = 0;
      yPrev = 0;
      pg.pushStyle();
      pg.fill(255);

      float lTime=(float)millis()/1000.;

      color a = color(90, 245, 210 + sin(lTime)*130);
      color b = color(140, 150, 240);



      for (int i=0; i <= 200; i++) {
        float x = i/200.0; 
        float y = recording.polyFitter.solve(x); 
        float yM= remapValueY(y);

        if (i!=0) drawLinePG(pg, xPrev, yPrev, x, yM, lerpColor(a, b, y));
        xPrev = x;
        yPrev = yM;
      }  

      pg.popStyle();
    }
  }

  float remapValueY(float y) {
    float yMap = map (y, extrVal.x, extrVal.y+avoidInfinite, 0, 1);
    return yMap;
  }

  public void getExtremeValues() {
    float minVal = min(recording.minY, recording.polyFitter.minY);
    float maxVal = max(recording.maxY, recording.polyFitter.maxY);
    extrVal = new PVector( minVal, maxVal);
  }

  void drawTextPG(PGraphics pg, String in, float x, float y, color c) {
    pg.pushStyle();
    pg.pushMatrix();
    pg.stroke(c);

    PVector PosL = frame.MappedToPixel(new PVector (x, y));
    pg.textSize(v.s1);
    pg.textAlign(CENTER, CENTER);
    pg.text(in, PosL.x, PosL.y);
    pg.popMatrix();
    pg.popStyle();
  }

  void drawLinePG(PGraphics pg, float x, float y, float x2, float y2, color c) {
    pg.pushStyle();
    pg.strokeWeight(1);
    pg.stroke(c);

    PVector PosL = frame.MappedToPixel(new PVector (x, y));
    PVector PosL2 = frame.MappedToPixel(new PVector (x2, y2));

    pg.line(PosL.x, PosL.y, PosL2.x, PosL2.y);
    pg.popStyle();
  }

  void drawPointPG(PGraphics pg, float x, float y, color col,float s) {
    pg.pushStyle();
    pg.rectMode(CENTER);
    pg.noStroke();
    pg.fill(col);

    PVector PosL = new PVector (x, y);

    pg.rect(frame.MappedToPixel(PosL).x, frame.MappedToPixel(PosL).y, v.w1*s, v.w1*s);
    pg.popStyle();
  }


  void drawCurrentPosition (PGraphics pg, float x) {

    float y = recording.getPosY(x);
    float yMap = remapValueY(y);
    PVector PosL = new PVector (x, yMap);
    pg.pushStyle();
    pg.noStroke();
    pg.fill(v.h1);

    PVector MappedCurrentPosL = getCurrentPosMapped(PosL);
    pg.rect(MappedCurrentPosL.x-(v.w2/2), MappedCurrentPosL.y-(v.w2/2), v.w2, v.w2);
    pg.stroke(v.h1);
    pg.text(" ( " +  nf(x, 1, 3) + " , "+  nf(y, 1, 3)+" ) ", MappedCurrentPosL.x+10, MappedCurrentPosL.y);
    pg.popStyle();
  }

  PVector getCurrentPosMapped (PVector PosL) {
    PVector MappedPos = frame.MappedToPixel(PosL);
    return MappedPos;
  }

  void drawCurrentValue() {
    color col = v.b3;
    if (isRecording) col = v.b4;

    if (GUI.switchEdit.num == 0) writeValue(mouseX, mouseY, 0, col);
    if (GUI.switchEdit.num == 1) writeValue(0,sound.vol, 0, col);
    if (GUI.switchEdit.num == 2) writeValue(osc.data.x, osc.data.y, osc.data.z,col);
  }

  void writeValue (float x, float y, float z, color col) {
    pushStyle();
    textSize(v.s1);
    fill(col);
    float positionX = width - GUI.position.x*3;
    float positionY = GUI.position.y;
    text("("+x+", "+y+", "+z+")", positionX, positionY);
    popStyle();
  }
}

boolean refreshBackground() {
  //if (guiPlay.selected ==4) return false;
  return true;
}