/* Version 2022.11.06.15.04 */

var home = true;
var trial = null;
var prompts = [
  [
    "001000101 110100100.",
    "Don't expect a WPM score.",
    "Have you heard of the hit game Among Us?",
    "The quick brown fox jumps over the lazy dog.",
    "What's the longest town name in Wales?",
    "The record time on the trial is 214 seconds."
  ],
  [
    
  ]
];
var sentance = null;
var indexes = [];

function loadListeners() {
  window.addEventListener("keydown", function(e) {
    keyDown(e.key);
  });
  window.addEventListener("pointerenter", function(e) {
    
  });
}

function keyDown(key) {
  var input = document.getElementById("input");
  var text = document.getElementById("text");
  
  if (key.length == 1) {
    if (home || input.textContent == " ") {
      input.textContent = "";
      home = false;
    }
    
    input.textContent = input.textContent + key;
  }
  
  if (key == "." || key == "!" || key == "?") {
    var typed = input.textContent;
    
    input.textContent = " ";
    
    if (sentance == null && typed == "Warm-up.") {
      let i = Math.floor(Math.random() * prompts[0].length);
      
      trial = false;
      sentance = prompts[0][i];
      text.textContent = sentance;
      input.style.backgroundColor = "#7f7f1f";
      
      indexes.push(i);
      
      setTimeout(function() {
        input.style.background = "#112233";
      }, 500);
    }
    else if (sentance == null && typed == "Trial.") {
      trial = true;
      
    }
    else if (sentance != null && typed == sentance) {
      if (indexes.length == 5) {
        home = true;
        sentance = null;
        trial = null;
        text.textContent = "Well done, you're ready for trial mode! Type 'Warm-up.' again to try for a better time or 'Trial.' for the real deal. Good luck!";
      }
      else {
        if (trial) {
          
        }
        else {
          let b = true;
          let i = 0;
          
          while (b) {
            i = Math.floor(Math.random() * prompts[0].length);
            b = false;
            
            for (let j = 0; j < indexes.length; j++) {
              if (indexes[j] == i) {
                b = true;
              }
            }
          }
          
          sentance = prompts[0][i];
          text.textContent = sentance;
          
          indexes.push(i);
        }
      }
    }
    else {
      input.style.backgroundColor = "#7f3f1f";
      
      setTimeout(function() {
        input.style.backgroundColor = "#112233";
      }, 500);
    }
  }
}
