let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = () => {
    let options = ["rock", "scissors", "paper"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game is draw! try again"
    msg.style.backgroundColor = "#081b31"

}
const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userScore++
        msg.innerText = `You won! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
        msg.style.border = "1px solid black"
        userScorePara.innerText = userScore
    }
    else {
        compScore++
        msg.innerText = `You lose bitch! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red"
        msg.style.border = "1px solid black"
        compScorePara.innerText = compScore

    }
}



const playGame = (userChoice) => {
    console.log("user choice is ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice is ", compChoice);
    if (userChoice === compChoice) {
        drawGame()
    }
    else {
        let userWin = true
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true
        }
        else {
            userWin = compChoice === "rock" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice)
    }
}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

