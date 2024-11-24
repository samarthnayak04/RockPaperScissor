let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");

const message = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = () => {
  const opt = ["rock", "paper", "scissors"];

  const num = Math.floor(Math.random() * 3);
  return opt[num];
};

const drawGame = () => {
  message.innerText = "Game was a draw play again";
  message.style.backgroundColor = "#A02334";
};

const showWinner = (userWin, compChoice, userChoice) => {
  if (userWin) {
    user++;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScorePara.innerText = user;
  } else {
    comp++;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScorePara.innerText = comp;
  }
};
const playGame = (userChoice) => {
  console.log("user choice=", userChoice);

  const compChoice = gencompChoice();
  console.log("computer choice=", compChoice);

  if (compChoice === userChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, compChoice, userChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
