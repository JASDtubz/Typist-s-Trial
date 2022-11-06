/* Version 2022.11.05.19.03 */

function setKeyDownListener() {
  window.addEventListener("keydown", function(e) { keyDown(e.key); })
}

function keyDown(key) {
  document.getElementById("input").textContent = document.getElementById("input").textContent + key;
}
