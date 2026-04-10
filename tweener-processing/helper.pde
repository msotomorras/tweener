/*Timer timer = new Timer();
TimerTask task = new MyTimerTask();

private class MyTimerTask extends TimerTask {
    public void run() {
        println(millis());
        recording.enterNewValue(new PVector(mouseX, mouseY, 0)); 
    }
}
*/

class Range {
  float fromVal;
  float toVal;

  public Range(float i, float j) {
    fromVal=i;
    toVal=j;
  }
}

class Frame {
  PGraphics pg;
  int x, y, w, h; 

  float perc=0.1;

  Range xRng;
  Range yRng;


  public Frame(int x, int y, int w, int h) {
    this.x=x;
    this.y=y; 
    this.w=w;
    this.h=h;

    xRng = new Range(w*perc, w*(1-perc));
    yRng = new Range(h*(1-perc), h*perc);

    pg = createGraphics(w, h, P3D);
    pg.colorMode(HSB, 255);
    pg.rectMode(CENTER);
    pg.smooth();
  } 

  public void drawGrid() {
    pg.pushStyle();
    for (int x=0; x < pg.width; x+=w/20.) {
      for (int y=0; y < pg.height; y+=h/20.) {
        pg.stroke(v.h1);

        pg.strokeWeight(1);
        pg.point(x, y);
      }
    }
    pg.popStyle();
  }

  public PVector PixelToMapped(PVector in) {
    float xL= map(in.x-x, xRng.fromVal, xRng.toVal, 0, 1);
    float yL= map(in.y-y, yRng.fromVal, yRng.toVal, 1, 0); 
    //float yL = map(in.y-y,yRng.fromVal, yRng.toVal,visualization.remapValueY(0),visualization.remapValueY(1));
    xL=min(1, max(0, xL));   
    yL=min(1, max(0, yL)); 

    visualization.xMouse = xL;

    return new PVector(xL, yL, 0);
  }

  public PVector MappedToPixel(PVector in) {

    float xL= map(in.x, 0, 1, xRng.fromVal, xRng.toVal);
    float yL= map(in.y, 0, 1, yRng.fromVal, yRng.toVal); 
    
    return new PVector(xL, yL, 0);
  }
}



float clamp(float val, float minI, float maxI) {
return min(maxI, max(minI, val));  
}