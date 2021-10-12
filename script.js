function computerPlay () {
    let randomValue = Math.random();
    
    if (randomValue<0.33) {
        return 'Rock';
    }
    else if (randomValue<0.66) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelectionLower = playerSelection.toLowerCase();
    computerSelectionLower = computerSelection.toLowerCase();

    if (playerSelectionLower=='paper' && computerSelectionLower=='rock' || playerSelectionLower=='scissors' && computerSelectionLower=='paper' || playerSelectionLower=='rock' && computerSelectionLower=='scissors') {
        return  [`You Win this round! ${playerSelection} beats ${computerSelection}!`, 1];
    }
    else if (playerSelectionLower=='rock' && computerSelectionLower=='paper' || playerSelectionLower=='paper' && computerSelectionLower=='scissors' || playerSelectionLower=='scissors' && computerSelectionLower=='rock') {
        return [`You Lose this round! ${computerSelection} beats ${playerSelection}!`, 0];
    }
    else {
        return  [`Tie! ${playerSelection} ties with ${computerSelection}`, 0];
    }
}

function game() {
    let wins = 0;
    for (let i = 0; i<5; i++) {
        let playerSelection = prompt("Please enter Rock, Paper, or Scissors: ");
        result = playRound(playerSelection,computerPlay());
        console.log(result[0]);
        wins = wins + result[1];
    }
    console.log(`You won ${wins} out of 5 games!`)
}