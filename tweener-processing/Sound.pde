import ddf.minim.spi.*;
import ddf.minim.signals.*;
import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.ugens.*;
import ddf.minim.effects.*;

Minim minim;
AudioInput in;
Sound sound;

void startListening(){
  sound.listen();
}

class Sound {

  float volume = 0;
  float vol = 0;
  float oldVol = 0;

  public Sound() {
    minim = new Minim(NextOne110.this);
    in = minim.getLineIn(Minim.MONO,1024,44100);
  }

  void listen() {
    
    float volume = in.mix.level();
    if (oldVol != volume) getVolume();
    oldVol = volume;
    
    
    //method 2
   /*for(int i = 0; i < in.bufferSize() - 1; i++)
  {
    vol = in.left.get(1);
  }
  vol = map(vol, -1,1,0,1);
  if (GUI.switchMain.num == 0 && isRecording && !recording.edit && GUI.switchEdit.num==1) recording.enterNewValue(new PVector(vol, 0, 0));*/
  }
  
 
  void getVolume(){
    vol = in.mix.level();
    if (GUI.switchMain.num == 0 && isRecording && !recording.edit && GUI.switchEdit.num==1) recording.enterNewValue(new PVector(vol, 0, 0));
  }
}