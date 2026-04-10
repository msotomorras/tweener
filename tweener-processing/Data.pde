import java.util.*;

boolean isRecording=false;
boolean isEmpty = true;


Recording recording;

class Moment2D {
  PVector pos; 

  public Moment2D() {
    pos=new PVector(0, 0);
  }
  public Moment2D(float x, float y) {
    pos=new PVector(x, y);
  }
}

class Moment3D {
  PVector pos; 
  float time;

  public Moment3D() {
    pos  = new PVector(0, 0, 0);
    time=0;
  }

  public Moment3D(float posX, float posY, float posZ, float timeL) {
    pos  = new PVector(posX, posY, posZ);
    time=timeL;
  }
}



class Recording {

  ArrayList<Moment3D> moments3D;
  ArrayList<Moment2D> moments2D;
  PolyFitter polyFitter;
  //Sound sound;


  PVector  start;
  PVector  end;
  PVector dir;

  float minY;
  float maxY;


  int selectOrient=0;
  boolean valid;

  int countEvokesStart=0;
  int countEvokesEnd=0;

  int sizeO;

  boolean edit;
  int selectedID;
  int selectedIDfixed;
  int selectedState;
  boolean selectedLock;

  public Recording() {

    moments3D = new ArrayList <Moment3D>();
    moments2D = new ArrayList<Moment2D>();

    polyFitter = new PolyFitter();
    //sound =  = new Sound();

    start=new PVector(0, 0, 0);
    end=new PVector(0, 0, 0);
    dir=new PVector(0, 0, 0);

    minY=0;
    maxY=0;

    selectOrient=0;

    valid=false;

    countEvokesStart=0;
    countEvokesEnd=0;

    sizeO = 0;

    edit=false;
    selectedLock=false;
  }

  boolean isDataValid() {
    if (moments3D.size()>0) {
      start.set(moments3D.get(0).pos);
      end.set(moments3D.get(moments3D.size()-1).pos);
      dir.set(end);
      dir.sub(start);
      valid=(moments3D.size()>10 && dir.mag()>0);
    }
    return valid;
  }

  public void update() {
    if (valid && edit) edit();
  }




  public void edit() {

    if (!selectedLock) {
      float maxDist=25;
      float minDist=0.1;
      PVector mapped = new PVector(0, 0, 0);
      selectedID=-1;
      selectedIDfixed = -1;
      for (int i = 0; i < moments2D.size(); i++) {
        Moment2D mom = moments2D.get(i);
        mapped.set(frame.PixelToMapped(new PVector(mouseX, mouseY, 0)));
        mapped.y=1-mapped.y;
        //println(mapped.y);
        //println(moments2D.get(moments2D.size()-1).pos.y);
        mapped.y = map(mapped.y, 0, 1, visualization.extrVal.x, visualization.extrVal.y);
        float lDist= dist(mapped.x, mapped.y, mom.pos.x, mom.pos.y);
        if (lDist <minDist && lDist<maxDist) {
          maxDist=lDist;
          selectedID=i;
        }
      }
    }
  }

  void lockEdit() {
    selectedLock=true;
  }

  void updateEdit() {
    if ( selectedID!=-1) { 
      Moment2D mom = moments2D.get(selectedID);
      float div = frame.h*(1-frame.perc*2);
      PVector dir = new PVector((mouseX-pmouseX)/(float)(width)*-1, (mouseY-pmouseY)/(float)576);//frame.h*(1-frame.perc*2));//(float)(height)); 
      //println(div);
      mom.pos.y-=dir.y;
      
      
      if ( frameCount%2==0) {
        remapY();
        executeFitter();
      };
    }
  }

  void remapY() {
    float min = recording.moments2D.get(0).pos.y;
    float max = recording.moments2D.get(recording.moments2D.size()-1).pos.y;
    for (int i = 0; i < recording.moments2D.size(); i++) {

      recording.moments2D.get(i).pos.y = map(recording.moments2D.get(i).pos.y, min, max, 0, 1);
    }
  }


