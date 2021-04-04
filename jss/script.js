let computerGuess;
let userGuesses = [];

function init(){
    computerGuess = Math.floor(Math.random() * 100 + 1);
    //console.log(computerGuess);
    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none"; // none/ block
}

function startGameView(){
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}
function easyMode()
{
    startGameView();
}
function hardMode()
{
    startGameView();
}
function compareGuess(){
    const userGuess = Number(document.getElementById("inputBox").value)
    userGuesses.push(" " + userGuess);
    document.getElementById("guesses").innerHTML = userGuesses;

    if(userGuess > computerGuess)
    {
        document.getElementById("textOutput").innerHTML = "Your guess is higher than weed:(";
        document.getElementById("inputBox").value = "";
        //resetting the number
    }
    else if(userGuess < computerGuess)
    {
        document.getElementById("textOutput").innerHTML = "Your guess is lower than my future";
        document.getElementById("inputBox").value = "";
    }
    else if(userGuess == computerGuess){
        document.getElementById("textOutput").innerHTML = "You are cheating for sure! No way you Guessed it!"
        document.getElementById("inputBox").value = "";
    }
}
