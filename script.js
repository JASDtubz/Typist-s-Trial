/* Version 2022.11.06.11.42 */

var home = true;
var trial = null;
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
var sentance = null;
var indexes = [];

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
    if (sentance == null && input.textContent == "Warm-up.") {
      let i = Math.floor(Math.random() * prompts[0].length);
      
      trial = false;
      input.textContent = " ";
      sentance = prompts[0][i];
      document.getElementById("text").textContent = sentance;
      
      indexes.push(i);
    }
    else if (sentance == null && input.textContent == "Trial.") {
      trial = true;
    }
    else if (sentance != null && input.textContent == sentance) {
      
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
