CodeBox codeBox;

class CodeBox {
  String code = "";
  int padding = 16;
  int lineHeight = 16;

  int boxX, boxY, boxW, boxH;
  int btnX, btnY, btnW, btnH;

  boolean copied = false;
  int copiedTimer = 0;
  int lastLang = -1;

  public CodeBox() {
    boxW = 600;
    boxH = 200;
    boxX = (width - boxW) / 2;
    boxY = int(height / 3.5) + 6 * 35 + 20;

    btnW = 70;
    btnH = 26;
    btnX = boxX + boxW - btnW - padding;
    btnY = boxY + 8;
  }

  // Wrap a single line to fit within maxWidth
  String[] wrapLine(String line, float maxWidth) {
    ArrayList<String> wrapped = new ArrayList<String>();
    while (textWidth(line) > maxWidth && line.length() > 0) {
      // Find the last char that fits
      int cut = line.length();
      while (cut > 1 && textWidth(line.substring(0, cut)) > maxWidth) {
        cut--;
      }
      wrapped.add(line.substring(0, cut));
      line = line.substring(cut);
    }
    if (line.length() > 0) wrapped.add(line);
    return wrapped.toArray(new String[0]);
  }

  void updateCode() {
    if (recording.valid) {
      getPolynom = new GetPolynom();
      code = getPolynom.getPoly(GUI.switchExport);
    } else {
      code = "// No valid recording data yet.\n// Record a mouse flow first.";
    }
    lastLang = GUI.switchExport.num;
  }

  void draw() {
    if (GUI.showExportA <= 0) {
      lastLang = -1;
      return;
    }

    if (GUI.switchExport.num != lastLang) {
      updateCode();
      copied = false;
      copiedTimer = 0;
    }

    float a = GUI.showExportA * 255;
    float maxTextW = boxW - padding * 2;

    pushMatrix();
    pushStyle();
    translate(0, 0, 1);

    // Code box background
    noStroke();
    fill(0, 0, 25, a);
    rect(boxX, boxY, boxW, boxH, 4);

    // Border
    noFill();
    stroke(0, 0, 50, a);
    strokeWeight(1);
    rect(boxX, boxY, boxW, boxH, 4);

    // Code text with wrapping
    fill(0, 0, 190, a);
    noStroke();
    textFont(font);
    textSize(12);
    textAlign(LEFT, TOP);

    String[] rawLines = code.split("\n");
    int textY = boxY + padding + btnH + 6;
    int maxTextY = boxY + boxH - padding;
    int row = 0;

    for (int i = 0; i < rawLines.length; i++) {
      String[] wrapped = wrapLine(rawLines[i], maxTextW);
      for (int w = 0; w < wrapped.length; w++) {
        int yPos = textY + row * lineHeight;
        if (yPos + lineHeight > maxTextY) break;
        text(wrapped[w], boxX + padding, yPos);
        row++;
      }
    }

    // Copy button
    boolean hover = hitCopyBtn();
    if (copied && copiedTimer > 0) {
      fill(0, 80, 160, a);
    } else if (hover) {
      fill(0, 0, 70, a);
    } else {
      fill(0, 0, 40, a);
    }
    stroke(0, 0, 60, a);
    strokeWeight(1);
    rect(btnX, btnY, btnW, btnH, 3);

    // Copy button label
    fill(0, 0, 220, a);
    textSize(11);
    textAlign(CENTER, CENTER);
    if (copied && copiedTimer > 0) {
      text("COPIED", btnX + btnW / 2, btnY + btnH / 2);
      copiedTimer--;
    } else {
      text("COPY", btnX + btnW / 2, btnY + btnH / 2);
    }

    popStyle();
    popMatrix();
  }

  boolean hitCopyBtn() {
    return mouseX >= btnX && mouseX <= btnX + btnW &&
           mouseY >= btnY && mouseY <= btnY + btnH;
  }

  boolean checkHit() {
    if (GUI.showExportA <= 0) return false;

    if (hitCopyBtn()) {
      if (recording.valid) {
        cp.copyString(code);
        copied = true;
        copiedTimer = 90;
        textField.enter("Copied to clipboard.");
      }
      return true;
    }

    return false;
  }
}
