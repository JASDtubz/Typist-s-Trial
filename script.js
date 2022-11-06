/* Version 2022.11.05.22.01 */

var home = true;

function setKeyDownListener() {
  window.addEventListener("keydown", function(e) {
    keyDown(e.key);
  });
}

function keyDown(key) { 
  if (key.length == 1) {
    if (home == true) {
      document.getElementById("input").textConent = "";
      home = false;
  }
    document.getElementById("input").textContent = document.getElementById("input").textContent + key;
  }
}
