Shape3 shape3;
PShader myShader3;


class Shape3 {

  public Shape3() {
    myShader = loadShader("shader7.frag");
    myShader.set("iResolution", float(width), float(height));

    myShader.set("background", 0.006);
  }

  void draw() {
    pushStyle();
    float x= sin(millis()/1000.*PI);
    float y = recording.polyFitter.solve(x);
    y = max(0, min(y, 1));
   
    loadShape();

    noStroke();
    fill(0);
    rect(250, 0, width-250, height);  
    resetShader();
    popStyle();
  }

  void loadShape() {
    float integrate = float(millis())/1000;
    myShader = loadShader("shader7.frag");
    myShader.set("iResolution", float(width), float(height));
    shader(myShader);
    shader(myShader);
    myShader.set("integrate", integrate);
    myShader.set("x0", recording.polyFitter.coeffF[0]);
    myShader.set("x1", recording.polyFitter.coeffF[1]);
    myShader.set("x2", recording.polyFitter.coeffF[2]);
    myShader.set("x3", recording.polyFitter.coeffF[3]);
    myShader.set("x4", recording.polyFitter.coeffF[4]);
    myShader.set("x5", recording.polyFitter.coeffF[5]);
    myShader.set("x6", recording.polyFitter.coeffF[6]);
    myShader.set("x7", recording.polyFitter.coeffF[7]);
    myShader.set("x8", recording.polyFitter.coeffF[8]);
  }
}