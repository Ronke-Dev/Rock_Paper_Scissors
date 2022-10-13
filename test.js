// The game consists of three choices and they are rock, paper and scissors!, put them in an array(list)
const choices = ["rock", "paper","scissors"];
const winners =[];

// we are meant to play this game, so lets create a function that will play it.
// play the game // play five round // let it be console based, pass playRound() into the game
// lets play five round and see who won each round(insert playRound multiple times)
// function game(){
//     playRound();
//     playRound();
//     playRound();
//     playRound();
//     playRound(); 
// }
// lets do a loop instead. 
function game(){
   for(let i = 1; i <= 5; i++){
    playRound(i);
    logWins();
   }
   document.querySelector("button").textContent = "game is over. play new game";
}

// create the playRound function here
function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner)
    logRound(playerSelection,computerSelection,winner,round)
    // console.log(computerSelection, playerSelection) 
    // after doing lines 89-94, we eliminated the console.log in ine 29
    // the code above(29) helps to see what each person played
    // console.log(winner)
}



function playerChoice(){
    let input = prompt("Type Rock Paper Scissors")
    while (input == null){
        input = prompt("Type Rock Paper Scissors")
    }

    input = input.toLowerCase();
    let check = validateInput(input);
    while(check == false){
        input = prompt("Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitalization doesn't matter");
        while(input == null){
            input = prompt("Type Rock Paper Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
        return input;
}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}


function validateInput(choice){
    return choices.includes(choice)
}


// now we need to create the check winner function
function checkWinner(choiceP, choiceC){
    if(choiceP == choiceC){
        return "Tie";
    }
    else if(
        (choiceP == "rock" && choiceC == 'scissors') ||
        (choiceP == "scissors" && choiceC == "paper") ||
        (choiceP == "paper" && choiceC == "rock") 
    ){
        return "player wins";
    } else{
        return "computer wins"
    }


}


// lets create a function that shows the log, so we can know who wins

function logWins(){
   let playerWins = winners.filter((item) => item =="player wins").length;
   let computerWins = winners.filter((item) => item == "computer wins").length;
   let ties = winners.filter((item) => item == "Tie").length;
   console.log("Results:")
   console.log("Player Wins:", playerWins);
   console.log("Computer Wins:", computerWins);
   console.log("Ties:", ties);

}

// show the number of rounds
function logRound(playerChoice, computerChoice, winner, round){
    console.log("round:", round)
    console.log('player chose:', playerChoice);
    console.log('computer chose:', computerChoice);
    console.log(winner, "won the round");
    console.log("____________________________________________")
}


