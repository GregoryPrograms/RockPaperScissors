function computerPlay(){
    rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}
function playRound(computerthrow, playerthrow){
    if(computerthrow == "rock"){
        switch(playerthrow){
            case "rock":
                return 0;
            case "paper":
                return 1;
            case "scissors":
                return -1;
        }
    }
    else if(computerthrow == "paper"){
        switch(playerthrow){
            case "rock":
                return -1;
            case "paper":
                return 0;
            case "scissors":
                return 1;
        }
    }
    else if(computerthrow == "scissors"){
        switch(playerthrow){
            case "rock":
                return 1;
            case "paper":
                return -1;
            case "scissors":
                return 0;
        }

    }
}
function game(){
    keepGoing = 1
    while(keepGoing == 1){
        playerWin = 0;
        computerWin = 0;
        playerMessage = "What do you throw: Rock, Paper, or Scissors?";
        while(playerWin < 3 && computerWin < 3){
            playerPlay = prompt(playerMessage).toLowerCase();
            switch (playRound(computerPlay(),playerPlay)){
                case 1:
                    playerMessage = "You win this round! The score is: " + ++playerWin + " to " +  computerWin + "\n What do you throw: Rock, Paper, or Scissors?";
                    break;
                case 0:
                    playerMessage = "You tied this round. The score is: " + playerWin + " to " + computerWin + "\n What do you throw: Rock, Paper, or Scissors?"
                    break;
                case -1:
                    playerMessage = "You lost this round. The score is: " + playerWin + " to " + ++computerWin + "\n What do you throw: Rock, Paper, or Scissors?"
                    break;
            }
        }
        playerMessage = "The game is over. The final score was " + playerWin + " to " + computerWin + "\n Enter 1 to keep playing, or anything else to stop."
        keepGoing = prompt(playerMessage)
    }
}
game();