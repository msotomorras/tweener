import netP5.*;
import oscP5.*;

Osc osc;
NetAddress myRemoteLocation;

class Osc {
  OscP5 oscP5;

  PVector data;
  boolean receiving=false;

  public Osc() {
    this.setup();
  }

  void setup() {
    /* start oscP5, listening for incoming messages at port 8000 */
    oscP5 = new OscP5(this, 8000);

    /* myRemoteLocation is a NetAddress. a NetAddress takes 2 parameters,
     * an ip address and a port number. myRemoteLocation is used as parameter in
     * oscP5.send() when sending osc packets to another computer, device, 
     * application. usage see below. for testing purposes the listening port
     * and the port of the remote location address are the same, hence you will
     * send messages back to this sketch.
     */
    myRemoteLocation = new NetAddress("127.0.0.1", 8000);

    data = new PVector(0, 0, 0);
  }

  void updateReceiving() {
    receiving = false;
  }

  /* incoming osc message are forwarded to the oscEvent method. */
  void oscEvent(OscMessage theOscMessage) {
    receiving = true;

    if (theOscMessage.checkTypetag("f")) {
      /* parse theOscMessage and extract the values from the osc message arguments. */
      data.x = theOscMessage.get(0).floatValue();  // get the first osc argument
      data.y = 0; // get the second osc argument
      data.z = 0; // get the third osc argument

      return;
    }
    if (theOscMessage.checkTypetag("ff")) {
      /* parse theOscMessage and extract the values from the osc message arguments. */
      data.x = theOscMessage.get(0).floatValue();  // get the first osc argument
      data.y = theOscMessage.get(1).floatValue(); // get the second osc argument
      data.z = 0; // get the third osc argument

      return;
    }

    if (theOscMessage.checkTypetag("fff")) {
      /* parse theOscMessage and extract the values from the osc message arguments. */
      data.x = theOscMessage.get(0).floatValue();  // get the first osc argument
      data.y = theOscMessage.get(1).floatValue(); // get the second osc argument
      data.z = theOscMessage.get(2).floatValue(); // get the third osc argument

      return;
    }


    if (GUI.switchMain.num == 0 && isRecording && !recording.edit && GUI.switchEdit.num==2) recording.enterNewValue(new PVector(osc.data.x, osc.data.y, osc.data.z));
  }
}