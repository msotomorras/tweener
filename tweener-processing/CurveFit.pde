import org.apache.commons.math3.fitting.*;

class PolyFitter {

  PolynomialCurveFitter fitter;
  double[] coeff;
  float[] coeffF;
  int grades=8;
  int testVal=0;
  float minY;
  float maxY;

  boolean valid=false;

  public PolyFitter() {
    fitter = PolynomialCurveFitter.create(grades);
    coeffF=new float[grades+1];

    minY=0;
    maxY=0;
    valid=false;
  }

  float solve(float x) {
    if (!valid) return x;
    double yd=0;
    for (int j = 0; j<= grades; j++) {
      yd += coeffF[j]* pow(x, j) ;
    } 
    return (float)yd;
  }


  public void setMinMax() {

    minY=0;
    maxY=0;
    for (int i=0; i < 100; i++) {
      float x = 1/100.*(float)i;
      float y =solve(x);

      if (i==0) {
        minY=y;
        maxY=y;
      } 

      if (y<minY) minY=y;
      if (y>maxY) maxY=y;
    }
  }


  public void repairFitter() {
    coeffF[0]=0;
    double sumCoef = 0;
    for (int i = 0; i <= grades; i++) {
      sumCoef += coeffF[i];
    }
    double diff=1.0-sumCoef;
    coeffF[1]+=diff;

    valid=true;
  }
}