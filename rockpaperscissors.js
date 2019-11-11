var positionDiv = document.createElement("div");
var rockBtn = document.createElement("button");
var paperBtn = document.createElement("button");
var scissorsBtn = document.createElement("button")
var tallyScore = document.createElement("text")
var scoreValPlayer = 0;
var scoreValComp = 0;
positionDiv.style.cssText = 'height: 400px';
tallyScore.innerText = "Player Score: " + scoreValPlayer + "\n Computer Score: " + scoreValComp;
tallyScore.style.cssText = 'position: fixed; top: 20px; left: 34%'
rockBtn.innerHTML = "rock";
rockBtn.style.cssText ='position: fixed; top: 60px; left: 38%'
paperBtn.innerHTML = "paper";
paperBtn.style.cssText='position: fixed; top: 60px; left: 47%'
scissorsBtn.innerHTML = "scissors";
scissorsBtn.style.cssText='position: fixed; top: 60px; left: 57%'
positionDiv.appendChild(tallyScore);
positionDiv.appendChild(rockBtn);
positionDiv.appendChild(paperBtn);
positionDiv.appendChild(scissorsBtn);
document.body.appendChild(positionDiv);

var buttonList = document.body.querySelectorAll('button');
function computerPlay(){
    rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}
function playRound(computerThrow, playerThrow){
    if(computerThrow == "rock"){
        switch(playerThrow){
            case "rock":
                return "Tie";
            case "paper":
                return "Win";
            case "scissors":
                return "Lose";
        }
    }
    else if(computerThrow == "paper"){
        switch(playerThrow){
            case "rock":
                return "Lose";
            case "paper":
                return "Tie";
            case "scissors":
                return "Win";
        }
    }
    else if(computerThrow == "scissors"){
        switch(playerThrow){
            case "rock":
                return "Win";
            case "paper":
                return "Lose";
            case "scissors":
                return "Tie";
        }

    }
}

buttonList.forEach((gameButton) =>{
    gameButton.addEventListener('click', (e) => {
        var roundResult = (playRound(computerPlay(),(e.target.innerHTML)));
        switch(roundResult){
            case "Win":
                scoreValPlayer = scoreValPlayer + 1;
                break;
            case "Tie":
                break;
            case "Lose":
                scoreValComp = scoreValComp + 1;
                break;
        }
    tallyScore.innerText = "Player Score: " + scoreValPlayer + "\n Computer Score: " + scoreValComp;
    });
});
    
