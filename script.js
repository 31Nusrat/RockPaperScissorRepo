
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };// the score is load into json string so we convert it to object using json parse

// document.querySelector('.js_score')
// .innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;

updateScoreElements();

//This function is to choose verify the move
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    }
    else if (computerMove === 'paper') {
      result = 'You win';
    }
    else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  }

  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    }
    else if (computerMove === 'paper') {
      result = 'Tie';
    }
    else if (computerMove === 'scissors') {
      result = 'You lose';
    }
  }


  else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    }
    else if (computerMove === 'paper') {
      result = 'You lose';
    }
    else if (computerMove === 'scissors') {
      result = 'You win';
    }
  }


  if (result === 'You win') {
    score.wins += 1;

  }
  else if (result === 'You lose') {
    score.losses += 1;
  }
  else if (result === 'Tie') {
    score.ties += 1;
  }


  localStorage.setItem('score', JSON.stringify(score));//localStorage saving the score to local strorage

  updateScoreElements();
  document.querySelector('.js_result')
    .innerHTML = result;
  document.querySelector('.js_moves')
    .innerHTML = ` You <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computer`;
  // `You ${playerMove} - ${computerMove} Computer`;
  }

function updateScoreElements() {
  document.querySelector('.js_score')
    .innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;

}

function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    //  console.log('rock');
    computerMove = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    // console.log('paper');
    computerMove = 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    //  console.log('scissors');
    computerMove = 'scissors';
  }
  return computerMove;
}