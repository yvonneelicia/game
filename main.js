//Rock paper scissor
let playGame = confirm("Let's a game of play rock, paper and scissors");
if (playGame) {
    //player
    let playerChoice = prompt ("Please enter your choice: rock, paper or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
        
            //computer
            let computerChoice = Math.floor(Math.random() * 3 +1 );
            let computer = computerChoice === 1? "rock"
                : computerChoice === 2 ? "paper"
                : "scissors";

                //results
                let result =
                playerOne === computer
                ? "Tie game!"
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer: ${computer}
                \nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\nComputer: ${computer}
                \nComputer wins!`
                :playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}
                \nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}
                \nplayerOne wins!`
            alert(result)
            let playAgain = confirm("playAgain?");
            playAgain ? location.reload() : alert("Thank you for playing the game. Would you like to play again?");
    
        } else {
        alert("You didn't enter a value. Please insert rock, paper, or scissors.");
        } else {
         alert("I guess you changed you changed your mind. Maybe next time.");
        } 
    } else {
        alert ("Ok, maybe next time.")
    }

} else {
    alert ("Goodbye.Maybe next time.")
}