// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var highscoreEl = document.querySelector("#scores");
var timerEl = document.querySelector("#time"); 
var startBtn = document.querySelector("#start"); 
var questionsEl = document.querySelector("#questions"); 
var choicesEl = document.querySelector("#choices"); 
var submitBtn = document.querySelector("#submit"); 


function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen"); 
  startScreenEl.setAttribute("class", "hide"); 

  // un-hide questions section
  questionsEl.removeAttribute("class"); 

  // start timer
timerId = setInterval(countdown, 1000);
countdown();
}

function countdown() {
if (time <= 0) {
  clearInterval(timerId);
  endQuiz();
} else {
  // Display time remaining
  timerEl.textContent = time + ' seconds remaining';
  time--;
}

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex]; 

  // update title with current question
  var titleEl = document.getElementById("question-title"); 
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.textContent = ("questions");

  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
  // create new button for each choice 
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceBtn.addEventListener("click", questionClick);


    // display on the page
    choicesEl.appendChild(choiceBtn);
  });
}

function questionClick(event) {
  

  // if the clicked element is not a choice button, do nothing.
 
  // check if user guessed wrong
  
    // penalize time
 

    // display new time on page
timerEl.textContent = time;

    // play "wrong" sound effect
   

  //else 
    // play "right" sound effect
   

  // flash right/wrong feedback on page for half a second

  // move to next question


  // check if we've run out of questions

}

function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen
var endScreenEl = document.getElementById("end-screen");
endScreenEl.removeAttribute("class");

  // show final score


  // hide questions section
questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  // update time
  time--; 
  timerEl.textContent = time;
  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box
 

  // make sure value wasn't empty
 
    // get saved scores from localstorage, or if not any, set to empty array
   

    // format new score object for current user
    

    // save to localstorage
  

    // redirect to next page
   
  
}

function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === 'Enter' || event.keyCode === 13) 
  saveHighscore
}

// user clicks button to submit initials


// user clicks button to start quiz
startBtn.addEventListener("click", startQuiz);

// user clicks on element containing choices



