// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var highscoreEl = document.querySelector(".scores");
var timerEl = document.querySelector(".time"); 
var startBtn = document.querySelector(".start"); 
var questionsEl = document.querySelector(".questions"); 
var choicesEl = document.querySelector(".choices"); 
var submitBtn = document.querySelector(".submit"); 


function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen"); 
  startScreenEl.setAttribute("class", "hide"); 

  // un-hide questions section
  questionsEl.removeAttribute("class"); 
}
  // start timer
var timeLeft = 70;
var elem = document.getElementById('time');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    endQuiz();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
  
  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = question[currentQuestionIndex]; 

  // update title with current question
  var titleEl = document.getElementById("question-title"); 
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = "";

  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice 
    var choice = document.createElement("button");
    choice.setAttribute("class", "choice");
    choice.setAttribute("value", choice);

    choice.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choice.onclick = questionClick;

    // display on the page
    choicesEl.appendChild(choice);
  });
}

function questionClick(event) {
  

  // if the clicked element is not a choice button, do nothing.
 
  // check if user guessed wrong
  
    // penalize time
 

    // display new time on page


    // play "wrong" sound effect
   

  //else 
    // play "right" sound effect
   

  // flash right/wrong feedback on page for half a second

  // move to next question


  // check if we've run out of questions

}

function quizEnd() {
  // stop timer
  

  // show end screen


  // show final score


  // hide questions section

}

function clockTick() {
  // update time

  // check if user ran out of time
  
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

}

// user clicks button to submit initials


// user clicks button to start quiz
startBtn.addEventListener("click", startQuiz);

// user clicks on element containing choices



