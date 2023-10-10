// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var highscoreEl = document.querySelector(".scores");
var timerEl = document.querySelector("#time"); 
var startBtn = document.querySelector("#start"); 
var questionsEl = document.querySelector("#questions"); 
var choicesEl = document.querySelector("#choices"); 
var submitBtn = document.querySelector("#submit"); 
var feedbackEl = document.getElementById("feedback");

// Function to start quiz
function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen"); 
  startScreenEl.classList.add("hide");

  // un-hide questions section
  questionsEl.classList.remove("hide");

  // start timer
timerId = setInterval(countdown, 1000);
countdown();
  
// Get the first question from questions.js
  getQuestion();
}

// Function to update time and to end the quiz at 0 seconds
function countdown() {
if (time <= 0) {
  clearInterval(timerId);
  endQuiz();
} else {
  // Display time remaining
  timerEl.textContent = time + ' seconds remaining';
  time--;
  }
}

// Displays a question
function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex]; 

  // update title with current question
  var titleEl = document.getElementById("question-title"); 
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.textContent = "";

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

//Function to handle events by user input
function questionClick(event) {
    // Get the user's choice from the clicked button
  var userChoice = event.target.value;

  // Get the correct answer for the current question
  var correctAnswer = questions[currentQuestionIndex].answer;

  // Check if the user's choice is correct
  if (userChoice === correctAnswer) {
    // Display "Correct" feedback
    feedbackEl.textContent = "Correct";
  } else {
    // Penalize time for incorrect answers
    time -= 5;
    if (time < 0) {
      time = 0;
    }
    // Display "Incorrect" feedback
    feedbackEl.textContent = "Incorrect";
  }

  // Move to the next question
  currentQuestionIndex++;

  // Check if we've run out of questions
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

// Function to End the quiz
function endQuiz() {
  // stop timer
  clearInterval(timerId);

  // show end screen
var endScreenEl = document.getElementById("end-screen");
endScreenEl.classList.remove("hide");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide questions section
  questionsEl.classList.add("hide");
}

//Function to save the Highscore
function saveHighscore() {
  // get value of input box
  var initials = document.getElementById("initials").value;


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
submitBtn.addEventListener("click", saveHighscore);

// user clicks button to start quiz
startBtn.addEventListener("click", startQuiz);

// user clicks on element containing choices



