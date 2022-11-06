/* Version 2022.11.05.22.35 */

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
  
  if (key == "." || key == "!" || key == "?") {
    if (document.getElementById("input").textContent == "Warm-up.") {
      
    }
    else if (document.getElementById("input").textContent == "Trial.") {
      
    }
    else {
      document.getElementById("input").textContent = "";
      document.getElementById("input").style.backgroundColor = "#fabeb4";
      setTimeout(function() {
        document.getElementById("input").style.backgroundColor = "#112233";
      }, 500);
    }
  }
}
