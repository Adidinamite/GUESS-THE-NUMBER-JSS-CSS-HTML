let computerGuess;
let userGuesses = [];
let attempts = 0;
let maximum_attempts = 0;

function init(){
    computerGuess = Math.floor(Math.random() * 100 + 1);
    //console.log(computerGuess);
    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none"; // none/ block
    document.getElementById("gameOver").style.display ="none";
    attempts = 0;
    maximum_attempts=0;
    document.getElementById("inputBox").value = "";
    document.getElementById("guesses").innerHTML = 0;
}

function startGameView(){
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}
function restart(){
    init();
    document.getElementById("welcomeScreen").style.display = "block";
}
function easyMode()
{
    startGameView();
    maximum_attempts=9;
    document.getElementById("attempts").innerHTML = maximum_attempts + 1;
}
function hardMode()
{
    startGameView();
    maximum_attempts=4;
    document.getElementById("attempts").innerHTML = maximum_attempts + 1;
}
function compareGuess(){
    const userGuess = Number(document.getElementById("inputBox").value)
    if(attempts<=maximum_attempts)
    {
        userGuesses.push(" " + userGuess);
        document.getElementById("guesses").innerHTML = userGuesses;
        document.getElementById("attempts").innerHTML = maximum_attempts - attempts;
    }
    else if(attempts >=maximum_attempts)
    {
        document.getElementById("gameOver").style.display ="block";
        document.getElementById("gameArea").style.display = "none";
    }

    attempts++;
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
