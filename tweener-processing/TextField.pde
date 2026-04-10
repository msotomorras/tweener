TextField textField;

class TextField {
  
  PVector pos;
 ArrayList<String> text;
 
 float offset=20;
 float time=0;
 public TextField(PVector posIn) {
   pos=new PVector();
   pos.set(posIn);
   text = new ArrayList <String>();
   for (int i=0; i < 4; i++) {

     
     String t=" - " + (i);
     text.add(t);
   }
 }
 
 public void draw() {
   pushMatrix();
   pushStyle();
   translate(0,-offset*time +text.size()*offset); 
   textSize(v.s2);
   for (int i=0; i < text.size(); i++) {
          if (i==0) fill(v.h1); 
     else fill(v.b3); 
     
     String t=text.get(i);
     text(t,pos.x,pos.y-offset*i);
     
   }
   popStyle();
   popMatrix();
   time-=0.2;
   time = clamp(time,0,1);
   
 }
  
 public void enter(String t) {
   for (int i=text.size()-1;i >= 1;i--) {
     text.set(i,text.get(i-1));
   }
 //  time=1;
   text.set(0,"LOG " + "[ " + hour() + ": " + minute() + ": " + second() + "]   " +  t);
 }
  
  
}