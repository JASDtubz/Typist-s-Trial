/* Version 2022.11.05.21.40 */

var home = true;

function setKeyDownListener() {
  window.addEventListener("keydown", function(e) {
    keyDown(e.key);
  });
}

function keyDown(key) {
  if (home) {
    document.getElementById("input").textConent = "";
    home = false;
  }
  
  if (key.length == 1) {
    document.getElementById("input").textContent = document.getElementById("input").textContent + key;
  }
}
