// This sketch shows how to use the Amplitude class to analyze a
// stream of sound. In this case a sample is analyzed. Smooth_factor
// determines how much the signal will be smoothed on a scale
// form 0-1.

// Entire class commented out: requires processing.sound.* which conflicts with Minim library.
// All method bodies were already commented out — this class was unused.

/*
import processing.sound.*;

class Amplitude {
// Declare the processing sound variables
SoundFile sample;
Amplitude rms;

// Declare a scaling factor
float scale=5;

// Declare a smooth factor
float smooth_factor=0.25;

// Used for smoothing
float sum;

public Amplitude(){
  this.setup();
}

public void setup() {
    //Load and play a soundfile and loop it
    sample = ;
    sample.loop();

    // Create and patch the rms tracker
    rms = new Amplitude(this);
    rms.input(sample);
}

public void draw() {
    // Set background color, noStroke and fill color
    background(125,255,125);
    noStroke();
    fill(255,0,150);

    // smooth the rms data by smoothing factor
    sum += (rms.analyze() - sum) * smooth_factor;

    // rms.analyze() return a value between 0 and 1. It's
    // scaled to height/2 and then multiplied by a scale factor
    float rms_scaled=sum*(height/2)*scale;

    // We draw an ellispe coupled to the audio analysis
    ellipse(width/2, height/2, rms_scaled, rms_scaled);
}

}
*/
