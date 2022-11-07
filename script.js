/* Version 2022.11.07.08.10 */

var home = true;
var trial = null;
var prompts = [
  [
    "001000101 110100100.",
    "Buy yourself a copy of the APCS Principles Prep Book.",
    "Don't expect a WPM score.",
    "Five dollar foot long.",
    "Have you heard of the hit game Among Us?",
    "Hello, world!",
    "I hope you know how to use the international keyboard.",
    "The quick brown fox jumps over the lazy dog.",
    "The record time on the trial is 214 seconds.",
    "What's the longest town name in Wales?"
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
    
    if (sentance == null && typed == "Warm-up." || typed == "Trial.") {
      let ind = typed == "Trial" ? 1 : 0;
      let i = Math.floor(Math.random() * prompts[ind].length);
      
      trial = false;
      sentance = prompts[ind][i];
      text.textContent = sentance;
      input.style.backgroundColor = "#7f7f1f";
      
      indexes.push(i);
      
      setTimeout(function() {
        input.style.backgroundColor = "#112233";
      }, 500);
    } else if (sentance != null && typed == sentance) {
      if (indexes.length == 5) {
        home = true;
        sentance = null;
        trial = null;
        indexes = [];
        text.textContent = "Well done, you're ready for trial mode! Type 'Warm-up.' again to try for a better time or 'Trial.' for the real deal. Good luck!";
      } else {
        let ind = trial ? 1 : 0;
        let b = true;
        let i = 0;
        
        while (b) {
          i = Math.floor(Math.random() * prompts[ind].length);
          b = false;
          
          for (let j = 0; j < indexes.length; j++) {
            if (indexes[j] == i) {
              b = true;
            }
          }
        }
        
        sentance = prompts[ind][i];
        text.textContent = sentance;
        input.style.backgroundColor = "#1f7f1f";
        
        indexes.push(i);
        
        setTimeout(function() {
          input.style.backgroundColor = "#112233";
        }, 500);
      }
    } else {
      input.style.backgroundColor = "#7f1f1f";
      
      setTimeout(function() {
        input.style.backgroundColor = "#112233";
      }, 500);
    }
  }
}
