Icons icons; 

float sizeGrid=30;
class Icons {
  int nIcons;
  
  int indexYL=0;
  float margin= sizeGrid*2.7;

  int elementsPerRow =int(width/(sizeGrid+margin));

  Triangle triangle;
  Arc arc;
  Circles circles;
  ArcsBall arcsBall;
  Balls balls;
  Arcs arcs;
  Pacman pacman;
  Flower flower;
  Warm warm;
  Rectangle rectangle;
  Warm2 warm2;
  Eight eight;
  Seven seven;
  Six six;
  Five five;

  Mio1 mio1;
  Mio2 mio2;
  Mio3 mio3;
  Mio4 mio4;
  Mio5 mio5;
  Mio6 mio6;
  Mio7 mio7;
  Mio8 mio8;
  Mio9 mio9;
  Mio10 mio10;
  Mio11 mio11;
  Mio12 mio12;
  Mio13 mio13;
  Mio14 mio14;
  Mio15 mio15;
  Mio16 mio16;
  Mio17 mio17;
  Mio18 mio18;
  Mio19 mio19;
  Mio20 mio20;
  Mio21 mio21;
  Mio22 mio22;
  Mio23 mio23;
  Mio24 mio24;
  Mio25 mio25;
  Mio26 mio26;
  Mio27 mio27;
  Mio28 mio28;
  Mio29 mio29;
  Mio30 mio30;
  Mio31 mio31;
  Mio32 mio32;
  Mio33 mio33;
  Mio34 mio34;
  Mio35 mio35;
  Mio36 mio36;
  Mio37 mio37; 
  Mio38 mio38;
  Mio39 mio39; 
  Mio40 mio40; 
  Mio41 mio41; 
  Mio42 mio42; 
  Mio43 mio43; 
  Mio44 mio44; 
  Mio45 mio45; 
  Mio46 mio46; 
  Mio47 mio47; 
  Mio48 mio48;
  Mio49 mio49;
  Mio50 mio50;
  Mio51 mio51;
  Mio52 mio52;
  Mio53 mio53;
  Mio54 mio54;
  Mio55 mio55;
  Mio56 mio56;
  Mio57 mio57;
  Mio58 mio58;
  Mio59 mio59;
  Mio60 mio60;
  Mio61 mio61;
  Mio62 mio62;
  Mio63 mio63;
  Mio64 mio64;
  Mio65 mio65;
  Mio66 mio66;
  Mio67 mio67;
  Mio68 mio68;
  Mio69 mio69;
  Mio70 mio70;
  Mio71 mio71;
  Mio72 mio72;
  Mio73 mio73;
  Mio74 mio74;
  Mio75 mio75;
  Mio76 mio76;
  Mio77 mio77;
  Mio78 mio78;
  Mio79 mio79;
  Mio80 mio80;
  Mio81 mio81;
  Mio82 mio82;
  Mio83 mio83;
  Mio84 mio84;
  Mio85 mio85;
  Mio86 mio86;
  Mio87 mio87;
  Mio88 mio88;
  Mio89 mio89;
  Mio90 mio90;
  Mio91 mio91;
  Mio92 mio92;
  Mio93 mio93;
  Mio94 mio94;
  Mio95 mio95;
  Mio96 mio96;
  Mio97 mio97;
  Mio98 mio98;
  Mio99 mio99;
  Mio100 mio100;
  Mio101 mio101;
  Mio102 mio102;
  Mio103 mio103;
  Mio104 mio104;
  Mio105 mio105;
  Mio106 mio106;
  Mio107 mio107;
  Mio108 mio108;
  Mio109 mio109;
  Mio110 mio110;
  Mio111 mio111;
  Mio112 mio112;
  Mio113 mio113;
  Mio114 mio114;
  Mio115 mio115;
  Mio116 mio116;
  Mio117 mio117;
  Mio118 mio118;

  public Icons() {
    triangle = new Triangle(getPositionGrid(0));
    arc = new Arc(getPositionGrid(1));
    circles = new Circles(getPositionGrid(2));
    arcsBall = new ArcsBall(getPositionGrid(3));
    balls = new Balls(getPositionGrid(4));
    arcs = new Arcs(getPositionGrid(5));
    pacman = new Pacman(getPositionGrid(6));
    flower = new Flower(getPositionGrid(7));
    warm = new Warm(getPositionGrid(8), 3);
    rectangle = new Rectangle(getPositionGrid(9));
    warm2 = new Warm2(getPositionGrid(10), 3);
    eight = new Eight(getPositionGrid(11), 3);
    seven = new Seven(getPositionGrid(12), 1);
    six = new Six(getPositionGrid(13), 2);
    five = new Five(getPositionGrid(14), 1);

    mio1 = new Mio1(getPositionGrid(15), 4);
    mio2 = new Mio2(getPositionGrid(16), 1);
    mio3 = new Mio3(getPositionGrid(17), 2);
    mio4 = new Mio4(getPositionGrid(18), 2);
    mio5 = new Mio5(getPositionGrid(19), 2);
    mio6 = new Mio6(getPositionGrid(20), 2);
    mio7 = new Mio7(getPositionGrid(21), 3);
    mio8 = new Mio8(getPositionGrid(22), 3);
    mio9 = new Mio9(getPositionGrid(23), 5);
    mio10 = new Mio10(getPositionGrid(24), 3);
    mio11 = new Mio11(getPositionGrid(25), 4);
    mio12 = new Mio12(getPositionGrid(26), 10);
    mio13 = new Mio13(getPositionGrid(27), 15);
    mio14 = new Mio14(getPositionGrid(28), 1);
    mio15 = new Mio15(getPositionGrid(29), 3);
    mio16 = new Mio16(getPositionGrid(30), 3);
    mio17 = new Mio17(getPositionGrid(31), 3);
    mio18 = new Mio18(getPositionGrid(32), 3);
    mio19 = new Mio19(getPositionGrid(33), 4);
    mio20 = new Mio20(getPositionGrid(34), 4);
    mio21 = new Mio21(getPositionGrid(35), 4);
    mio22 = new Mio22(getPositionGrid(36), 2);
    mio23 = new Mio23(getPositionGrid(37), 4);
    mio24 = new Mio24(getPositionGrid(38), 3);
    mio25 = new Mio25(getPositionGrid(39), 2);
    mio26 = new Mio26(getPositionGrid(40), 20);
    mio27 = new Mio27(getPositionGrid(41), 10);
    mio28 = new Mio28(getPositionGrid(42), 10);
    mio29 = new Mio29(getPositionGrid(43), 7);
    mio30 = new Mio30(getPositionGrid(44), 7);
    mio31 = new Mio31(getPositionGrid(45), 7);
    mio32 = new Mio32(getPositionGrid(46), 33);
    mio33 = new Mio33(getPositionGrid(47), 1);
    mio34 = new Mio34(getPositionGrid(48), 8);
    mio35 = new Mio35(getPositionGrid(49), 7);
    mio36 = new Mio36(getPositionGrid(50), 10);
    mio37 = new Mio37(getPositionGrid(51), 60);
    mio38 = new Mio38(getPositionGrid(52), 10);
    mio39 = new Mio39(getPositionGrid(53), 10);
    mio40 = new Mio40(getPositionGrid(54), 3);
    mio41 = new Mio41(getPositionGrid(55), 53);
    mio42 = new Mio42(getPositionGrid(56), 33);
    mio43 = new Mio43(getPositionGrid(57), 63);
    mio46 = new Mio46(getPositionGrid(59), 8);
    mio47 = new Mio47(getPositionGrid(60), 15);
    mio48 = new Mio48(getPositionGrid(61), 18);
    mio49 = new Mio49(getPositionGrid(62), 1);
    mio50 = new Mio50(getPositionGrid(63), 8);
    mio51 = new Mio51(getPositionGrid(64), 50);
    mio52 = new Mio52(getPositionGrid(65), 5);
    mio53 = new Mio53(getPositionGrid(66), 4);
    mio54 = new Mio54(getPositionGrid(67), 15); 
    mio55 = new Mio55(getPositionGrid(68), 15); 
    mio67 = new Mio67(getPositionGrid(69), 30);
    mio56 = new Mio56(getPositionGrid(70), 45); 
    mio57 = new Mio57(getPositionGrid(71), 15); 
    mio58 = new Mio58(getPositionGrid(72), 3); 
    mio59 = new Mio59(getPositionGrid(73), 8); 
    mio60 = new Mio60(getPositionGrid(74), 12); 
    mio61 = new Mio61(getPositionGrid(75), 13); 
    mio62 = new Mio62(getPositionGrid(76), 53); 
    mio63 = new Mio63(getPositionGrid(77), 83); 
    mio64 = new Mio64(getPositionGrid(78), 9); 
    mio65 = new Mio65(getPositionGrid(79), 3);
    mio66 = new Mio66(getPositionGrid(80), 60);
    mio44 = new Mio44(getPositionGrid(81), 33);
    mio68 = new Mio68(getPositionGrid(83), 33);
    mio69 = new Mio69(getPositionGrid(84), 8);
    mio45 = new Mio45(getPositionGrid(85), 53);
    mio70 = new Mio70(getPositionGrid(87), 15);
    mio71 = new Mio71(getPositionGrid(88), 85);
    mio72 = new Mio72(getPositionGrid(89), 85);
    mio73 = new Mio73(getPositionGrid(90), 10);
    mio74 = new Mio74(getPositionGrid(91), 10);
    mio75 = new Mio75(getPositionGrid(92), 8);
    mio76 = new Mio76(getPositionGrid(93), 15);
    mio77 = new Mio77(getPositionGrid(94), 15);
    mio78 = new Mio78(getPositionGrid(95), 15);
    mio79 = new Mio79(getPositionGrid(96), 35);
    mio80 = new Mio80(getPositionGrid(97), 15);
    mio81 = new Mio81(getPositionGrid(98), 30);
    mio82 = new Mio82(getPositionGrid(99), 10);
    mio83 = new Mio83(getPositionGrid(100), 5);
    mio84 = new Mio84(getPositionGrid(101), 15);
    mio85 = new Mio85(getPositionGrid(102), 6);
    mio86 = new Mio86(getPositionGrid(103), 10);
    mio87 = new Mio87(getPositionGrid(104), 10);
    mio88 = new Mio88(getPositionGrid(105), 10);
    mio89 = new Mio89(getPositionGrid(106), 1);
    mio90 = new Mio90(getPositionGrid(107), 15);
    mio91 = new Mio91(getPositionGrid(108), 2);
    mio92 = new Mio92(getPositionGrid(109), 10);
    mio93 = new Mio93(getPositionGrid(110), 20);
    mio94 = new Mio94(getPositionGrid(111), 1);
    mio95 = new Mio95(getPositionGrid(112), 20);
    mio96 = new Mio96(getPositionGrid(113), 1);
    mio97 = new Mio97(getPositionGrid(114), 6);
    mio98 = new Mio98(getPositionGrid(115), 1);
    mio99 = new Mio99(getPositionGrid(116), 8);
    mio100 = new Mio100(getPositionGrid(117), 2);
    mio101 = new Mio101(getPositionGrid(118), 1);
    mio102 = new Mio102(getPositionGrid(119), 2);
    mio103 = new Mio103(getPositionGrid(120), 2);
    mio104 = new Mio104(getPositionGrid(121), 2);
    mio105 = new Mio105(getPositionGrid(122), 3);
    mio106 = new Mio106(getPositionGrid(123), 3);
    mio107 = new Mio107(getPositionGrid(124), 3);
    mio108 = new Mio108(getPositionGrid(125), 3);
    mio109 = new Mio109(getPositionGrid(126), 7);
    mio110 = new Mio110(getPositionGrid(127), 5);
    mio111 = new Mio111(getPositionGrid(128), 3);
    mio112 = new Mio112(getPositionGrid(129), 4);
    mio113 = new Mio113(getPositionGrid(130), 5);
    mio114 = new Mio114(getPositionGrid(131), 7);
    mio115 = new Mio115(getPositionGrid(132), 10);
    //mio116 = new Mio116(getPositionGrid(0), 11);
    mio117 = new Mio117(getPositionGrid(134), 60);
    mio118 = new Mio118(getPositionGrid(133), 20);
  }

  public void display() {
    pushStyle();
    rectMode(CENTER);
    triangle.display();
    arc.display();
    circles.display();
    arcsBall.display();
    balls.display();
    arcs.display();
    pacman.display();
    flower.display();
    warm.display();
    rectangle.display();
    warm2.display();
    eight.display();
    seven.display();
    six.display();
    five.display();
    mio1.display();
    mio2.display();
    mio3.display();
    mio4.display();
    mio5.display();
    mio6.display();
    mio7.display(); 
    mio8.display(); 
    mio9.display(); 
    mio10.display();
    mio11.display();
    mio12.display();
    mio13.display();
    mio14.display();
    mio15.display();
    mio16.display();
    mio17.display();
    mio18.display();
    mio19.display();
    mio20.display();
    mio21.display();
    mio22.display();
    mio23.display();
    mio24.display();
    mio25.display();
    mio26.display();
    mio27.display();
    mio28.display();
    mio29.display();
    mio30.display();
    mio31.display();
    mio32.display();
    mio33.display();
    mio34.display();
    mio35.display();
    mio36.display();
    mio37.display();
    mio38.display();
    mio39.display();
    mio40.display();
    mio41.display();
    mio42.display();
    mio43.display();
    mio44.display();
    mio45.display();
    mio46.display();
    mio47.display();
    mio48.display();
    mio49.display();
    mio50.display();
    mio51.display();
    mio52.display();
    mio53.display();
    mio54.display();
    mio55.display();
    mio56.display();
    mio57.display();
    mio58.display();
    mio59.display();
    mio60.display();
    mio61.display(); 
    mio62.display(); 
    mio63.display(); 
    mio64.display(); 
    mio65.display(); 
    mio66.display(); 
    mio67.display();
    mio68.display();
    mio69.display();
    mio70.display();
    mio71.display();
    mio72.display();
    mio73.display();
    mio74.display();
    mio75.display();
    mio76.display();
    mio77.display();
    mio78.display();
    mio79.display();
    mio80.display();
    mio81.display();
    mio82.display();
    mio83.display();
    mio84.display();
    mio85.display();
    mio86.display();
    mio87.display();
    mio88.display();
    mio89.display();
    mio90.display();
    mio91.display();
    mio92.display();
    mio93.display();
    mio94.display();
    mio95.display();
    mio96.display();
    mio97.display();
    mio98.display();
    mio99.display();
    mio100.display();
    mio101.display();
    mio102.display();
    mio103.display();
    mio104.display();
    mio105.display();
    mio106.display();
    mio107.display();
    mio108.display();
    mio109.display();
    mio110.display();
    mio111.display();
    mio112.display();
    mio113.display();
    mio114.display();
    mio115.display();
    //mio116.display();
    mio117.display();
    mio118.display();
    popStyle();
  }

