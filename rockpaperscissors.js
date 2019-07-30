function computerplay(){
    rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}
console.log(computerplay())