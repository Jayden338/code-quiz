function printHighscores() {
  // either get scores from localstorage or set to empty array
var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
// sort highscores by score property in descending order
highscores.sort(function (a, b) {
  return b.score - a.score;
}); 

  for (var i = 0; i < highscores.length; i++) { 
    var highscore = highscores
    // create li tag for each high score 
var li = document.createElement ("li");
li.textContent = highscore.initials + " - " + highscore.score;

   // display on page 
highscoresList.appendChild(li);
  }
}

//Clears Highscore
function clearHighscores() {
window.localStorage.removeItem("highscores-list"); 
highscoresList.createElement ("");
}
//Clears display
document.getElementById("clear").addEventListener("click", clearHighscores);

// run function when page loads
printHighscores();
