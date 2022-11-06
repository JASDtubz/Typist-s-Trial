/* Version 2022.11.05.21.50 */

var home = true;

function setKeyDownListener() {
  window.addEventListener("keydown", function(e) {
    keyDown(e.key);
  });
}

function keyDown(key) {
  if (home == true) {
    document.getElementById("input").textConent = "";
    home = false;
  }
  
  if (key.length == 1) {
    document.getElementById("input").textContent = document.getElementById("input").textContent + key;
  }
}
