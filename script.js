let rounds = 0;
let wins = 0;

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

function playRound(e) {
    let playerSelection = e.target.id;
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    let computerSelectionLower = computerSelection.toLowerCase();
    const results = document.querySelector('#results')

    if (rounds==5) {
        wins = 0;
        rounds =0;
        const gameover = document.querySelector('#gameover');
        gameover.textContent = '';
    }


    if (playerSelectionLower=='paper' && computerSelectionLower=='rock' || playerSelectionLower=='scissors' && computerSelectionLower=='paper' || playerSelectionLower=='rock' && computerSelectionLower=='scissors') {
        wins++
        rounds++
        results.textContent =`You Win this round! ${playerSelection} beats ${computerSelection}!`;
    }
    else if (playerSelectionLower=='rock' && computerSelectionLower=='paper' || playerSelectionLower=='paper' && computerSelectionLower=='scissors' || playerSelectionLower=='scissors' && computerSelectionLower=='rock') {
        rounds++
        results.textContent =`You Lose this round! ${computerSelection} beats ${playerSelection}!`;
    }
    else {
        rounds++
        results.textContent =`Tie! ${playerSelection} ties with ${computerSelection}`;
    }
    gameover(wins, rounds);
}

function gameover (wins, rounds) {
    const gameover = document.querySelector('#gameover')
    if (rounds==5 && wins >=3) {
        return gameover.textContent = `Game Over! You Won ${wins} out of ${rounds}!`;
    }
    else if (rounds==5 && wins <3) {
        return gameover.textContent = `Game Over! You Lost ${wins} out of ${rounds}!`;
    };
};

const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', playRound));