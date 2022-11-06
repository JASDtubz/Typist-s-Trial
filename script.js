/* Version 2022.11.05.22.04 */

var home = true;

function setKeyDownListener() {
  window.addEventListener("keydown", function(e) {
    keyDown(e.key);
  });
}

function keyDown(key) { 
  if (key.length == 1) {
    if (home) {
      document.getElementById("input").textContent = "";
      home = false;
  }
    document.getElementById("input").textContent = document.getElementById("input").textContent + key;
  }
}
