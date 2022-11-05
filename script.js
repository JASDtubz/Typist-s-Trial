/* Version 2022.11.05.18.53 */

function setKeyDownListener() {
  window.addEventListener("keydown", function(e) { keyDown(e.key); })
}

function keyDown(key) {
  alert("Key pressed: " + key);
}
