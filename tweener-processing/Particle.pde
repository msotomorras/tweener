Particles particles;

class Particles {

  ArrayList<Particle> particles;    // An arraylist for all the particles
  ArrayList<ParticleRot> particlesRot;    // An arraylist for all the particles
  public Particles() {
    particles = new ArrayList<Particle>();
    particlesRot = new ArrayList<ParticleRot>();
  }

  void addParticles(int x, int y, int num) {
    for (int i=0; i <num; i++) {
      Particle p = new Particle(new PVector(x, y), i);
      particles.add(p);
    }
  }
  void addParticlesRot(int x, int y, int num) {
    for (int i=0; i <num; i++) {
      ParticleRot p = new ParticleRot(new PVector(x, y), i);
      particlesRot.add(p);
    }
  }

  void execute() {
    for (int i = 0; i <= particles.size ()-1; i++) {
      Particle p = particles.get(i);
      p.run();
      if (p.lifespan<0 ) {
        particles.remove(i);
      }
    }
    for (int i = 0; i <= particlesRot.size ()-1; i++) {
      ParticleRot p = particlesRot.get(i);
      p.run();
      if (p.lifespan<0 ) {
        particlesRot.remove(i);
      }
    }
  }
}



class Particle {
  PVector location;
  PVector origin;
  PVector target;
  float acceleration;
  float lifespan;



  Particle(PVector l, int index) {
    acceleration = random(0.01, 0.02)*0.25;
    acceleration = 0.01;

    location = l.copy();
    origin = l.copy();

    float a = noise(frameCount*0.001+index*0.1)*TWO_PI*16;
    PVector dir = new PVector(cos(a), sin(a));
    float size=300;
    size*=random(0.5, 1);
    target = new PVector(origin.x+ dir.x*size, origin.y+ dir.y*size, origin.z);

    lifespan = 1.0;
  }

  void run() {
    update();
    display();
  }

  // Method to update location
  void update() {

    float s = recording.polyFitter.solve(1-lifespan);
    lifespan -= acceleration;
    
    float x = lerp(origin.x, target.x, s);
    float y = lerp(origin.y, target.y, s);
    float z = lerp(origin.x, target.x, s);   
    location=new PVector(x, y, z);

  }

  // Method to display
  void display() {
    pushMatrix();
    pushStyle();
    stroke(v.h1);
    point(location.x, location.y);
    stroke(v.h2);
    textAlign(CENTER);
    textSize(v.s1);
    text(lifespan, location.x, location.y+15);
    popStyle();
    popMatrix();
  }
}


class ParticleRot {

  PVector origin;
  PVector location;  
  float start;
  float radius;
  float acceleration;
  float lifespan;
  boolean invert=false;
  



  ParticleRot(PVector l, int index) {
    acceleration = random(0.01, 0.02)*0.25;
    origin = l.copy();
    radius = index*10+ random(-5, 5);

    lifespan = 1.0;

    start = random(2*PI);
    if (index%2==0) invert=true;
    location=new PVector(0, radius, 0);
  }

  void run() {
    update();
    display();
  }


  void update() {

    float s = recording.polyFitter.solve(1-lifespan);
    lifespan -= acceleration;
    
    if (invert) s=1-s;
    float x = origin.x + cos(s*2*PI - start) * radius;
    float y = origin.y + sin(s*2*PI - start) * radius;   

    float z = 0; 
    location=new PVector(x, y, 0);

    
  }

  // Method to display
  void display() {
    pushMatrix();
    pushStyle();
    textSize(v.s1);
    textAlign(CENTER);
    stroke(v.h1);
    point(location.x, location.y);
    stroke(v.h2);
    text(lifespan, location.x, location.y+15);
    popStyle();
    popMatrix();
  }
}