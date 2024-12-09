let win = 0;
let loss = 0;
let tie = 0;

const choices = ['rock','paper','scissors'];

document.getElementById('rock').addEventListener('click',()=>playGame('rock'));
document.getElementById('paper').addEventListener('click',()=>playGame('paper'));
document.getElementById('scissors').addEventListener('click',()=>playGame('scissors'));



function playGame(playerchoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];

    if (playerchoice === computerChoice){
        tie++;
        setstatus(`It is a Tie!! You both chose ${playerchoice}`)
    }

    else if(
        (playerchoice==='rock'&&computerChoice==='scissors') ||
        (playerchoice==='paper'&& computerChoice==='rock') ||
        (playerchoice==='scissors'&& computerChoice==='paper')
    ){
        win++
        setstatus(`You Win!! ${playerchoice} beats ${computerChoice}`)
    }

    else{
        loss++;
        setstatus(`You Loose! ${computerChoice} beats ${playerchoice}`)
    }
    updateScore();
}


function setstatus(message){
    document.getElementById('status').textContent = message;
}

function updateScore(){
    document.getElementById('wins').textContent = win;
    document.getElementById('loses').textContent = loss;
    document.getElementById('ties').textContent = tie;

}