  PVector getPositionGrid(int index) {
    PVector start = new PVector(280, 40);
    start = new PVector(375, 130);
    PVector position = new PVector(start.x, start.y);

    int indexXL = index%elementsPerRow;

    position.x += indexXL*sizeGrid*2.5;
    if (index%elementsPerRow==0 && index != 0) {
      indexYL+=1;
    }
    position.y += indexYL*10*sizeGrid/4;

    return position;
  }
}

class Animation {
  PVector position;
  float size;
  float x;
  float y;
  int numEl;

  color background = 30;//v.b1;
  color fill = color(0, 0, 255);
  float margin = .5;

  float jump = sizeGrid*.375;
  float jump2 = sizeGrid*0.0075;
  float jump3 = sizeGrid*0.075;

  float rad1 = sizeGrid;
  float rad2 = sizeGrid/2;
  float rad3 = sizeGrid/5;
  float rad4 = sizeGrid/25;

  float thick1 = sizeGrid/8;
  float thick2 = sizeGrid/10;

  float radCorner = sizeGrid/20;

  float lenght = sizeGrid-10;


  public Animation() {
    position = new PVector(0, 0);
    size = 0;
    x = 0;
    y = 0;
    numEl = 0;
    colorMode(HSB);
  }

  float getTime() {
    float x = (millis()/1200.)%1;
    float s = recording.polyFitter.solve(x);

    return s;
  }

  float getPosition(int i, int numEl) {
    float move = float(i)/numEl;
    float position = map(move, 0, 1, -sizeGrid/2, sizeGrid/2);
    return position;
  }


  float getSizeCircular(int numEl, float rad) {
    float CircleLenght = TWO_PI*rad;
    float size = 1./(numEl+CircleLenght/15)*CircleLenght;
    return size;
  }

  int getColorVar(float y, float angle) {   
    float a = sin(angle*y);
    a = map(a, 0, 1, 0, 255);
    return int(a);
  }

  float getFillGrad(float a, float angle) {
    float fillGrad = 1;
    float grow = 0;
    grow = sin(a*angle);
    fillGrad -= grow;
    fillGrad = map(fillGrad, 0, 1, background+30, 255);
    return fillGrad;

    /*float colorVar= 255*((float(i)/numEl-y));
     colorVar= sin(((float(i)/numEl-y))*TWO_PI);
     colorVar = map(colorVar, -1, 1, 0, 30);
     
     return colorVar;*/
  }
  float getMyInter(float intervall, int myID, int num) {
    float size = 1./(float)num;
    float result = map(intervall, myID*size, (myID+1)*size, 0, 1);
    result = min(1, max(0, result));
    return result;
  }

  float getMyInter2(float intervall, int myID, int num) {
    float size = 1./(float)num;
    float pos = size * myID;

    float result = abs(pos-intervall);

    result*=1;
    result = min(1, max(0, result));
    return result;
  }
}



class Triangle extends Animation {

  public Triangle(PVector pos) {
    position.x = pos.x;
    position.y = pos.y;
  }

  public void display() {

    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    rotate(y*TWO_PI);
    /*colorMode(HSB);
     fill(fill);*/
    float  dist=margin+sin((PI*y));
    dist *= jump;

    ellipse(0, dist, rad3, rad3);
    ellipse(-dist*cos(radians(30)), -dist*sin(radians(30)), rad3, rad3);
    ellipse(dist*cos(radians(30)), -dist*sin(radians(30)), rad3, rad3);
    popStyle();
    popMatrix();
  }
}


class Arc extends Animation {

  public Arc(PVector pos) {
    position.x = pos.x;
    position.y = pos.y;
  }

  public void display() {
    y = getTime();

    pushMatrix();
    translate(position.x, position.y);
    rotate(y*TWO_PI);

    stroke(fill);
    pushStyle();
    noFill();

    arc(0, 0, rad1, rad1, 0, 3*HALF_PI);
    popStyle();
    popMatrix();
  }
}

class Circles extends Animation {

  public Circles(PVector pos) {
    position.x = pos.x;
    position.y = pos.y;
  }

  public void display() {
    y = getTime();

    pushMatrix();
    pushStyle();

    translate(position.x, position.y);

    noStroke();
    float colorVar = getColorVar(y, PI);  
    fill(fill, 255-colorVar);

    ellipse(0, 0, rad1, rad1);

    popStyle();
    popMatrix();
  }
}

class ArcsBall extends Animation {

  public ArcsBall(PVector pos) {
    position.x = pos.x;
    position.y = pos.y;
  }

  public void display() {
    y = getTime();
    pushMatrix();

    translate(position.x, position.y);
    rotate(y*TWO_PI);

    float radL = rad2;
    float rad1L = rad1;
    radL *= 1+sin(y*PI)*jump2;
    rad1L *=1+sin(y*PI)*jump2;

    pushStyle();

    fill(fill);
    noStroke();
    ellipse(0, 0, radL, radL);
    popStyle();

    pushStyle();
    stroke(fill);
    noFill();

    arc(0, 0, rad1L, rad1L, 0, PI/3);
    arc(0, 0, rad1L, rad1L, PI, PI+PI/3);

    popStyle();

    popMatrix();
  }
}

class Balls extends Animation {

  public Balls(PVector pos) {
    position.x = pos.x;
    position.y = pos.y;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    rotate(y*TWO_PI);

    float radCenter = sin(y*PI)+margin;
    radCenter *= jump;

    pushStyle();
    noStroke();
    fill(fill);
    ellipse(sizeGrid*.625, 0, rad3, rad3);
    ellipse(-sizeGrid*.625, 0, rad3, rad3);
    ellipse(0, 0, radCenter, radCenter);

    popStyle();
    popMatrix();
  }
}

class Arcs extends Animation {

  public Arcs(PVector pos) {
    position.x = pos.x;
    position.y = pos.y;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    float rad1L = rad1;
    float rad2L=rad2;
    rad1L *=1+sin(y*PI)*jump2;
    rad2L *=1+sin(y*PI)*jump2;

    translate(position.x, position.y);
    rotate(y*TWO_PI);

    stroke(fill);

    pushStyle();
    noFill();

    arc(0, 0, rad1L, rad1L, 0, PI/2);
    arc(0, 0, rad1L, rad1L, PI, 3*PI/2);
    arc(0, 0, rad2L, rad2L, PI/2, PI);
    arc(0, 0, rad2L, rad2L, 3*PI/2, 2*PI);


    popStyle();
    popMatrix();
  }
}

class Pacman extends Animation {

  public Pacman(PVector pos) {
    position.x = pos.x;
    position.y = pos.y;
  }


  public void display() {
    y = getTime();
    pushMatrix();

    translate(position.x, position.y);
    noStroke();
    pushStyle();
    fill(fill);
    float angle=sin(y*PI)*margin;

    arc(0, 0, rad1, rad1, 0, TWO_PI-angle, PIE);
    popStyle();

    pushStyle();

    fill(background);
    arc(0, 0, rad1, rad1, 0, angle, PIE);
    popStyle();
    popMatrix();
  }
}

class Flower extends Animation {


  public Flower(PVector pos) {
    position.x = pos.x;
    position.y = pos.y;
  }
  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    rotate(y*TWO_PI);
    fill(fill);

    float  dist=margin+sin((PI*y));
    dist *= jump;

    float radCen = rad3;
    radCen *= .3+sin(PI*y);

    ellipse(0, -dist, rad3, rad3);
    ellipse(-dist*cos(radians(180-18)), -dist*sin(radians(18)), rad3, rad3);
    ellipse(-dist*cos(radians(18)), -dist*sin(radians(18)), rad3, rad3);
    ellipse(-dist*cos(radians(54)), -dist*sin(radians(-54)), rad3, rad3);
    ellipse(-dist*cos(radians(180-54)), -dist*sin(radians(-54)), rad3, rad3);
    ellipse(0, 0, radCen, radCen);

    popStyle();
    popMatrix();
  }
}

class Warm extends Animation {

  public Warm(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    float positionY =0;
    translate(position.x, position.y);
    fill(fill);

    float sizeL = rad3;


    for (int i=0; i < numEl; i++) {

      float displace=  getMyInter2(y, i, numEl);
      displace=sin(PI*displace);
      displace=map(displace, 0, 1, 20, 35);

      float positionX = getPosition(i, numEl);
      positionY = jump-displace;
      ellipse(positionX, positionY, sizeL, sizeL);
    }
    popStyle();
    popMatrix();
  }
}

class Rectangle extends Animation {

  public Rectangle(PVector pos) {
    position.x = pos.x;
    position.y = pos.y;
  }

  public void display() {
    y = getTime();
    float a=  getMyInter(y, 0, 2);
    float b=  getMyInter(y, 1, 2);
    pushMatrix();
    pushStyle();

    translate(position.x, position.y);


    rotateX(a*PI);
    rotateY(b*PI);

    fill(fill);
    rect(0, 0, rad2, rad2);
    popStyle();
    popMatrix();
  }
}

class Warm2 extends Animation {

  public Warm2(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);
    for (int i=0; i < numEl; i++) {
      float val=  getMyInter2(y, i, numEl);
      val=sin(PI*val);
      val=map(val, 0, 1, .7, 1.2);
      float positionX = getPosition(i, numEl);
      float positionY = 0;
      ellipse(positionX, positionY, rad3*val, rad3*val);
    }
    popStyle();
    popMatrix();
  }
}

class Eight extends Animation {

  public Eight(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);

    fill(fill);

    float  dist=sin((PI*y));
    dist *= jump;
    float positionX =0;
    float positionY =0;

    float a=  getMyInter(y, 0, 3);
    float b=  getMyInter(y, 1, 3);

    for (int i=0; i < numEl; i++) {
      positionX =0;
      positionY =0;
      int mult = 1;
      if (i%2==1) mult*=-1;
      positionX += dist*a;
      positionY += dist*a;
      positionX -= dist*b*2;

      ellipse(positionX*mult, positionY*mult, rad3, rad3);
    }
    popStyle();
    popMatrix();
  }
}

class Seven extends Animation {


  public Seven(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);

    float a=  getMyInter(y, 0, 3);
    float b=  getMyInter(y, 1, 2);

    float sizeL = a*rad3;


    for (int i = 0; i< numEl; i++) {
      pushStyle();
      pushMatrix();
      noStroke();
      float colorVar =0;  
      if (a>0) colorVar = 255;
      if (b>0) colorVar =  255-getColorVar(b, PI/2);
      fill(fill, colorVar);
      //rotate(angle*i);

      ellipse(0, sizeL*4, rad3, rad3);

      popStyle();
      popMatrix();
    }
    popStyle();
    popMatrix();
  }
}

class Six extends Animation {

  public Six(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();

    float  dist=sin((PI/2*y));


    float a=  getMyInter(y, 0, 2);
    float b=  getMyInter(y, 1, 2);
    pushMatrix();
    translate(position.x, position.y);

    float size1 = dist*rad1*a;
    float size2 = dist*rad1*b;

    pushStyle();
    noStroke();
    fill(fill);
    ellipse(0, 0, size1, size1);
    fill(background);
    ellipse(0, 0, size2, size2);


    popStyle();


    popMatrix();
  }
}


class Five extends Animation {

  public Five(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);
    //rotate(y*2*PI);

    float  dist=sin((PI*y));
    dist *= jump;
    float positionX =sizeGrid/2;
    float positionY =sizeGrid/4;

    float a=  getMyInter(y, 0, 2);
    float b=  getMyInter(y, 1, 2);

    for (int i=0; i < numEl; i++) {
      int mult = 1;
      if (i%2==1) mult*=-1; 

      positionX -= dist*a*sizeGrid*.05;
      positionY -= dist*b*sizeGrid*0.11;

      ellipse(positionX*mult, positionY*mult, rad3, rad3);
      ellipse(-positionX, -positionY, rad3, rad3);
    }
    popStyle();
    popMatrix();
  }
}





class Mio1 extends Animation {


  public Mio1(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float  dist=sin((PI/2*y));

    float positionX =0;
    float positionY =0;
    float sizeL = rad3;
    pushStyle();
    for (int i=0; i < numEl; i++) {

      float move = ((float)i/(float)numEl);
      move+=dist;
      move=move%1;
      positionX = map(move, 0, 1, -sizeGrid/2, sizeGrid/2);
      float rise = abs(map(move, 0, 1, -1, 1));
      noStroke();
      fill(fill, (1-rise)*255);
      ellipse(positionX, positionY, sizeL, sizeL);
    }
    popStyle();

    popMatrix();
  }
}


class Mio2 extends Animation {

  public Mio2(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);


    pushStyle();

    stroke(fill);
    noFill();
    ellipse(0, 0, rad1, rad1);
    popStyle();

    pushStyle();
    rotate(y*TWO_PI);
    fill(fill);
    ellipse(0, rad1/2, rad3, rad3);
    popStyle();

    popMatrix();
  }
}


class Mio3 extends Animation {


  public Mio3(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);

    float  val=sin((TWO_PI*y));

    fill(fill);
    for (int i=0; i < numEl; i++) {
      int mult = 1;
      if (i%2==1) mult*=-1; 

      float positionX = getPosition(i, numEl);
      float positionY = 0;
      float sizeL = rad3;
      sizeL  -= rad3 * val *mult;
      rect(positionX, positionY, sizeL, sizeL);
    }
    popStyle();
    popMatrix();
  }
}

