GetPolynom getPolynom;

void getPolynomExported() {
  if(recording.valid){
  getPolynom = new GetPolynom();
  String exported = getPolynom.getPoly(GUI.switchExport);
  println(exported);
  cp.copyString(exported);
  textField.enter("Copied to clipboard.");
  } else {
  textField.enter("Recording data is not valid. Please record a mouse flow first.");
  }
}
class GetPolynom {

  String polynom ="";
  
  String function = "";
  String multiplicate = "";

  public GetPolynom() {



    for (int j = 0; j<=recording.polyFitter.grades; j++) {
      polynom += recording.polyFitter.coeffF[j]+"*"+getMultiplicate(j)+"+";
    }
    polynom = polynom.substring(0, polynom.length()-1);
    
  }


  String getMultiplicate(int n) {
    multiplicate = " ";

    for (int i = 0; i<=n; i++) {

      if (i==0) multiplicate += "1.0 *";
      else {
        multiplicate += "x*";
      }
    }
    multiplicate = multiplicate.substring(0, multiplicate.length()-1);
    return multiplicate;
  }

  String getPolyHLSL() {

    String function = "float getFunction(float x){\n"+
      "  x = abs(x);\n"+
      "  float y = "+ polynom+";"+"\n"+
      "  return y;\n"+
      "}";
    return function;
  }

  String getPolyGLSL() {
    String function = "float getFunction(float x){\n"+
      "  float y = "+ polynom+";"+"\n"+
      "  return y;\n"+
      "}";
    return function;
  }

  String getPolyJava() {
    String function = "float getFunction(float x){\n"+
      "  float y = "+ polynom+";"+"\n"+
      "  return y;\n"+
      "}";
    return function;
  }
  
  String getPolyJavaScript() {
    String function = "var getFunction(var x){\n"+
      "  var y = "+ polynom+";"+"\n"+
      "  return y;\n"+
      "}";
    return function;
  }

  String getPolyCp() {
    String function = "float getFunction(float x){\n"+
      "  float y = "+ polynom+";"+"\n"+
      "  return y;\n"+
      "}";
    return function;
  }

  String getPolyCs() {
    String function = "float getFunction(float x){"+
      "  double y = "+ polynom+";"+"\n"+
      "  return (float) y;\n"+
      "}";
    return function;
  }

  String getPoly(Switch switchExp) {
    if (switchExp.num ==0) {
      function = getPolyHLSL();
    }
    if (switchExp.num ==1) {
      function = getPolyGLSL();
    }
    if (switchExp.num ==2) {
      function = getPolyJava();
    }
    if (switchExp.num ==3) {
      function = getPolyJavaScript();
    }
    if (switchExp.num ==4) {
      function = getPolyCp();
    }
    if (switchExp.num ==5) {
      function = getPolyCs();
    }


    return function;
  }

  String getLanguageSelected(Switch switchExp) {
    String stringExp ="";
    if (switchExp.num ==0) {
      stringExp="Selected language: HLSL";
    }
    if (switchExp.num ==1) {
      stringExp="Selected language: GLSL";
    }
    if (switchExp.num ==2) {
      stringExp="Selected language: Java";
    }
    if (switchExp.num ==3) {
      stringExp="Selected language: JavaScript";
    }
    if (switchExp.num ==4) {
      stringExp="Selected language: C++";
    }
    if (switchExp.num ==5) {
      stringExp="Selected language: C#";
    }
    return stringExp;
  }
}