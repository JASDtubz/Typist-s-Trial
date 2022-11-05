// All assets from Code.org
// Instructions found on initial screen
var keys = "";
var time = 0;
var clears = 0;
var bestWarmupTime = Infinity;
var bestTrialTime = Infinity;
var prompts = getColumn("prompts", "prompt");
var promptModes = getColumn("prompts", "mode");
var applicablePrompts = [];
var mode = "hub";

function wrongAnswer() {
  playSound("sound://category_alerts/retro_game_health_pickup_6.mp3", false);
  setProperty("inputLabel", "background-color", rgb(250,190,180));
  setTimeout(function() {
    setProperty("inputLabel", "background-color", "white");
  }, 500);
}

function correctAnswer() {
  playSound("sound://category_alerts/retro_game_health_pickup_5.mp3", false);
  setProperty("inputLabel", "background-color", rgb(180,250,190));
  setTimeout(function() {
    setProperty("inputLabel", "background-color", "white");
  }, 500);
}

function modeSwap() {
  playSound("sound://category_alerts/retro_game_health_pickup_5.mp3", false);
  setProperty("inputLabel", "background-color", rgb(245,255,165));
  setTimeout(function() {
    setProperty("inputLabel", "background-color", "white");
  }, 500);
}

function checkCorrect(input) {
  if(mode == "hub") {
    if(input == "Warm-up.") {
      modeSwap();
      mode = "warmup";
      setText("timeLabel", "Time: 0s");
      setText("clearsLabel", "Clears: 0/5");
      for(var i = 0; i < prompts.length; i++) {
        if(promptModes[i] == mode) {
          appendItem(applicablePrompts, prompts[i]);
        }
      }
      var a = randomNumber(0, applicablePrompts.length);
      setText("promptLabel", applicablePrompts[a]);
      removeItem(applicablePrompts, a);
    } else if(input == "Trial.") {
      modeSwap();
      mode = "trial";
      setText("timeLabel", "Time: 0s");
      setText("clearsLabel", "Clears: 0/5");
      for(var ii = 0; ii < prompts.length; ii++) {
        if(promptModes[ii] == mode) {
          appendItem(applicablePrompts, prompts[ii]);
        }
      }
      var b = randomNumber(0, applicablePrompts.length-1);
      setText("promptLabel", applicablePrompts[b]);
      removeItem(applicablePrompts, b);
    } else {
      wrongAnswer();
    }  
  } else if(mode == "warmup") {
    if(input == getText("promptLabel")) {
      correctAnswer();
      clears++;
      setText("clearsLabel", "Clears: " + clears + "/5");
      var c = randomNumber(0, applicablePrompts.length-1);
      setText("promptLabel", applicablePrompts[c]);
      removeItem(applicablePrompts, c);
      if(clears == 5) {
        if(time <= bestWarmupTime) {
          bestWarmupTime = time;
          setText("warmupBestTimeLabel", "Warm-Up Best Time: " + time + "s");
        }
        modeSwap();
        applicablePrompts = [];
        time = 0;
        clears = 0;
        mode = "hub";
        setText("promptLabel", "Well done, you're ready for trial mode! Type 'Warm-up.' again to try for a better time or 'Trial.' for the real deal. Good luck!");
        setText("clearsLabel", "Clears: ___");
        setText("timeLabel", "Time: ___");
      }
    } else {
      wrongAnswer();
    }
  } else if(mode == "trial") {
    if(input == getText("promptLabel")) {
      correctAnswer();
      clears++;
      setText("clearsLabel", "Clears: " + clears + "/5");
      var d = randomNumber(0, applicablePrompts.length-1);
      setText("promptLabel", applicablePrompts[d]);
      removeItem(applicablePrompts, d);
      if(clears == 5) {
        if(time <= bestTrialTime) {
          bestTrialTime = time;
          setText("trialBestTimeLabel", "Trial Best Time: "
          + time + "s");
        }
        modeSwap();
        applicablePrompts = [];
        time = 0;
        clears = 0;
        mode = "hub";
        setText("promptLabel", "Excellent job, you're a keyboard master! Type 'Warm-up.' take a step back or 'Trial.' to try for a better time. Good luck!");
        setText("clearsLabel", "Clears: ___");
        setText("timeLabel", "Time: ___");
      }
    } else {
      wrongAnswer();
    }
  }
}

onEvent("mainScreen", "keypress", function(event) {
  keys += event.key;
  if((keys.includes(".") == true) 
  || (keys.includes("!") == true) 
  || (keys.includes("?") == true)){ 
    checkCorrect(keys);
    keys = "";
  }
  setText("inputLabel", keys);
});

timedLoop(1000, function() {
  if((mode == "warmup") || (mode == "trial")) {
    time = time + 1;
    setText("timeLabel", "Time: " + time + "s");
  }
});

onEvent("resetKey", "mouseover", function( ) {
  keys = "";
  applicablePrompts = [];
  time = 0;
  clears = 0;
  bestWarmupTime = Infinity;
  bestTrialTime = Infinity;
  mode = "hub";
  setText("promptLabel", "Welcome to the Typist's Trial, this will test your ability to accurately and efficiently replicate displayed text. To begin, please type 'Warm-up.' for a simpler challenge or 'Trial.' for the real deal. Good luck!");
  setText("inputLabel", "You'll see your typing here, end entries with a punctuation mark to submit. There is no deleting, precision is key. Hover your mouse over the reset button to return to this hub at any time.");
  setText("clearsLabel", "Clears: ___");
  setText("timeLabel", "Time: ___");
});
