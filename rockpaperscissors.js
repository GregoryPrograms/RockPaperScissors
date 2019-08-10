function computerplay(){
    rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}
function roundwin(computerthrow, playerthrow){
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
console.log(computerplay())