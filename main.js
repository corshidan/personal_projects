//Declare variables with user move and computer move
const result = document.querySelector(".result");
let gamesWon = 0;
let gamesLost = 0;
let gamesDrawn = 0;
let isContinueGame = true;
let playerMove = "";
let compMove = 0;
let gamesPlayed = 0;
let userName = "";
document.querySelector("#playerinput").addEventListener("change", (e) => {
  userName = e.target.value;
});
document.querySelectorAll(".choice").forEach((e) => {
  e.addEventListener("click", buttonPressed);
});
document.querySelector("#endgame").addEventListener("click", (e) => {
  document.querySelector("div").style.display = "none";
  document.querySelector("#endgame").style.display = "none";
  document.querySelector("#playagain").style.display = "block";
});
document.querySelector("#playagain").addEventListener("click", (e) => {
  document.querySelector("div").style.display = "block";
  resetGame();
});

function computerMove(randomNumber) {
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 0) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getWinner(playerMove, comp) {
  if (playerMove === comp) {
    gamesDrawn++;
    return "The game ended in a draw";
  } else if (playerMove === "rock" && comp === "scissors") {
    gamesWon++;
    return "You have won!";
  } else if (playerMove === "paper" && comp === "rock") {
    gamesWon++;
    return "You have won!";
  } else if (playerMove === "scissors" && comp === "paper") {
    gamesWon++;
    return "You have won!";
  } else {
    gamesLost++;
    return "You have lost!";
  }
}
function buttonPressed(event) {
  compMove = computerMove(Math.floor(Math.random() * 3));
  playerMove = event.target.innerText.toLowerCase();
  gamesPlayed++;
  result.innerText = `${getWinner(playerMove, compMove)} 
  ${userName}'s score:
    - Games Played: ${gamesPlayed}
    - Games Won: ${gamesWon}
    - Games Lost: ${gamesLost}
    - Games Drawn: ${gamesDrawn}`;
}
function resetGame() {
  gamesWon = 0;
  gamesLost = 0;
  gamesDrawn = 0;
  gamesPlayed = 0;
  //   userName = "";
  result.innerText = `
  Score:
    - Games Played: ${gamesPlayed}
    - Games Won: ${gamesWon}
    - Games Lost: ${gamesLost}
    - Games Drawn: ${gamesDrawn}`;
  document.querySelector("#endgame").style.display = "block";
  document.querySelector("#playagain").style.display = "none";
}