  void unlockEdit() {
    selectedLock=false;

    println("size " + moments2D.size());
  }  

  void suprMom() {
    edit();
    if ( selectedID!=-1 && selectedID != moments2D.size()-1 && selectedID != 0) { 
      moments2D.remove(selectedID);
      executeFitter();
    }
  }

  public void setBasics() {
    start.set(moments3D.get(0).pos);
    end.set(moments3D.get(moments3D.size()-1).pos);
    dir.set(end);
    dir.sub(start); 
    sizeO = moments3D.size();
    selectOrientation();
  }



  public void remap() {
    if (isDataValid()) {
      setBasics();
      remapTime();
      remapDistance(); 
      executeFitter();

      textField.enter("Recording data is valid");
    } else {
      textField.enter("Recording data is not valid");
    }
  }

  public void updateRecording() {
  }

  float selectOrientation() {
    selectOrient=0;
    if (dir.x==0) {
      selectOrient=1;
      if (dir.y==0) {
        selectOrient = 2;
      }
    }
    return selectOrient;
  }



  public void setMinMax() {    
    minY=0;
    maxY=0;
    for (int i=0; i < moments2D.size (); i++) {

      Moment2D mom2D;
      mom2D = moments2D.get(i);
      float y = mom2D.pos.y;

      if (i==0) {
        minY=y;
        maxY=y;
      } 

      if (y<minY) minY=y;
      if (y>maxY) maxY=y;
    }
  }




  void enterNewValue(PVector in) {
    countEvokesStart++; 
    if (countEvokesStart>5) {
      Moment3D mom = new Moment3D(in.x, in.y, in.z, millis());
      moments3D.add(mom);
    }
  }


  float getOrient(int i, PVector a) {
    if (i==1) return a.y;
    if (i==2) return a.z;
    return a.x;
  }

  public void remapTime() {
    float f = moments3D.get(0).time;
    float l = moments3D.get(moments3D.size()-1).time;
    float duration = l -  f;

    for (int i =0; i < moments3D.size (); i++) {
      Moment3D mom = moments3D.get(i);
      mom.time-=f;
      mom.time/=duration;
    }
  }


  void remapDistance() {
    PVector lPos = new PVector();

    for (int i = 0; i < moments3D.size (); i++) {
      Moment3D mom = moments3D.get(i);
      PVector P = new PVector();
      P.set(mom.pos);
      PVector A = new PVector();
      PVector B = new PVector();
      A.set(start);
      B.set(end);
      PVector AP = PVector.sub(P, A);
      PVector AB = PVector.sub(B, A);
      float dot1 =  AP.dot(AB);
      float dot2 =  AB.dot(AB);

      AB.mult(dot1/dot2); 
      A.add(AB);
      lPos.set(A);
      float YMap = map(getOrient(selectOrient, lPos), getOrient(selectOrient, start), 
        getOrient(selectOrient, moments3D.get(moments3D.size ()-1).pos), 0, 1);
      Moment2D mom2D = new Moment2D(mom.time, YMap);

      moments2D.add(mom2D);
    }
  }



  void executeFitter() {    


    WeightedObservedPoints obs = new WeightedObservedPoints(); 
    for (int i=0; i< moments2D.size (); i++) {
      Moment2D mom = moments2D.get(i);  
      obs.add(1, mom.pos.x, mom.pos.y);
    }

    polyFitter.coeff = polyFitter.fitter.fit(obs.toList());

    for (int j=0; j<= polyFitter.grades; j++) {
      polyFitter.coeffF[j] = (float)polyFitter.coeff[j];
    }
    polyFitter.repairFitter();


    setMinMax();
    polyFitter.setMinMax();
  }


  float getPosY (float x) {
    float y =polyFitter.solve(x);
    return y;
  }

  void clearEnd() {
    if (GUI.switchMain.num == 0) countEvokesEnd = 0;
    if (GUI.switchMain.num == 1) countEvokesEnd = 0;
    int limit = sizeO-countEvokesEnd;

    for (int i=sizeO-1; i>=limit; i--) {    
      moments3D.remove(i);
    }
  }
}