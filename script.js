/* Version 2022.11.06.11.00 */

var home = true;
var prompts = [
  [
    "001000101 110100100.",
    "Don't expect a WPM score.",
    "Have you heard of the hit game Among Us?",
    "The quick brown fox jumps over the lazy dog.",
    "What's the longest town name in Wales?"
  ],
  [
    
  ]
];

function setKeyDownListener() {
  window.addEventListener("keydown", function(e) {
    keyDown(e.key);
  });
}

function keyDown(key) {
  var input = document.getElementById("input");
  
  if (key.length == 1) {
    if (home || input.textContent == " ") {
      input.textContent = "";
      input.style.color = "#fedcba";
      home = false;
    }
    
    input.textContent = input.textContent + key;
  }
  
  if (key == "." || key == "!" || key == "?") {
    if (input.textContent == "Warm-up.") {
      alert(prompts[0][0]);
    }
    else if (input.textContent == "Trial.") {
      
    }
    else {
      input.textContent = " ";
      input.style.backgroundColor = "#7f3f1f";
      input.style.color = "#7f3f1f";
      
      setTimeout(function() {
        input.style.backgroundColor = "#112233";
        
        if (input.textContent == " ") {
          input.style.color = "#112233";
        }
      }, 500);
    }
  }
}