class Mio4 extends Animation {


  public Mio4(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();

    translate(position.x, position.y);

    float a=  getMyInter(y, 0, 2);
    float b=  getMyInter(y, 1, 2);


    stroke(fill);
    pushStyle();

    float angle1=PI*2*a;
    float angle2=PI*2*b;
    pushStyle();
    noStroke();
    fill(fill);
    arc(0, 0, rad1, rad1, 0, angle1, PIE);
    fill(v.b1);
    arc(0, 0, rad1, rad1, 0, angle2, PIE);

    popStyle();
    popStyle();
    popMatrix();
  }
}

class Mio5 extends Animation {

  public Mio5(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();

    translate(position.x, position.y);

    float stroke = thick1;
    float a=  getMyInter(y, 0, 2);
    float b=  getMyInter(y, 1, 2);
    stroke(fill);
    pushStyle();

    float angle=a*PI*2;
    float angle2 = b*PI*2;
    pushStyle();
    stroke(fill);
    strokeWeight(stroke);
    noFill();

    arc(0, 0, rad1, rad1, 0, angle);
    stroke(v.b1);
    arc(0, 0, rad1, rad1, 0, angle2);
    popStyle();
    popStyle();
    popMatrix();
  }
}

class Mio6 extends Animation {

  public Mio6(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }
  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    noStroke();
    fill(fill);
    translate(position.x, position.y);

    float mult = rad2;

    float a=  getMyInter(y, 0, 8);

    float c=  getMyInter(y, 2, 8);

    float e=  getMyInter(y, 4, 8);

    float g=  getMyInter(y, 6, 8);


    float sizeG = a*mult;
    float sizeW = c*mult;
    float sizeH = e*mult;
    float sizeD = g*mult;

    float sizeX = sizeG+sizeW-sizeD*2;
    float sizeY = sizeG+sizeH-sizeD*2;
    rect(0, 0, sizeX, sizeY);

    popStyle();
    popMatrix();
  }
}

class Mio7 extends Animation {

  public Mio7() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio7(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {

    y = getTime();
    float a=  getMyInter(y, 0, 2);
    float b=  getMyInter(y, 1, 2);
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);

    rectMode(CENTER);
    rotateX(a*PI);
    rotateY(b*PI);

    noFill();
    ellipse(0, 0, rad1, rad1);
    popStyle();
    popMatrix();
  }
}

class Mio8 extends Animation {

  public Mio8() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio8(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();


    translate(position.x, position.y);
    noStroke();

    float a=  getMyInter(y, 0, 2);
    float b=  getMyInter(y, 1, 2);


    float angle=sin(a*PI)*.5;
    float angle2 = sin(b*PI)*0.5;
    pushStyle();
    fill(fill);
    arc(0, 0, rad1, rad1, 0, TWO_PI-angle, PIE);
    popStyle();

    pushStyle();
    fill(background);
    arc(0, 0, rad1, rad1, 0, angle, PIE);    
    popStyle();

    pushMatrix();
    rotate(PI);
    pushStyle();
    fill(background);
    arc(0, 0, rad1, rad1, 0, angle2, PIE);
    popStyle();

    pushStyle();
    fill(background);
    arc(0, 0, rad1, rad1, -angle2, 0, PIE);
    popStyle();
    popMatrix();

    float  dist=sin((PI/2*y));

    float positionX =0;
    float positionY =0;

    pushStyle();
    for (int i=0; i < numEl; i++) {

      float move = ((float)i/(float)numEl);
      move+=dist;
      move=move%1;
      positionX = map(move, 0, 1, -20, 20);
      float rise = abs(map(move, 0, 1, 1, -1));
      noStroke();
      fill(fill, (1-rise)*255);
      ellipse(positionX, positionY, rad3/2, rad3/2);
    }
    popStyle();
    popMatrix();
  }
}

class Mio9 extends Animation {

  public Mio9() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio9(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    noStroke();
    fill(fill);

    float a=  getMyInter(y, 0, 2);
    float b=  getMyInter(y, 1, 2);


    float sizeL = rad3*a;
    float sizeD = 1-b;
    if (b>0) sizeL = rad3*sizeD;

    float angle = TWO_PI/numEl;
    float angle2 = b*PI*2;


    ellipse(0, 0, sizeL, sizeL);

    for (int i = 0; i< numEl; i++) {
      pushMatrix();
      rectMode(CENTER);
      rotate(angle*i);
      rotate(angle2);
      rectMode(CORNER);
      rect(rad3, 0, sizeL, thick1, radCorner);
      popMatrix();
    }
    popStyle();
    popMatrix();
  }
}

class Mio10 extends Animation {

  public Mio10(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    noStroke();


    float a=  getMyInter(y, 0, 2);
    float b=  getMyInter(y, 1, 2);

    float sizeL = rad3*a;
    float sizeL2 =rad3*b;

    float angle = TWO_PI/numEl;
    float angle2 = b*PI*2;

    if (a == 0) sizeL = size;

    for (int i = 0; i< numEl; i++) {
      pushMatrix();
      rectMode(CENTER);
      rotate(angle*i);
      rotate(angle2);
      pushStyle();
      fill(fill);
      rect(0, 0, sizeL*4, thick1, radCorner);
      popStyle();

      pushStyle();
      fill(background);
      rect(0, 0, sizeL2*4, thick1, radCorner);

      popStyle();
      popMatrix();
    }
    popStyle();
    popMatrix();
  }
}

class Mio11 extends Animation {

  public Mio11() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio11(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    rotate(PI/4);

    stroke(fill);
    noFill();

    float sizeL = rad3*2;
    float div = sizeL /numEl;
    float mult = sin(y*TWO_PI);

    for (int i = 0; i< numEl; i++) {
      float val = float(i)/numEl;

      sizeL +=mult*div*val*3;
      rect(0, 0, sizeL, sizeL);
    }
    popStyle();
    popMatrix();
  }
}

class Mio12 extends Animation {

  public Mio12() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio12(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushStyle();
    pushMatrix();
    translate(position.x, position.y);


    float sizeL = sin(y*PI)*rad3;
    float angle = TWO_PI/numEl;
    float angle2 = y*TWO_PI;
    float val = getColorVar(y, PI/2);


    fill(fill, val);
    ellipse(0, 0, sizeL, sizeL); 

    popStyle();

    for (int i = 0; i< numEl; i++) {
      pushStyle();
      pushMatrix();
      fill(fill, val);
      rotate(angle*i);
      rotate(angle2);
      ellipse(0, sizeL*2, 2, 2);

      popStyle();
      popMatrix();
    }
    popMatrix();
  }
}

class Mio13 extends Animation {

  public Mio13() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio13(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);


    float sizeL = y*rad3;
    float angle = TWO_PI/numEl;
    float angle2 = y*TWO_PI;

    float colorVar = sin(y*PI)*255;


    popStyle();

    for (int i = 0; i< numEl; i++) {
      pushStyle();
      pushMatrix();
      noStroke();
      fill(fill, colorVar);
      rotate(angle*i);
      rotate(angle2);
      ellipse(0, sizeL*2, 2, 2);

      popStyle();
      popMatrix();
    }
    popMatrix();
  }
}

class Mio14 extends Animation {

  public Mio14() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio14(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();

    translate(position.x, position.y);



    float c=  getMyInter(y, 2, 3);



    float add = sin(y*PI);
    float colorVar = getColorVar(c, PI/2);


    pushStyle();
    fill(fill, colorVar);


    popStyle();

    for (int i = 0; i< numEl; i++) {
      pushStyle();
      pushMatrix();
      stroke(fill);
      noFill();

      add = sin(y*PI/2);
      rotate(add*PI);
      rect(0, 0, rad1, rad1);

      popStyle();
      popMatrix();
    }
    popMatrix();
  }
}

class Mio15 extends Animation {

  public Mio15(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();

    translate(position.x, position.y);



    float c=  getMyInter(y, 2, 3);



    float add = 0;
    //add = map(add,-1,1,0,TWO_PI);
    float colorVar = getColorVar(c, PI/2);


    pushStyle();
    fill(fill, colorVar);


    popStyle();

    for (int i = 1; i<=numEl; i++) {
      pushStyle();
      pushMatrix();
      stroke(fill);
      noFill();

      add = i*sin(y*PI/2);
      rotate(add*PI/2);
      rect(0, 0, rad1, rad1);

      popStyle();
      popMatrix();
    }
    popMatrix();
  }
}
class Mio16 extends Animation {

  public Mio16(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();

    translate(position.x, position.y);

    float val = (sin(y*PI/2));
    float sizeL = rad1;

    pushStyle();
    fill(fill);
    ellipse(0, 0, sizeL, sizeL);
    popStyle();
    pushStyle();
    fill(background);
    ellipse(0, 0, sizeL*sin(val*PI), sizeL*sin(val*PI));
    popStyle();

    popMatrix();
  }
}

class Mio17 extends Animation {

  public Mio17(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    float positionY =0;
    translate(position.x, position.y);




    for (int i=0; i < numEl; i++) {

      float val=  getMyInter2(y, i, numEl);
      val=sin(PI*val);
      val=map(val, 0, 1, background, 255);

      float positionX = getPosition(i, numEl);
      positionY = 0;
      pushStyle();
      fill(fill, val);
      ellipse(positionX, positionY, rad3*val/255, rad3*val/255);
      popStyle();
    }
    popMatrix();
  }
}

class Mio18 extends Animation {

  public Mio18(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }
  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);

    float  dist=sin((TWO_PI*y));
    fill(fill);

    for (int i=0; i < numEl; i++) {
      //for(int j = 0; j< numEl;j++){
      int mult = 1;
      if (i%2==1) mult*=-1; 
      float positionX = getPosition(i, numEl);

      float positionY = 0;
      float sizeL = rad3;
      sizeL -=jump3*dist*mult;
      rect(positionX, positionY, sizeL, sizeL);
      //}
    }
    popStyle();
    popMatrix();
  }
}

class Mio19 extends Animation {

  public Mio19() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio19(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);
    float  dist=sin((TWO_PI*y));


    for (int i=0; i < numEl; i++) {
      for (int j = 0; j< numEl; j++) {
        int mult = 1;

        if (i%2==1) mult*=-1; 

        float positionX = getPosition(i, numEl);
        float positionY = getPosition(j, numEl);
        float sizeL = rad3*0.5;
        sizeL -=jump3*dist*mult;
        rect(positionX, positionY, sizeL, sizeL);
      }
    }
    popStyle();
    popMatrix();
  }
}

class Mio20 extends Animation {

  public Mio20(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);
    float  dist=sin((TWO_PI*y));


    for (int i=0; i < numEl; i++) {

      int mult = 1;

      if (i%2==1) mult*=-1; 

      float positionX = getPosition(i, numEl);
      float positionY =0;

      float sizeL = lenght;
      sizeL -=jump3*dist*mult;
      rectMode(CENTER);
      rect(positionX, positionY, thick2, sizeL, radCorner);
    }
    popStyle();
    popMatrix();
  }
}

class Mio21 extends Animation {
  public Mio21() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio21(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }
  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    fill(fill);
    float positionY =0;
    translate(position.x, position.y);

    for (int i=0; i < numEl; i++) {
      float val=  getMyInter2(y, i, numEl); 
      float sizeL = lenght;
      val=sin(PI*val);
      val=map(val, 0, 1, .7, 1.2);
      float positionX = getPosition(i, numEl);
      positionY = 0;
      rect(positionX, positionY, thick2, sizeL*val, radCorner);
    }
    popStyle();
    popMatrix();
  }
}

class Mio22 extends Animation {

  public Mio22(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float  dist=sin((PI/2*y));

    float positionX =0;
    float positionY =0;

    pushStyle();
    for (int i=0; i < numEl; i++) {

      float move = ((float)i/(float)numEl);
      move+=dist;
      move=move%1;
      float sizeL = rad3;
      positionX = sizeGrid/4+getPosition(i, numEl);
      float rise = abs(map(move, 0, 1, -1, 1));
      noStroke();
      fill(fill, (1-rise)*255);

      rectMode(CENTER);
      rect(positionX, positionY, sizeL, sizeL);
    }
    popStyle();

    popMatrix();
  }
}

class Mio23 extends Animation {

  public Mio23() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio23(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float  dist=sin((PI/2*y));

    float positionX =0;
    float positionY =0;

    pushStyle();
    for (int i=0; i < numEl; i++) {
      float sizeL = rad3;
      float val =rad3;


      sizeL = val;


      float move = ((float)i/(float)numEl);
      move+=dist;
      move=move%1;

      positionX = getPosition(i, numEl);
      float rise = abs(map(move, 0, 1, -1, 1));
      noStroke();
      fill(fill, (1-rise)*255);
      ellipse(positionX, positionY, sizeL, sizeL);
    }
    popStyle();

    popMatrix();
  }
}

class Mio24 extends Animation {

  public Mio24() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio24(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float  dist=sin((PI/2*y));

    float positionX =0;
    float positionY =0;

    pushStyle();
    for (int i=0; i < numEl; i++) {
      for (int j = 0; j< numEl; j++) {
        float sizeL = rad3;


        sizeL = rad3;


        float move = ((float)i/(float)numEl);
        move+=dist;
        move=move%1;

        positionX = getPosition(i, numEl);
        positionY = getPosition(j, numEl);
        float rise = abs(map(move, 0, 1, -1, 1));

        noStroke();
        fill(fill, (1-rise)*255);
        ellipse(positionX, positionY, sizeL, sizeL);
      }
    }
    popStyle();

    popMatrix();
  }
}

class Mio25 extends Animation {

  public Mio25() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio25(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    rectMode(CENTER);
    translate(position.x, position.y);


    float b=  getMyInter(y, 1, 2);

    float add = sin(y*PI)*sizeGrid;
    float colorVar =0;
    colorVar = 255-getColorVar(b, PI/2);



    fill(fill, colorVar);
    rotate(b*TWO_PI);
    rect(0, 0, rad3+add, 2);

    popStyle();
    popMatrix();
  }
}

class Mio26 extends Animation {

  public Mio26() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio26(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float  dist=sin((PI/2*y));

    float positionX =0;
    float positionY =0;

    pushStyle();
    for (int i=0; i < numEl; i++) {




      float move = ((float)i/(float)numEl);
      move+=dist;
      move=move%1;

      positionX = getPosition(i, numEl);

      float rise = 1-abs(map(move, 0, 1, -1, 1));

      noStroke();
      rectMode(CENTER);
      fill(fill, rise*255);
      rect(positionX, positionY, 2, lenght);

      //}
    }
    popStyle();

    popMatrix();
  }
}

class Mio27 extends Animation {

  public Mio27() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio27(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    pushMatrix();
    y = getTime();
    translate(position.x, position.y);

    float colorVar = getColorVar(y, PI/2);

    pushStyle();
    stroke(fill, colorVar);
    rotate(y*TWO_PI);
    noFill();
    strokeWeight(2);
    pushMatrix();
    translate(0, 0, -1.5);
    arc(0, 0, rad1, rad1, 0, 2*HALF_PI);
    popMatrix();
    popStyle();

    pushMatrix();

    pushStyle();
    noFill();
    stroke(background);
    strokeWeight(2);
    rotate(y*TWO_PI);
    arc(0, 0, rad1, rad1, 0, 3*HALF_PI);
    popStyle();

    popMatrix();
    popMatrix();
  }
}

class Mio28 extends Animation {

  public Mio28() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio28(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    float positionY =0;
    translate(position.x, position.y);

    for (int i=0; i < numEl; i++) {
      pushStyle();
      float val = 1-float(i)/numEl;
      float displace=  getMyInter2(y, i, numEl);
      displace=sin(PI*displace);
      displace=map(displace, 0, 1, 0, 15);
      float colorVar = val*255;

      fill(fill, colorVar);
      float positionX = getPosition(i, numEl);
      positionY = jump*.5-displace;
      float sizeL = rad4;

      rect(positionX, positionY, sizeL, sizeL);
      popStyle();
    }
    popMatrix();
  }
}

class Mio29 extends Animation {

  public Mio29() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio29(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    rotate(y*TWO_PI);

    for (int i=0; i < numEl; i++) {

      pushStyle();
      float val = float(i)/numEl;
      float positionX = sin(val*y*PI/4)*sizeGrid;
      rectMode(CENTER);
      float colorVar = val*sin(y*PI);
      colorVar = map(colorVar, 0, 1, 30, 255);

      fill(fill, colorVar);
      rotateZ(y*PI/4);
      ellipse(positionX, 0, rad4, rad4);
      popStyle();
    }
    popMatrix();
  }
}

class Mio30 extends Animation {

  public Mio30() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio30(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);


    float sizeL = y*rad3;
    float angle = TWO_PI/numEl;
    float colorVar = sin(y*PI);
    colorVar= pow(colorVar, 4);
    colorVar = map(1-colorVar, 0, 1, 255, background);


    for (int i = 0; i< numEl; i++) {
      pushStyle();
      pushMatrix();
      noStroke();
      fill(fill, colorVar);
      rotate(angle*i);

      ellipse(0, sizeL*2, rad3/2, rad3/2);

      popStyle();
      popMatrix();
    }
    popMatrix();
  }
}

class Mio31 extends Animation {

  public Mio31(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }
  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);

    float a=  getMyInter(y, 0, 3);
    float b=  getMyInter(y, 1, 3);

    float sizeL = a*rad3;
    float angle = TWO_PI/numEl;


    popStyle();

    for (int i = 0; i< numEl; i++) {
      pushStyle();
      pushMatrix();
      noStroke();


      fill(fill, 255*(1-b));
      rotate(angle*i);

      ellipse(0, sizeL*2, 2, 2);

      popStyle();
      popMatrix();
    }
    popMatrix();
  }
}



class Mio32 extends Animation {

  public Mio32() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio32(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }
  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    rotate(PI);




    pushStyle();
    for (int i=numEl+1; i >0; i--) {
      /*float marginL = (TWO_PI*rad2/numEl)*.6;
       rad3 = (TWO_PI*rad2)/(numEl+marginL);*/



      float a=  getMyInter2(y, i, numEl);  

      float radO = rad3;

      float angle = float(i)/numEl*-PI;

      pushMatrix();
      pushMatrix();
      //
      popMatrix();
      rectMode(CENTER);

      translate(radO*sin(angle)*2, 0);
      rotate(angle);
      rotate((1-sin(a*PI))*(PI/2));

      float fillGrad = getFillGrad(a, PI);
      fill(fill, fillGrad);

      /*float colorVar = getColorVar(a, PI/4); 
       fill(fill, colorVar);*/

      rect(0, 0, lenght, 1, radCorner);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio33 extends Animation {

  public Mio33() {
    position.x = 0;
    position.y = 0;
    size = 0;
    x = 0;
    y = 0;
  }
  public Mio33(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();


    translate(position.x, position.y);


    float a=  getMyInter(y, 0, 3);     
    float b=  getMyInter(y, 1, 3); 

    pushStyle();
    float colorVar = b*255;
    fill(fill, 255-colorVar);
    for (int i=0; i < numEl; i++) {


      float sizeL = rad3*a;
      if (a==0) sizeL =rad3;
      pushMatrix();
      rotate(b*PI);

      if (a>0) sizeL = sin(a*PI/4)*rad3;  
      if (b>0)sizeL = (1-b)*rad3;
      ellipse(rad2, 0, sizeL, sizeL);
      popMatrix();
      pushMatrix();
      rotate(b*PI);
      ellipse(-rad2, 0, sizeL, sizeL);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio34 extends Animation {

  public Mio34(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);


    float a=  getMyInter(y, 0, 2);     
    float b=  getMyInter(y, 1, 2); 

    pushStyle();
    fill(fill);
    for (int i=0; i < numEl; i++) {

      float sizeL = rad3*a;
      if (a==0) sizeL =rad3;


      if (a>0) sizeL = sin(a*PI/4)*rad3;  
      if (b>0)sizeL = (1-b)*rad3;
      pushMatrix();
      rotate(float(i)/numEl*TWO_PI);
      rotate(b*PI);
      ellipse(rad2, 0, sizeL, sizeL);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio35 extends Animation {

  public Mio35(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    pushStyle();
    fill(fill);
    for (int i=0; i < numEl; i++) {
      float marginL = (TWO_PI*rad2/numEl)*.2;
      rad3 = (TWO_PI*rad2)/(numEl+marginL);
      float a=  getMyInter2(y, i, numEl);     
      float sizeL = rad3*.5;
      float grow = 0;
      grow = sin(a*PI);
      grow = map(grow, 0, 1, 0, sizeL*.6);
      sizeL += grow;
      sizeL = max(.5, min(sizeL, sizeL));

      pushMatrix();
      rotate(float(i)/numEl*TWO_PI);

      ellipse(rad2, 0, sizeL, sizeL);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio36 extends Animation {

  public Mio36(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);


    pushStyle();
    for (int i=0; i < numEl; i++) {


      float a=  getMyInter2(y, i, numEl);     


      float colorVar = 1;
      float grow = 0;
      grow = sin(a*PI);
      colorVar -= grow;
      colorVar *= 255;


      pushMatrix();
      fill(fill, colorVar);
      rotate(float(i)/numEl*TWO_PI);

      ellipse(rad2, 0, rad3, rad3);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio37 extends Animation {

  public Mio37(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    pushStyle();
    for (int i=0; i < numEl; i++) {
      float marginL = (TWO_PI*rad2/numEl)*.6;
      rad3 = (TWO_PI*rad2)/(numEl+marginL);
      float a=  getMyInter2(y, i, numEl);     
      float colorVar = 1;
      float grow = 0;
      grow = sin(a*PI);
      colorVar -= grow;
      colorVar *= 255;

      pushMatrix();
      fill(fill, colorVar);
      rotate(float(i)/numEl*TWO_PI);
      rectMode(CENTER);
      rect(rad2, 0, rad4, rad4);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio38 extends Animation {

  public Mio38(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    rotate(PI);

    pushStyle();
    for (int i=0; i < numEl; i++) {
      float marginL = (TWO_PI*rad2/numEl)*.6;
      rad3 = (TWO_PI*rad2)/(numEl+marginL);
      float a=  getMyInter2(y, i, numEl);     
      float colorVar = 1;
      float grow = 0;
      grow = sin(a*PI);
      colorVar -= grow;
      colorVar *= 255;

      pushMatrix();
      fill(fill, colorVar);
      rotate(float(i)/numEl*PI*2);
      rectMode(CENTER);
      rect(rad2, 0, lenght*.3, 3, radCorner);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio39 extends Animation {

  public Mio39(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    rectMode(CENTER);
    translate(position.x, position.y);

    float b=  getMyInter(y, 1, 2);

    float colorVar =0;
    colorVar = 255-getColorVar(b, PI/2);

    fill(fill, colorVar);
    rotate(y*TWO_PI);


    popStyle();

    for (int i=0; i < numEl+1; i++) {
      pushMatrix();

      pushStyle();
      stroke(fill, colorVar);

      //ellipse(0, 0, rad3, rad3);
      popStyle();

      pushStyle();
      rotate(float(i)/numEl *TWO_PI*sin(y*PI));
      fill(fill);
      ellipse(0, rad2, 1, 1);
      popStyle();
      popMatrix();
    }

    popMatrix();
  }
}

class Mio40 extends Animation {

  public Mio40(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);


    float positionX =0;




    pushStyle();

    fill(fill);

    for (int i=1; i < numEl+1; i++) {
      /*float marginL = (TWO_PI*rad2/numEl)*.6;
       rad3 = (TWO_PI*rad2)/(numEl+marginL);*/

      float a=  getMyInter(y, i, numEl+1);  

      float radL = rad3;


      pushMatrix();
      pushMatrix();
      //
      popMatrix();
      rectMode(CENTER);


      positionX = getPosition(i, numEl);

      if (i==1) {
        translate(positionX, 0);
        radL = radL+sin(a*PI)*3; 
        rect(0, 0, radL, radL);
      }
      if (i%2==0) {
        translate(positionX, 0);
        rotate((sin(a*PI))*(PI/2));
        rect(0, 0, radL, radL);
      } 

      if (i%3==0) {
        pushMatrix();
        translate(positionX, 0);
        //rotate(a*TWO_PI);
        rect(0, 0-sin(a*PI)*15, radL, radL);
        popMatrix();
        //rect(0, 0, radL, radL);
      }

      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio41 extends Animation {

  public Mio41(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);


    pushStyle();

    fill(fill);

    for (int i=0; i < numEl+1; i++) {




      float a=  getMyInter2(y, i, numEl);  

      float radO = rad2*.5;

      float angle = float(i)/numEl*TWO_PI;

      pushMatrix();
      pushMatrix();
      //
      popMatrix();
      rectMode(CORNER);

      translate(radO*cos(angle), radO*sin(angle));
      rotate(angle);
      rotate((1-sin(a*PI))*(PI/2));




      fill(fill);

      rect(0, 0, lenght*.5, 1, radCorner);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio42 extends Animation {


  public Mio42(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    rotate(PI);



    pushStyle();
    for (int i=numEl+1; i >0; i--) {
      /*float marginL = (TWO_PI*rad2/numEl)*.6;
       rad3 = (TWO_PI*rad2)/(numEl+marginL);*/



      float a=  getMyInter2(y, i, numEl);  

      float radO = rad3;

      float angle = float(i)/numEl*PI;

      pushMatrix();
      pushMatrix();
      //
      popMatrix();
      rectMode(CENTER);

      translate(radO*cos(angle)*2, 0);
      rotate(angle);
      rotate((1-sin(a*PI))*(PI/2));

      float fillGrad = getFillGrad(a, PI);
      fill(fill, fillGrad);

      /*float colorVar = getColorVar(a,PI);
       fill(fill,255);*/

      /*float colorVar = getColorVar(a, PI/4);
       
       fill(fill, colorVar);*/

      rect(0, 0, lenght, 1, radCorner);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio43 extends Animation {

  public Mio43(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }
  public void display() {
    y =getTime();
    y=y%1;
    pushMatrix();
    translate(position.x, position.y);


    float positionX =0;




    pushStyle();
    for (int i=numEl+1; i >0; i--) {
      /*float marginL = (TWO_PI*rad2/numEl)*.6;
       rad3 = (TWO_PI*rad2)/(numEl+marginL);*/



      float a=  getMyInter2(y, i, numEl+1);  

      float radO = rad3*2;
      float angle = float(i)/numEl *PI/2;


      pushMatrix();

      positionX = getPosition(i, numEl);
      positionX = map(positionX, -sizeGrid/2, sizeGrid/2, -20, 120);


      translate(radO*(1-cos(angle))*7, 0);


      //rotate(abs(a*TWO_PI));
      rotate(angle);
      rotate(sin(a*PI)*PI);


      float fillGrad = getFillGrad(a, PI);
      fill(fill, fillGrad);



      rectMode(CENTER);
      rect(0, 0, lenght, 1, radCorner);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio44 extends Animation {

  public Mio44(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime(); 

    y=y%1;
    pushMatrix();
    translate(position.x, position.y);

    //rotate(PI);
    float positionX =0;




    pushStyle();
    for (int i=0; i <numEl; i++) {
      /*float marginL = (TWO_PI*rad2/numEl)*.6;
       rad3 = (TWO_PI*rad2)/(numEl+marginL);*/



      float a=  y - float(i)/numEl * PI/4.;//getMyInter2(y, i, numEl);  

      pushMatrix();

      positionX = getPosition(i, numEl);
      positionX = map(positionX, -sizeGrid/2, sizeGrid/2, -sizeGrid/2, sizeGrid*3);


      translate(positionX, 0);

      //rotate((a*TWO_PI));
      rotate(a*TWO_PI);
      float fillGrad = getFillGrad(a, TWO_PI);
      fill(fill, fillGrad);


      rectMode(CENTER);
      
      rect(0, 0, lenght*float(i)/numEl, .5, 1);

      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}


class Mio45 extends Animation {


  public Mio45(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime(); 

    y=y%1;
    pushMatrix();
    translate(position.x, position.y);

    //rotate(PI);
    float positionX =0;




    pushStyle();
    for (int i=0; i <numEl; i++) {



      float a=  y - float(i)/numEl * PI/4.;



      float radO = rad3*2;
      float angle = float(i)/numEl *PI/2;


      pushMatrix();

      positionX = getPosition(i, numEl);
      positionX = map(positionX, -sizeGrid/2, sizeGrid/2, -20, 120);


      translate(radO*sin(angle)*7, 0);

      rotate(a*TWO_PI);
      float fillGrad = getFillGrad(a, TWO_PI);
      fill(fill, fillGrad);

      rectMode(CENTER);
      rect(0, 0, lenght*.7, 1, radCorner);

      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio46 extends Animation {

  public Mio46(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    pushStyle();
    fill(fill);
    for (int i=0; i < numEl; i++) {
      float marginL = (TWO_PI*rad2/numEl)*.2;
      rad3 = (TWO_PI*rad2)/(numEl+marginL);
      float a=  getMyInter(y, i, numEl);     
      float sizeL =rad3*.7;
      float grow = 0;
      grow = sin(a*PI);
      grow = map(grow, 0, 1, 0, sizeL*.5);
      sizeL += grow;
      sizeL = max(.5, min(sizeL, rad3));

      pushMatrix();
      rotate(float(i)/numEl*TWO_PI);

      ellipse(rad2, 0, sizeL, sizeL);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio47 extends Animation {


  public Mio47(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    float positionY =0;
    translate(position.x, position.y);

    for (int i=0; i < numEl; i++) {
      pushStyle();
      float val = 1-float(i)/numEl;
      float colorVar = val*255;

      fill(fill, colorVar);
      float positionX = getPosition(i, numEl);
      positionY = sin(y*TWO_PI);
      rectMode(CORNER);
      positionY*=sin(float(i)/numEl*TWO_PI)*jump*.8;
      rect(positionX, 0, 1, rad3/5*positionY);
      popStyle();
    }
    popMatrix();
  }
}

class Mio48 extends Animation {

  public Mio48(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {

    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    pushStyle();
    for (int i=0; i < numEl+1; i++) {
      float marginL = (TWO_PI*rad2/numEl)*.2;
      rad3 = (TWO_PI*rad2)/(numEl+marginL);
      float a=  getMyInter(y, i, numEl);     
      float sizeL = rad3*.7;

      pushMatrix();
      translate(getPosition(i, numEl), 0);
      //rotate(y*2*PI);
      //float dir = (i%2==0)? i/(float)numEl*PI*2:i/(float)numEl*PI/2;
      rotate(y*PI*2 +i/(float)numEl*PI*2 );

      float hue = sin((float(i)/numEl-y)*TWO_PI);

      hue = map(hue, -1, 1, 100, 255);
      float colorVar = getFillGrad(a, TWO_PI);

      pushStyle();
      fill(fill, colorVar*hue/255);
      rect(rad3, rad3, rad3/5, sizeL*4);
      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio49 extends Animation {


  public Mio49(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    pushMatrix();
    y = getTime();
    translate(position.x, position.y);
    //float fill = map(y, 0, 1, 255, background);
    float colorVar = getColorVar(y, PI/2);




    pushStyle();
    stroke(fill, colorVar);
    rotate(y*TWO_PI);
    noFill();
    strokeWeight(2);
    arc(0, 0, rad1, rad1, 0, 2*HALF_PI);
    popStyle();

    pushMatrix();

    pushStyle();
    noFill();
    stroke(background, colorVar);
    strokeWeight(2);
    rotate(y*TWO_PI-PI/3);
    arc(0, 0, rad1, rad1, 0, 3*HALF_PI);
    popStyle();


    pushStyle();
    noFill();
    stroke(150, colorVar);
    strokeWeight(2);
    rotate(y*TWO_PI-PI/6);
    arc(0, 0, rad1, rad1, 0, HALF_PI);
    popStyle();

    popMatrix();
    popMatrix();
  }
}

class Mio50 extends Animation {


  public Mio50(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushStyle();
    pushMatrix();
    translate(position.x, position.y);

    float a=  getMyInter(y, 0, 3);
    float c=  getMyInter(y, 2, 3);

    float sizeL = a*rad3;
    float angle = TWO_PI/numEl;
    float angle2 = y*TWO_PI;
    //float fill = map(c, 0, 1, 255, background);
    float colorVar = (1-c)*255;


    if (a==0) sizeL = rad3;

    fill(fill, colorVar);
    ellipse(0, 0, sizeL, sizeL); 

    popStyle();

    for (int i = 0; i< numEl; i++) {
      pushStyle();
      pushMatrix();
      fill(fill, colorVar);
      rotate(angle*i);
      rotate(angle2);
      ellipse(0, sizeL*2, rad3/5, rad3/5);

      popStyle();
      popMatrix();
    }
    popMatrix();
  }
}

class Mio51 extends Animation {


  public Mio51(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);


    pushStyle();

    for (int i=0; i < numEl+1; i++) {

      float a=  getMyInter2(y, i, numEl);  

      float radO = rad2*.5;

      float angle = float(i)/numEl*TWO_PI;

      pushMatrix();
      rectMode(CORNER);

      translate(radO*cos(angle), radO*sin(angle));
      rotate(angle);
      rotate((1-sin(a*PI))*(PI/2));
      float colorVar = 1;

      float grow = 0;
      grow = sin(a*(PI));
      colorVar -= pow(grow, 2);
      colorVar = map(colorVar, 0, 1, background+30, 255);

      fill(fill, colorVar);

      rect(0, 0, lenght*.5, 1, radCorner);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio52 extends Animation {


  public Mio52(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }
  public void display() {

    y = getTime();
    pushMatrix();
    translate(position.x, position.y);




    pushStyle();
    for (int i=0; i < numEl+1; i++) {

      float angle = sin(y*PI/2)*PI;
      pushMatrix();
      //translate(0,positionY);
      angle = (float(i)/numEl*PI)*sin(y*PI);
      rotate(angle);

      pushStyle();
      float colorVar = sin(y*PI)*255;

      fill(fill, colorVar);
      rect(0, 0, 1, lenght);
      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio53 extends Animation {

  public Mio53(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {

    y = getTime();
    pushMatrix();
    translate(position.x, position.y);




    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);




    pushStyle();
    for (int i=0; i < numEl+1; i++) {

      float angle = sin(y*PI/2)*PI;
      pushMatrix();
      //translate(0,positionY);
      if (a>0) angle = (float(i)/numEl*PI)*sin(a*PI/2);
      if (b>0) angle = (float(i)/numEl*PI); 

      rotate(angle);
      if (b>0) rotate(PI*b);
      pushStyle();
      float colorVar = (1-sin(b*PI/2))*255;

      fill(fill, colorVar);
      rect(0, 0, 1, lenght);
      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio54 extends Animation {

  public Mio54(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {

    y = getTime();

    float  dist=sin((PI/2*y));


    float a=  getMyInter(y, 0, 3);
    float b=  getMyInter(y, 1, 3);
    float c=  getMyInter(y, 2, 3);
    pushMatrix();
    translate(position.x, position.y);

    float size1 = dist*rad2*a;
    float size2 = dist*rad2*b;

    pushStyle();
    noStroke();
    float colorVar2 = 0;
    if (a>0) colorVar2 = sin(a*PI/2)*255;


    fill(fill, colorVar2);
    ellipse(0, 0, size1, size1);
    fill(background);
    ellipse(0, 0, size2, size2);
    popStyle();

    float sizeL = rad2/2+rad1/2*sin(PI/2*c);
    float angle = TWO_PI/numEl;

    for (int i = 0; i< numEl; i++) {
      pushStyle();
      pushMatrix();
      noStroke();

      float colorVar = (1-sin(c*PI/2))*255;
      if (c==0) colorVar = 0;
      fill(fill, colorVar);
      rotate(angle*i);

      ellipse(0, sizeL, 1, 1);

      popStyle();
      popMatrix();
    }
    popMatrix();
  }
}

class Mio55 extends Animation {

  public Mio55(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {

    y = getTime();
    pushMatrix();
    translate(position.x, position.y);


    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);




    pushStyle();
    for (int i=0; i < numEl+1; i++) {

      float angle = sin(y*PI/2)*PI;
      pushMatrix();
      //translate(0,positionY);
      if (a>0) angle = (float(i)/numEl*TWO_PI)*sin(a*PI/2);
      if (b>0) angle = (float(i)/numEl*TWO_PI); 

      rotate(angle);
      if (b>0) rotate(PI*b);
      pushStyle();
      float colorVar = (1-sin(b*PI/2))*255;

      fill(fill, colorVar);
      ellipse(0, rad2, 2, 2);
      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio56 extends Animation {

  public Mio56(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {

    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);




    pushStyle();
    for (int i=0; i < numEl+1; i++) {

      float angle = sin(y*PI/2)*PI;
      pushMatrix();
      //translate(0,positionY);
      if (a>0) angle = (float(i)/numEl*PI)*sin(a*PI/2);
      if (b>0) angle = (float(i)/numEl*PI); 

      rotate(angle);
      if (b>0) rotate(PI*b);
      pushStyle();
      float colorVar = (1-sin(b*PI/2))*255;

      fill(fill, colorVar);
      rect(0, rad2, rad3/5, rad3/5);
      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio57 extends Animation {

  public Mio57(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);



    float sizeL = a*rad2;
    float colorVar = sin(a*PI)*255;
    float colorVar2 = (1-sin(b*PI/2))*255;
    if (b==0) colorVar2 = 0;

    float radL = rad2/2+b*rad2;
    pushStyle();
    for (int i=0; i < numEl+1; i++) {
      pushMatrix();

      pushStyle();
      stroke(fill, colorVar);
      noFill();
      ellipse(0, 0, sizeL, sizeL);
      popStyle();

      pushStyle();
      rotate(float(i)/numEl *TWO_PI);
      fill(fill, colorVar2);
      ellipse(0, radL, 1, 1);
      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio58 extends Animation {

  public Mio58(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    float positionY =0;
    translate(position.x, position.y);


    float sizeL = rad3;

    for (int i=0; i < numEl; i++) {

      float val = sin(getMyInter2(y, i, numEl)*PI)*255;

      float positionX = getPosition(i, numEl);
      positionY = 0;

      pushStyle();
      fill(fill, val);
      rect(positionX, positionY, sizeL, lenght*.6, radCorner);
      //rect(0,0,100,100);
      popStyle();
    }
    popMatrix();
  }
}

class Mio59 extends Animation {

  public Mio59(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {

    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);




    pushStyle();
    for (int i=0; i < numEl+1; i++) {
      float radL = 3+(float(i)/numEl-y)*PI/2*2;

      float angle = sin(y*PI/2)*PI;
      pushMatrix();
      //translate(0,positionY);
      if (a>0) angle = (float(i)/numEl*PI)*sin(a*PI/2);
      if (b>0) angle = (float(i)/numEl*PI); 

      rotate(angle);
      if (b>0) rotate(PI*b);
      pushStyle();
      float colorVar = (1-sin(b*PI/2))*255;

      fill(fill, colorVar);
      ellipse(0, rad2, radL, radL);
      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}


class Mio60 extends Animation {

  public Mio60(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {

    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);




    pushStyle();
    for (int i=0; i < numEl+1; i++) {
      float radL = 2+(float(i)/numEl-y)*5;

      float angle = sin(y*PI/2)*PI;
      pushMatrix();
      //translate(0,positionY);
      if (a>0) angle = (float(i)/numEl*TWO_PI)*sin(a*PI/2);
      if (b>0) angle = (float(i)/numEl*TWO_PI); 

      rotate(angle);
      if (b>0) rotate(PI*b);
      pushStyle();
      float colorVar = (1-sin(b*PI/2))*255;

      fill(fill, colorVar);
      ellipse(0, rad2, radL, radL);
      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio61 extends Animation {

  public Mio61(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {

    y = getTime();
    pushMatrix();
    translate(position.x, position.y);


    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);


    rotate(y*TWO_PI);

    pushStyle();
    for (int i=0; i < numEl+1; i++) {

      float rad2L = rad1/1.5 -(float(i)/numEl)*rad1/1.5;
      float angle = sin(y*PI/2)*PI;
      pushMatrix();
      rotate(float(i)/numEl*TWO_PI);
      translate(0, rad2L);

      if (a>0) angle = (float(i)/numEl*TWO_PI)*sin(a*PI/2);
      if (b>0) angle = (float(i)/numEl*TWO_PI); 

      rotate(angle);
      if (b>0) rotate(PI*b);
      pushStyle();
      float colorVar = (float(i)/numEl)*255;
      float sizeL = rad3/5;


      fill(fill, colorVar);
      ellipse(0, 0, sizeL, sizeL);
      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio62 extends Animation {

  public Mio62(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {

    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);


    rotate(y*-TWO_PI);

    pushStyle();
    for (int i=numEl+1; i >0; i--) {

      float rad2L = rad1/2-(float(i)/numEl)*rad1/2;
      float angle = sin(y*PI/2)*PI;
      pushMatrix();
      rotate(float(i)/numEl*TWO_PI);
      translate(0, rad2L);

      if (a>0) angle = (float(i)/numEl*PI)*sin(a*PI/2);
      if (b>0) angle = (float(i)/numEl*PI); 

      rotate(angle);
      if (b>0) rotate(PI*b);
      pushStyle();


      //fill(getFillGrad(y,PI));
      //rect(0, 0, 2, 2);
      float colorVar= 255*((float(i)/numEl-y));
      colorVar= 255*sin(((float(i)/numEl-y))*TWO_PI);
      fill(fill, colorVar);
      rotate(PI/3);

      rect(0, 0, 1, lenght);

      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio63 extends Animation {

  public Mio63(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();

    pushMatrix();
    translate(position.x, position.y);

    float angle = float(1)/numEl*TWO_PI;
    for (int i = 0; i< numEl; i++) {
      pushStyle();
      pushMatrix();
      noStroke();

      float hue = float(i)/numEl*255;
      float bright = 255;
      bright *= sin((float(i)/numEl - y)*TWO_PI);
      fill = color(hue, bright, 255);

      fill(fill, bright);
      rotate(angle*i);
      float radL = rad4;

      rect(0, rad2, radL, radL);

      popStyle();
      popMatrix();
    }
    popMatrix();
  }
}

class Mio64 extends Animation {

  public Mio64(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);


    float b=  getMyInter(y, 1, 2); 

    pushStyle();
    fill(fill);
    for (int i=0; i < numEl; i++) {

      float rad2L=rad2-b*rad2;
      rad2L = rad2-(1-sin(y*PI))*rad2;
      float colorVar = sin(y*PI)*255;
      fill(fill, colorVar);

      float sizeL = rad3;

      float lenghtL = sizeL*sin(y*PI);


      pushMatrix();
      rotate(float(i)/numEl*TWO_PI);
      rotate(b*PI);

      rect(rad2L, 0, rad3/3.3, lenghtL, radCorner);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio65 extends Animation {

  public Mio65(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    float positionY =0;
    translate(position.x, position.y);


    float sizeL =rad3;

    for (int i=0; i < numEl; i++) {

      //if (i%2 == 1) mult *= 0;


      float positionX = getPosition(i, numEl);

      float val = sin(getMyInter2(y, i, numEl)*PI);
      pushStyle();
      fill(fill);
      rect(positionX, positionY, sizeL*val, lenght*.6*val, radCorner*val);
      popStyle();
    }
    popMatrix();
  }
}

class Mio66 extends Animation {

  public Mio66(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {

    y = (float(mouseX)/width*2%1);
    y = getTime();
    getTime();
    pushMatrix();
    translate(position.x, position.y);

    float a = getMyInter(y, 0, 2);



    rotate(y*TWO_PI);

    pushStyle();
    for (int i=numEl; i >=0; i--) {

      float rad2L = (rad2*1.5-(float(i)/numEl)*rad2*1.5)*sin(y*PI);
      float angle = (y*PI)*PI/4;
      angle = map(angle, 0, 2, 0, TWO_PI);

      pushMatrix();
      rotate(float(i)/numEl*PI);
      translate(0, rad2L);

      if (a>0) angle = (float(i)/numEl*PI)*sin(y*PI/2);
      //if (b>0) angle = (float(i)/numEl*PI)*sin(b*PI/2); 

      //angle = ((float(i)/numEl)*PI/2);
      rotate(angle);
      //if (b>0) rotate(PI*b);
      pushStyle();


      //fill(getFillGrad(y,PI));
      //rect(0, 0, 2, 2);
      float colorVar= 255*((float(i)/numEl-y));
      colorVar= sin(((float(i)/numEl-y))*TWO_PI);
      colorVar = map(colorVar, -1, 1, 20, 180);
      fill(fill, colorVar);


      rect(0, 0, 1, lenght);

      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio67 extends Animation {

  public Mio67(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }
  public void display() {

    y = (float(mouseX)/width*2%1);
    y = getTime();
    getTime();
    pushMatrix();
    translate(position.x, position.y);


    float a = getMyInter(y, 0, 2);



    rotate(-y*TWO_PI);

    pushStyle();
    for (int i=numEl; i >=0; i--) {
      for (int j=numEl; j>=0; j--) {

        float rad2L = (rad2*1.5-(float(i)/numEl)*rad2*1.5)*sin(y*PI);
        float rad2LY = (rad2*1.5-(float(j)/numEl)*rad2*1.5)*sin(y*PI);
        float angle = (y*PI)*PI/4;
        angle = map(angle, 0, 2, 0, TWO_PI);

        pushMatrix();
        rotate(float(i)/numEl*PI);
        translate(rad2LY, rad2L);

        if (a>0) angle = (float(i)/numEl*PI)*sin(y*PI/2);

        //rotate(angle);


        pushStyle();

        float colorVar= 255*((float(i)/numEl-y));
        colorVar= sin(((float(i)/numEl-y))*TWO_PI);


        float colorVarj = 1-float(i)/numEl;
        float colorVarj2 = 1-float(j)/numEl;


        colorVar = map(colorVar*colorVarj*colorVarj2, -1, 1, 0, 30);
        fill(fill, colorVar);


        rect(0, 0, 2, 2);

        popStyle();
        popMatrix();
      }
    }
    popStyle();

    popMatrix();
  }
}

class Mio68 extends Animation {

  public Mio68(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {

    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);


    rotate(y*-TWO_PI);

    pushStyle();
    for (int i=0; i < numEl+1; i++) {

      float rad2L = rad1/1.5 -(float(i)/numEl)*rad1/1.5;
      float angle = sin(y*PI/2)*PI;
      pushMatrix();
      rotate(float(i)/numEl*TWO_PI);
      translate(0, rad2L);

      if (a>0) angle = (float(i)/numEl*TWO_PI)*sin(a*PI/2);
      if (b>0) angle = (float(i)/numEl*TWO_PI); 

      rotate(angle);
      if (b>0) rotate(PI*b);
      pushStyle();
      float colorVar = (1-(float(i)/numEl))*255;
      float sizeL = rad3/5;
      sizeL *= (1-float(i)/numEl);

      fill(fill, colorVar);
      ellipse(0, 0, sizeL, sizeL);
      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio69 extends Animation {

  public Mio69(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {

    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);

    pushStyle();
    for (int i=0; i < numEl+1; i++) {
      float radL = 2+(float(i)/numEl-b)*5;
      radL = rad3/3;

      float angle = sin(y*PI/2)*PI;
      pushMatrix();
      //translate(0,positionY);
      if (a>0) angle = (float(i)/numEl*TWO_PI)*sin(a*PI/2);
      if (b>0) angle = (float(i)/numEl*TWO_PI); 

      rotate(angle);
      if (b>0) rotate(PI*b);
      pushStyle();
      float colorVar = (float(i)/numEl)*(sin(b*PI/2))*255;
      if (a>0) colorVar = float(i)/numEl*255;
      float dism = (float(i)/numEl)*b*rad2;
      float dism2 = (float(i)/numEl)*b*radL;

      fill(fill, colorVar);
      ellipse(0, rad2-dism, radL-dism2, radL-dism2);
      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio70 extends Animation {

  public Mio70(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {

    y = getTime();

    pushMatrix();
    translate(position.x, position.y);

    float angle = float(1)/numEl*TWO_PI;
    for (int i = 0; i< numEl; i++) {
      pushStyle();
      pushMatrix();
      noStroke();

      float bright = 255;
      bright *= sin((float(i)/numEl - y)*TWO_PI);
      //fill = color(225+hue, 150, bright);

      fill(fill, bright);
      rotate(angle*i);
      float radL = rad3*.7;

      ellipse(0, rad2, radL, radL);

      popStyle();
      popMatrix();
    }
    popMatrix();
  }
}

class Mio71 extends Animation {

  public Mio71(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);


    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);


    rotate(y*-TWO_PI);

    pushStyle();
    for (int i=numEl+1; i >0; i--) {

      float rad2L = rad1/2-(float(i)/numEl)*rad1/2;
      float angle = sin(y*PI/2)*PI;
      pushMatrix();
      rotate(float(i)/numEl*TWO_PI);
      translate(0, rad2L);

      if (a>0) angle = (float(i)/numEl*PI)*sin(a*PI/2);
      if (b>0) angle = (float(i)/numEl*PI); 

      rotate(angle);
      if (b>0) rotate(PI*b);
      pushStyle();


      //fill(getFillGrad(y,PI));
      //rect(0, 0, 2, 2);
      float colorVar= 1-float(i)/numEl;
      colorVar= map(colorVar, 0, 1, 0, 255);
      colorVar = pow(colorVar, .82);
      fill(fill, colorVar);
      rotate(PI/3);

      rect(0, 0, 1, lenght*.7);

      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio72 extends Animation {

  public Mio72(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    float positionY =0;
    translate(position.x, position.y);
    float cont = 0;
    for (int i=0; i < numEl; i++) {    
      pushStyle();
      float mult = 1;
      if (cont%2==0) mult *=-1;
      float val = 1-float(i)/numEl;
      float displace= getMyInter2(y, i, numEl);
      displace=sin(PI*displace);
      //displace=map(displace, 0, 1, 0, 15);
      float colorVar = val*255;

      fill(fill, colorVar);
      float positionX = getPosition(i, numEl);
      positionY = jump*displace*mult;
      rect(positionX, positionY, rad3/5, rad3/5);
      popStyle();
      cont+=1;
    }
    popMatrix();
  }
}
class Mio73 extends Animation {

  public Mio73(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    pushStyle();
    for (int i=0; i < numEl; i++) {
      float marginL = (TWO_PI*rad2/numEl)*.6;
      rad3 = (TWO_PI*rad2)/(numEl+marginL);
      float a=  getMyInter2(y, i, numEl);     
      float colorVar = getFillGrad(a, PI);

      pushMatrix();
      fill(colorVar);
      rotate(float(i)/numEl*TWO_PI);
      rectMode(CENTER);
      rect(rad2, 0, 2, lenght);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio74 extends Animation {

  public Mio74(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    pushStyle();
    fill(fill);
    for (int i=0; i < numEl+1; i++) {
      /*float marginL = (TWO_PI*rad2/numEl)*.6;
       rad3 = (TWO_PI*rad2)/(numEl+marginL);*/



      float a=  getMyInter2(y, i, numEl);  

      float radO = rad2*.5;

      float angle = float(i)/numEl*TWO_PI;

      pushMatrix();
      pushMatrix();
      //
      popMatrix();
      rectMode(CORNER);

      translate(radO*cos(angle), radO*sin(angle));
      rotate(angle);
      rotate((1-sin(a*PI))*(PI/2+PI/8));

      rect(0, 0, lenght*.5, rad3/5, radCorner);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio75 extends Animation {

  public Mio75(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    pushStyle();
    for (int i=0; i < numEl; i++) {
      float marginL = (TWO_PI*rad2/numEl)*.6;
      rad3 = (TWO_PI*rad2)/(numEl+marginL);
      float a=  getMyInter2(y, i, numEl);     
      float colorVar = getFillGrad(a, PI);

      pushMatrix();
      fill(colorVar);
      rotate(float(i)/numEl*TWO_PI);

      arc(0, 0, lenght*.5, lenght*.5, 0, PI/4);
      ellipse(rad2, 0, 2, 2);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio76 extends Animation {

  public Mio76(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    pushStyle();
    for (int i=0; i < numEl; i++) {
      float marginL = (TWO_PI*rad2/numEl)*.6;
      rad3 = (TWO_PI*rad2)/(numEl+marginL);
      float a=  getMyInter2(y, i, numEl);     
      float colorVar = getFillGrad(a, PI);

      pushMatrix();
      stroke(fill, colorVar);
      strokeWeight(1);
      noFill();
      rotate(float(i)/numEl*TWO_PI);
      rectMode(CORNER);
      arc(0, 0, lenght*(sin(a*PI))*2, lenght*.8, 0, PI/2);

      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio77 extends Animation {

  public Mio77(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    rotate(y*TWO_PI);
    pushStyle();
    for (int i=0; i < numEl; i++) {

      float a=  getMyInter2(y, i, numEl);     
      float colorVar = getFillGrad(a, PI);
      float angle = float(i)/numEl*TWO_PI*(sin(y*PI));
      pushMatrix();
      stroke(fill, colorVar);
      strokeWeight(1);
      noFill();
      translate(rad2*cos(angle), rad2*sin(angle));
      rotate(PI+angle);

      arc(0, 0, lenght, lenght, 0, PI/2);

      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio78 extends Animation {

  public Mio78(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    rotate(-y*TWO_PI);
    pushStyle();
    for (int i=0; i < numEl; i++) {

      float a=  getMyInter2(y, i, numEl);     
      float colorVar = getFillGrad(a, PI);
      float angle = float(i)/numEl*TWO_PI*(sin(y*PI));
      pushMatrix();
      stroke(fill, colorVar);
      strokeWeight(1);
      noFill();
      translate(rad3*cos(angle), rad3*sin(angle));
      rotate(PI/4+angle);

      arc(0, 0, lenght, lenght, 0, PI/2*sin(y*PI));

      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio79 extends Animation {

  public Mio79(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    pushStyle();
    for (int i=0; i < numEl; i++) {
      float marginL = (TWO_PI*rad2/numEl)*.6;
      rad3 = (TWO_PI*rad2)/(numEl+marginL);
      float a=  getMyInter2(y, i, numEl);     
      float colorVar = getFillGrad(a, PI);

      pushMatrix();
      stroke(fill, colorVar);
      strokeWeight(1);
      noFill();
      rotate(float(i)/numEl*TWO_PI);
      rectMode(CORNER);
      arc(0, 0, lenght*(.5+sin(a*PI))*1.3, lenght*.6, 0, PI/2);

      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio80 extends Animation {

  public Mio80(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    pushStyle();
    for (int i=0; i < numEl; i++) {

      float a=  getMyInter2(y, i, numEl);     


      pushMatrix();
      stroke(fill, 50);

      strokeWeight(1);
      noFill();
      rotate(float(i)/numEl*TWO_PI);
      rectMode(CORNER);
      ellipse(0, 0, lenght*(.5+sin(a*PI)), lenght*.5);

      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio81 extends Animation {

  public Mio81(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    float positionY =0;
    translate(position.x, position.y);

    for (int i=0; i < numEl; i++) {

      pushStyle();
      float val = 1-float(i)/numEl;
      float colorVar = val*255;

      fill(fill, colorVar);
      float positionX = getPosition(i, numEl);
      positionY = sin(y*TWO_PI);
      positionY*=sin(float(i)/numEl*TWO_PI)*jump*.8;
      ellipse(positionX, positionY, rad3/5, rad3/5);
      popStyle();
    }
    popMatrix();
  }
}
class Mio82 extends Animation {

  public Mio82(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = (float(mouseX)/width*2%1);
    y = getTime();
    getTime();
    pushMatrix();
    translate(position.x, position.y);

    float n = 8;
    rotate(y*PI);
    pushStyle();
    for (int j = 0; j<n; j++) { 
      rotate(float(j)/n*TWO_PI);

      for (int i=0; i <numEl; i++) {
        float a = getMyInter2(1-y, i, numEl);
        float rad2L = (rad2-(float(i)/numEl)*rad2);
        pushMatrix();

        rotate(float(i)/numEl*PI);
        translate(rad2L, rad2L);

        pushStyle();

        float colorVar = getFillGrad(a, PI);

        fill(fill, colorVar);


        ellipse(0, 0, 1, 1);

        popStyle();
        popMatrix();
      }
    }

    popStyle();

    popMatrix();
  }
}

class Mio83 extends Animation {

  public Mio83(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = (float(mouseX)/width*2%1);
    y = getTime();
    getTime();
    pushMatrix();
    translate(position.x, position.y);

    float n = 16;
    //rotate(y*TWO_PI);
    pushStyle();
    for (int j = 0; j<n; j++) { 
      rotate(float(j)/n*TWO_PI);

      for (int i=1; i <=numEl; i++) {
        float a = getMyInter2(1-y, i, numEl);
        float rad2L = (rad2-(float(i)/numEl)*rad2);//*sin(y*PI);
        pushMatrix();

        rotate(float(i)/numEl*PI);
        translate(rad2L, rad2L);

        pushStyle();

        float colorVar = getFillGrad(a, PI);
        fill(fill, colorVar);


        ellipse(0, 0, rad3/5, rad3/5);

        popStyle();
        popMatrix();
      }
    }

    popStyle();

    popMatrix();
  }
}
class Mio84 extends Animation {

  public Mio84(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = (float(mouseX)/width*2%1);
    y = getTime();
    getTime();
    pushMatrix();
    translate(position.x, position.y);

    float n = 16;
    rotate(-y*PI);
    pushStyle();
    for (int j = 0; j<n; j++) { 
      rotate(float(j)/n*TWO_PI);

      for (int i=numEl; i >=0; i--) {

        float rad2L = (rad2*.8-(float(i)/numEl)*rad2*.8);
        pushMatrix();

        rotate(float(i)/numEl*PI);
        translate(rad2L, rad2L);

        pushStyle();

        float colorVar = 255*(sin((y-.5*float(i)/numEl)*TWO_PI));

        fill(fill, 155-colorVar);


        ellipse(0, 0, 1, 1);

        popStyle();
        popMatrix();
      }
    }

    popStyle();

    popMatrix();
  }
}
class Mio85 extends Animation {

  public Mio85(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = (float(mouseX)/width*2%1);
    y = getTime();
    getTime();
    pushMatrix();
    translate(position.x, position.y);

    float n = 8;

    pushStyle();
    for (int j = 0; j<n; j++) { 
      rotate(float(j)/n*TWO_PI);

      for (int i=numEl; i >0; i--) {
        float mult = 1;
        if (mult%2==0) mult*= -1;
        float rad2L = (rad2-(float(i)/numEl)*rad2);
        pushMatrix();
        rotate (abs((float(i)/numEl*y*3*HALF_PI)));
        translate(rad2L, rad2L);
        pushStyle();

        fill(fill);

        ellipse(0, 0, rad3/5, rad3/5);

        popStyle();
        popMatrix();
      }
    }

    popStyle();

    popMatrix();
  }
}
class Mio86 extends Animation {

  public Mio86(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);



    float sizeL = a*rad2;
    float colorVar = sin(a*PI)*255;
    float colorVar2 = (1-sin(b*PI/2))*255;
    if (b==0) colorVar2 = 0;

    float radL = rad2/2+b*rad2;

    pushStyle();
    for (int i=0; i < numEl+1; i++) {
      pushMatrix();

      pushStyle();
      stroke(fill, colorVar);
      noFill();
      ellipse(0, 0, sizeL, sizeL);
      popStyle();

      pushStyle();
      rotate(float(i)/numEl *TWO_PI);

      fill(fill, colorVar2+40);
      rectMode(CORNER);
      rect(0, radL, 1, lenght*.2*sin(b*PI));

      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio87 extends Animation {

  public Mio87(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);


    float colorVar = sin(a*PI)*255;
    float colorVar2 = (1-sin(b*PI/2))*255;
    if (b==0) colorVar2 = 0;

    float radL = y*rad2*1.5;

    pushStyle();
    for (int i=0; i < numEl+1; i++) {
      pushMatrix();

      pushStyle();
      stroke(fill, colorVar);
      noFill();
      //ellipse(0, 0, sizeL, sizeL);
      popStyle();

      pushStyle();
      rotate(float(i)/numEl *TWO_PI);

      fill(fill, colorVar2+30);
      rectMode(CORNER);
      rect(0, radL, 1, lenght*.2*sin(y*PI));

      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio88 extends Animation {

  public Mio88(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    rectMode(CORNER);
    translate(position.x, position.y);

    float b = getMyInter(y, 1, 2);

    float colorVar = (1-sin(b*PI/2))*255;
    if (b==0) colorVar = 0;

    float radL = y*rad2;


    for (int i=0; i < numEl+1; i++) {
      pushMatrix();

      pushStyle();
      stroke(fill, colorVar);
      noFill();
      //ellipse(0, 0, sizeL, sizeL);
      popStyle();

      pushStyle();
      rotate(float(i)/numEl *TWO_PI);

      fill(fill, colorVar+30);
      //rectMode(CORNER);
      rect(0, radL+b*12, 1, rad2*sin(y*PI));

      popStyle();
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio89 extends Animation {

  public Mio89(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    float radL = rad2;

    float posX = 0;
    float posY = 0;
    posY += radL/2;

    float a = getMyInter(y, 0, 9);

    float b = getMyInter(y, 1, 9);
    float c = getMyInter(y, 2, 9);
    float d = getMyInter(y, 3, 9);
    float e = getMyInter(y, 4, 9);
    float f = getMyInter(y, 5, 9);
    float g = getMyInter(y, 6, 9);
    float h = getMyInter(y, 7, 9);

    float size1 = radL*a;
    if (a==0) size1 = radL;
    float size2 = radL*b;
    if (a==0 && b == 0) size2 = radL;
    float size3 = radL*c;
    if (a==0 && b==0 && c==0) size3 = radL;
    float size4 = radL*d;
    float size5 = radL*e;
    float size6 = radL*f;
    float size7 = radL*g;
    float size8 = radL*h;



    pushStyle();
    noFill();
    stroke(fill);
    beginShape();
    vertex(posX+size5-size7, posY-size6+size8);
    vertex(posX+size1-size7, posY-size6+size8);
    vertex(posX+size1-size7, posY-size2+size8);
    vertex(posX+size1-size3, posY-size2+size8);
    vertex(posX+size1-size3, posY-size2+size4);
    endShape();
    popStyle();

    popMatrix();
  }
}

class Mio90 extends Animation {

  public Mio90(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = (float(mouseX)/width*2%1);
    y = getTime();
    getTime();
    pushMatrix();
    translate(position.x, position.y);

    float n = 8;
    rotate(y*PI);
    pushStyle();
    for (int j = 0; j<n; j++) { 
      rotate(float(j)/n*TWO_PI);

      for (int i=0; i <numEl; i++) {
        float a = getMyInter2(1-y, i, numEl);
        float rad2L = (rad2-(float(i)/numEl)*rad2);
        float mult = float(i)/numEl;
        pushMatrix();

        rotate(float(i)/numEl*PI);
        translate(rad2L, rad2L);

        pushStyle();

        float colorVar = getFillGrad(a, PI);

        fill(fill, colorVar-50);

        noStroke(); 
        rect(0, 0, .5, lenght*mult);

        popStyle();
        popMatrix();
      }
    }

    popStyle();

    popMatrix();
  }
}

class Mio91 extends Animation {

  public Mio91(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = (float(mouseX)/width*2%1);
    y = getTime();
    getTime();
    pushMatrix();
    translate(position.x, position.y);

    float n = 8;
    rotate(-y*PI);
    pushStyle();
    for (int j = 0; j<n; j++) { 
      rotate(float(j)/n*TWO_PI);      
      for (int i=1; i <numEl; i++) {

        float rad2L = (rad3-(float(i)/numEl)*rad3);

        pushMatrix();

        rotate(float(i)/numEl*PI);
        translate(rad2L, rad2L);
        pushStyle();
        fill(fill);
        rect(0, rad3, 1, lenght);

        popStyle();
        popMatrix();
      }
    }

    popStyle();

    popMatrix();
  }
}

class Mio92 extends Animation {

  public Mio92(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = (float(mouseX)/width*2%1);
    y = getTime();
    getTime();
    pushMatrix();
    translate(position.x, position.y);

    float n = 16;
    rotate(-y*PI);
    pushStyle();
    for (int j = 0; j<n; j++) { 
      rotate(float(j)/n*TWO_PI);

      for (int i=0; i <numEl; i++) {

        float rad2L = (rad2-(float(i)/numEl)*rad2);
        float mult = 1-float(i)/numEl;
        pushMatrix();

        rotate(float(i)/numEl*PI);
        translate(rad2L, rad2L);

        pushStyle();

        float colorVar = getFillGrad(mult, PI);

        fill(fill, colorVar*pow((1-mult), .8));


        rect(0, 0, 1, lenght*.3*mult);

        popStyle();
        popMatrix();
      }
    }

    popStyle();

    popMatrix();
  }
}

class Mio93 extends Animation {

  public Mio93(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = (float(mouseX)/width*2%1);
    y = getTime();
    getTime();
    pushMatrix();
    translate(position.x, position.y);

    float n = 16;
    rotate(-y*PI);
    pushStyle();
    for (int j = 0; j<n; j++) { 
      rotate(float(j)/n*TWO_PI);

      for (int i=0; i <numEl; i++) {
        float a = getMyInter2(1-y, i, numEl);
        float rad2L = (rad2-(float(i)/numEl)*rad2);
        float mult = 1-float(i)/numEl;
        pushMatrix();

        rotate(float(i)/numEl*PI);
        translate(rad2L, rad2L);

        pushStyle();

        float colorVar = getFillGrad(a, PI);

        fill(fill, colorVar*pow((1-mult), .8));


        rect(0, 0, 1, lenght*.3*mult);

        popStyle();
        popMatrix();
      }
    }

    popStyle();

    popMatrix();
  }
}

class Mio94 extends Animation {

  public Mio94(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    float radL = rad2;

    float posX = 0;
    float posY = 0;
    posY += radL/2;

    float a = getMyInter(y, 0, 9);

    float b = getMyInter(y, 1, 9);
    float c = getMyInter(y, 2, 9);
    float d = getMyInter(y, 3, 9);
    float e = getMyInter(y, 4, 9);
    float f = getMyInter(y, 5, 9);
    float g = getMyInter(y, 6, 9);
    float h = getMyInter(y, 7, 9);
    float i = getMyInter(y, 8, 9);

    float size1 = radL*a;
    if (a==0) size1 = radL;
    float size2 = radL*b;
    if (a==0 && b == 0) size2 = radL;
    float size3 = radL*c;
    if (a==0 && b==0 && c==0) size3 = radL;
    float size4 = radL*d;
    float size5 = radL*e;
    float size6 = radL*f;
    float size7 = radL*g;
    float size8 = radL*h;

    float colorVar = (1-i)*255;

    pushStyle();
    noFill();
    stroke(fill, colorVar);
    beginShape();
    vertex(posX, posY);
    vertex(posX+size1, posY);
    vertex(posX+size1-size2, posY-size2);
    vertex(posX+size1-size2+size3, posY-size2);
    vertex(posX+size1-size2+size3-size4/2, posY-size2-size4/2);
    vertex(posX+size1-size2+size3-size4/2-size5/2, posY-size2-size4/2+size5/2);
    vertex(posX+size1-size2+size3-size4/2-size5/2, posY-size2-size4/2+size5/2+size6);
    vertex(posX+size1-size2+size3-size4/2-size5/2+size7, posY-size2-size4/2+size5/2+size6-size7);
    vertex(posX+size1-size2+size3-size4/2-size5/2+size7, posY-size2-size4/2+size5/2+size6-size7+size8);

    endShape();
    popStyle();

    popMatrix();
  }
}

class Mio95 extends Animation {

  public Mio95(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = (float(mouseX)/width*2%1);
    y = getTime();
    getTime();
    pushMatrix();
    translate(position.x, position.y);

    float n = 16;
    rotate(y*PI);
    pushStyle();
    for (int j = 0; j<n; j++) { 
      rotate(float(j)/n*TWO_PI);

      for (int i=0; i <numEl; i++) {
        float a = getMyInter2(1-y, i, numEl);
        float rad2L = (rad2-(float(i)/numEl)*rad2);
        float mult = float(i)/numEl;
        float radL = rad3/2*mult;
        pushMatrix();

        rotate(float(i)/numEl*PI);
        translate(rad2L, rad2L);

        pushStyle();

        float colorVar = getFillGrad(a, PI);

        fill(fill, colorVar-80);

        noStroke(); 
        //rect(0, 0, .5, lenght*mult);
        ellipse(0, 0, radL, radL);
        popStyle();
        popMatrix();
      }
    }

    popStyle();

    popMatrix();
  }
}

class Mio96 extends Animation {

  public Mio96(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    ellipse(0, 0, sin(y*PI)*rad1, sin(y*PI)*rad1);
    popMatrix();
  }
}

class Mio97 extends Animation {

  public Mio97(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = (float(mouseX)/width*2%1);
    y = getTime();
    getTime();
    pushMatrix();
    translate(position.x, position.y);

    float n = 16;
    rotate(y*PI);
    pushStyle();
    for (int j = 0; j<n; j++) { 
      rotate(float(j)/n*TWO_PI);

      for (int i=0; i <numEl; i++) {
        float a = getMyInter2(1-y, i, numEl);
        float rad2L = (rad2-(float(i)/numEl)*rad2);
        float mult = float(i)/numEl;
        float radL = rad3/2*mult;
        pushMatrix();

        rotate(float(i)/numEl*PI);
        translate(rad2L, rad2L);

        pushStyle();

        float colorVar = getFillGrad(a, PI);

        fill(fill, colorVar-80);

        noStroke(); 
        //rect(0, 0, .5, lenght*mult);
        ellipse(0, 0, radL, radL);
        popStyle();
        popMatrix();
      }
    }

    popStyle();

    popMatrix();
  }
}


class Mio98 extends Animation {

  public Mio98(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    float radL = rad2;

    float posX = 0;
    float posY = 0;
    posY += radL/2;


    float b = getMyInter(y, 1, 8);
    float c = getMyInter(y, 2, 8);
    float d = getMyInter(y, 4, 8);
    float e = getMyInter(y, 5, 8);
    float f = getMyInter(y, 6, 8);


    pushStyle();
    noFill();
    stroke(fill);
    beginShape();


    vertex(posX+radL*cos(PI/6)*2*e, posY);
    vertex(posX+radL*cos(PI/6)-radL*cos(PI/6)*d+radL*cos(PI/6)*2*e-radL*cos(PI/6)*f, posY-radL*sin(PI/6)+(radL+radL/2)*d-(radL+radL/2)*f);
    vertex(posX+radL*cos(PI/6)*2-radL*cos(PI/6)*d-f*radL*cos(PI/6), posY+(radL+radL/2)*d-(radL+radL/2)*f);
    vertex(posX+radL*cos(PI/6), posY+radL*sin(PI/6));
    vertex(posX+radL*cos(PI/6)*2*e, posY);

    vertex(posX+radL*cos(PI/6)*2*e, posY);
    vertex(posX+radL*cos(PI/6)-radL*cos(PI/6)*b+radL*cos(PI/6)*2*e-radL*cos(PI/6)*f, posY-radL*sin(PI/6)+(radL+radL/2)*b-(radL+radL/2)*f);
    vertex(posX+radL*cos(PI/6)*2-radL*cos(PI/6)*b-f*radL*cos(PI/6), posY+(radL+radL/2)*b-(radL+radL/2)*f);
    vertex(posX+radL*cos(PI/6), posY+radL*sin(PI/6));


    vertex(posX+radL*cos(PI/6)*2-radL*cos(PI/6)*b-radL*cos(PI/6)*f, posY+(radL+radL/2)*b-((radL+radL/2)*f));
    vertex(posX+radL*cos(PI/6), posY+radL*sin(PI/6));
    vertex(posX+radL*cos(PI/6)*2*c, posY);
    vertex(posX+radL*cos(PI/6)-radL*cos(PI/6)*b+radL*cos(PI/6)*2*c-radL*cos(PI/6)*f, posY-radL*sin(PI/6)+(radL+radL/2)*b-(radL+radL/2)*f);
    vertex(posX+radL*cos(PI/6)*2-radL*cos(PI/6)*b-f*radL*cos(PI/6), posY+(radL+radL/2)*b-(radL+radL/2)*f);
    vertex(posX+radL*cos(PI/6), posY+radL*sin(PI/6)-(radL*f));

    endShape();




    endShape();
    popStyle();

    popMatrix();
  }
}

class Mio99 extends Animation {

  public Mio99(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }


  public void display() {
    y = (float(mouseX)/width*2%1);
    y = getTime();
    getTime();
    pushMatrix();
    translate(position.x, position.y);

    pushStyle();
    for (int i = 0; i< numEl; i++) {
      pushMatrix();
      //sin(y*PI)*float(i)/numEl*rad2
      translate(sin(y*TWO_PI)*float(i)/numEl*rad2, (float(i)/numEl*rad2*sin(y*PI)));
      translate(0, rad2*float(i)/numEl);
      rect(0, 0, 1, 1);
      if (i==numEl-1) ellipse(0, 0, rad3, rad3);
      popMatrix();
    }

    popStyle();

    popMatrix();
  }
}
class Mio100 extends Animation {


  public Mio100(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);

    float  val=sin((TWO_PI*y));

    fill(fill);
    for (int i=0; i <=numEl; i++) {
      int mult = 1;
      if (i%2==1) mult*=-1; 

      float positionX = getPosition(i, numEl);
      float positionY = 0;
      float sizeL = rad3;
      positionX  += positionX * val *mult*.2;
      rect(positionX, positionY, sizeL, sizeL);
    }
    popStyle();
    popMatrix();
  }
}

class Mio101 extends Animation {


  public Mio101(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);



    fill(fill);


    float sizeL = rad2;
    //positionX  += positionX * val *mult*.25;
    rect(0, 0, sizeL, sizeL*sin(TWO_PI*y));

    popStyle();
    popMatrix();
  }
}

class Mio102 extends Animation {

  public Mio102(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    rotate(PI/4);

    stroke(fill);
    noFill();

    float sizeL = rad3*2;
    float div = sizeL /numEl;
    float mult = sin(y*TWO_PI);

    for (int i = 0; i< numEl; i++) {
      float val = float(i)/numEl;

      sizeL +=mult*div*val*3;
      ellipse(0, 0, sizeL, sizeL);
    }
    popStyle();
    popMatrix();
  }
}

class Mio103 extends Animation {

  public Mio103(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);
    float  dist=sin((TWO_PI*y));


    for (int i=0; i < numEl; i++) {

      int mult = 1;

      if (i%2==1) mult*=-1; 

      float positionX = getPosition(i, numEl+1);
      positionX+=2;
      float positionY =0;

      float sizeL = lenght;
      sizeL -=jump3*dist*mult;
      rectMode(CENTER);
      rect(positionX+sizeGrid*.5, positionY, thick2, sizeL);
    }
    popStyle();
    popMatrix();
  }
}

class Mio104 extends Animation {

  public Mio104(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);
    float  dist=sin((PI*y));


    for (int i=0; i < numEl; i++) {

      int mult = 1;

      if (i%1==1) mult*=-1; 

      float positionX = getPosition(i, numEl);
      positionX+=2;
      float positionY =0;

      float sizeL = lenght;
      sizeL *=jump3*dist*mult*.4;
      rectMode(CORNER);
      rotate(PI);
      rect(positionX, positionY-sizeGrid*.3, thick2*.5, sizeL);
    }
    popStyle();
    popMatrix();
  }
}

class Mio105 extends Animation {

  public Mio105(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);
    float  dist=sin((PI*y));


    for (int i=0; i < numEl; i++) {

      int mult = 1;

      if (i%1==1) mult*=-1; 


      ;

      float sizeL = lenght;
      sizeL *=jump3*dist*mult*.7;
      rectMode(CENTER);
      rotate(PI*dist);
      rect(0, 0, thick2*.5, sizeL);
    }
    popStyle();
    popMatrix();
  }
}

class Mio106 extends Animation {

  public Mio106(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);
    float  dist=sin((TWO_PI*y));


    for (int i=0; i < numEl; i++) {

      int mult = 1;

      if (i%2==1) mult*=-1; 

      float positionY = getPosition(i, numEl+1);
      positionY+=2;
      float positionX =0;

      float sizeL = lenght;
      sizeL -=jump3*dist*mult;
      rectMode(CENTER);
      rect(positionX, positionY, sizeL, 1);
    }
    popStyle();
    popMatrix();
  }
}

class Mio107 extends Animation {

  public Mio107(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);



    for (int i=0; i < numEl; i++) {

      float positionX = getPosition(i, 2);

      float positionY =0;


      rotate(y*PI);
      rectMode(CENTER);
      rect(positionX, positionY, 1, 1);
    }
    popStyle();
    popMatrix();
  }
}

class Mio108 extends Animation {

  public Mio108(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);



    for (int i=0; i < numEl; i++) {



      float positionY =0;

      float sizeL = lenght;
      rotate(y*PI);
      rectMode(CENTER);
      rect(0, positionY, sizeL*1.3, 1);
    }
    popStyle();
    popMatrix();
  }
}

class Mio109 extends Animation {

  public Mio109(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);
    float dist = sin(y*PI);


    for (int i=0; i < numEl; i++) {

      float positionY =0;


      rotate(y*PI*.5*dist);
      rectMode(CENTER);
      rect(sizeGrid*.5, positionY, 1, 1);
    }
    popStyle();
    popMatrix();
  }
}

class Mio110 extends Animation {

  public Mio110(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);

    float a = getMyInter(y, 0, 2);
    float b = getMyInter(y, 1, 2);
    rotate(y*PI*b);
    for (int i=0; i < numEl; i++) {



      float positionY =0;

      float sizeL = lenght;
      rotate(y*HALF_PI*a);

      fill(255, 0, 255, 255*(1-y));
      rectMode(CORNER);
      rect(0, positionY, sizeL*.7, 1);
    }
    popStyle();
    popMatrix();
  }
}

class Mio111 extends Animation {

  public Mio111(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);



    for (int i=0; i < numEl; i++) {

      float positionX = getPosition(i, 2);
      positionX*=.8;
      float positionY =0;


      rotate(y*PI);
      rectMode(CENTER);
      if (i%2==0)rect(positionX, positionY, 10, 1);
      else rect(positionX, positionY, 1, 1);
    }
    popStyle();
    popMatrix();
  }
}

class Mio112 extends Animation {

  public Mio112(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    pushStyle();
    translate(position.x, position.y);
    fill(fill);



    for (int i=0; i < numEl; i++) {

      float positionX = getPosition(i, 2);
      positionX*=0.3;
      float positionY =0;


      rotate(y*PI);
      rectMode(CENTER);
      if (i%2==0)rect(positionX, positionY, 20, 1);
    }
    popStyle();
    popMatrix();
  }
}

class Mio113 extends Animation {

  public Mio113(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float  dist=sin((PI/2*y));

    float positionX =0;
    float positionY =0;

    pushStyle();
    for (int i=0; i < numEl; i++) {

      float move = 1-((float)i/(float)numEl);
      move+=dist;
      move=move%1;
      float sizeL = rad3;
      positionX = sizeGrid/4+getPosition(i, numEl);
      float rise = abs(map(move, 0, 1, -1, 1));
      noStroke();
      fill(fill, (1-rise)*255);

      rectMode(CENTER);
      rect(positionX+sizeGrid*.35, positionY, sizeL*.5, sizeL*2);
    }
    popStyle();

    popMatrix();
  }
}

class Mio114 extends Animation {

  public Mio114(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float  dist=sin((PI/2*y));

    float positionX =0;
    float positionY =0;

    pushStyle();
    for (int i=0; i < numEl; i++) {

      float move = 1-((float)i/(float)numEl);
      move-=dist;
      move=move%1;
      float sizeL = rad3;
      positionX = getPosition(i, numEl);
      float rise = abs(map(move, 0, 1, -1, 1));
      noStroke();
      fill(fill, (1-rise)*255);

      rectMode(CENTER);

      rect(positionX, positionY, sizeL*.5, sizeL*.5);
    }
    popStyle();

    popMatrix();
  }
}

class Mio115 extends Animation {

  public Mio115(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float  dist=sin((PI/2*y));

    float positionX =0;
    float positionY =0;

    pushStyle();
    for (int i=0; i < numEl; i++) {

      float move = 1-((float)i/(float)numEl);
      move-=dist;
      move=move%1;

      positionX = getPosition(i, numEl);

      noStroke();


      rectMode(CORNER);

      positionY=sizeGrid*.5*sin(y*TWO_PI)*i/numEl;
      rotate(PI);
      rect(positionX, positionY, 1, 1);
    }
    popStyle();

    popMatrix();
  }
}

class Mio116 extends Animation {

  public Mio116(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }

  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);

    float positionX =0;
    float positionY =0;

    pushStyle();

    rectMode(CENTER);

    positionY=sizeGrid*.5*sin(y*TWO_PI);
    rect(positionX, positionY, 20, 1);

    popStyle();

    popMatrix();
  }
}

class Mio117 extends Animation {

  public Mio117(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }
  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    rotate(PI);




    pushStyle();
    for (int i=numEl+1; i >0; i--) {
      /*float marginL = (TWO_PI*rad2/numEl)*.6;
       rad3 = (TWO_PI*rad2)/(numEl+marginL);*/



      float a=  getMyInter2(y, i, numEl);  

      float radO = rad3;

      float angle = float(i)/numEl*-PI;

      pushMatrix();
      pushMatrix();
      //
      popMatrix();
      rectMode(CENTER);


      rotate(angle);
      rotate((1-sin(a*PI))*(PI/2));
      translate(radO*sin(angle)*4, 0);
      float fillGrad = getFillGrad(a, PI);
      fill(fill, fillGrad);

      /*float colorVar = getColorVar(a, PI/4); 
       fill(fill, colorVar);*/

      ellipse(0, 0, 1.5, 1.5);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}

class Mio118 extends Animation {

  public Mio118(PVector pos, int numElL) {
    position.x = pos.x;
    position.y = pos.y;
    numEl = numElL;
  }
  public void display() {
    y = getTime();
    pushMatrix();
    translate(position.x, position.y);
    rotate(PI);




    pushStyle();
    for (int i=numEl+1; i >0; i--) {
      /*float marginL = (TWO_PI*rad2/numEl)*.6;
       rad3 = (TWO_PI*rad2)/(numEl+marginL);*/



      float a=  getMyInter2(y, i, numEl);  

      float radO = rad3;

      float angle = float(i)/numEl*PI;

      pushMatrix();
      pushMatrix();
      //
      popMatrix();
      rectMode(CENTER);


      rotate(angle);
      rotate((1-sin(a*PI))*(PI/2));
      translate(radO*sin(angle)*3, 0);
      float fillGrad = getFillGrad(a, PI);
      fill(fill, fillGrad);

      /*float colorVar = getColorVar(a, PI/4); 
       fill(fill, colorVar);*/

      rect(0, 0, 15, .5);
      popMatrix();
    }
    popStyle();

    popMatrix();
  }
}