let tracker = JSON.parse(localStorage.getItem('tracker')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
};


// console.log(localStorage.getItem('tracker'));
function getResponse()
{
  let randomNumber = Math.random();
  if(randomNumber < (1 / 3))
  {
    return 'rock';
  }else if(randomNumber >= (1 / 3) && randomNumber < (2 / 3))
  {
    return 'paper';
  }else
  {
    return 'scissors';
  }

}

function playGame(playerChoice, tracker) {
  let computerResponse = getResponse();
  let result;

  if (playerChoice === computerResponse) {
      result = 'Result: Tie';
      tracker.Ties += 1;
  } else if (
      (playerChoice === 'rock' && computerResponse === 'scissors') ||
      (playerChoice === 'paper' && computerResponse === 'rock') ||
      (playerChoice === 'scissors' && computerResponse === 'paper')
  ) {
      result = 'Result: You Win';
      tracker.Wins += 1;
  } else {
      result = 'Result: You Lost';
      tracker.Losses += 1;
  }

  // localstorage
  localStorage.setItem('tracker', JSON.stringify(tracker));

  document.querySelector('.js-outcome').innerHTML = `${result}`;

  document.querySelector('.js-selection').innerHTML = `You picked <img src="images/${playerChoice}-emoji.png" class="move-icon">.
  Computer picked
  <img src="images/${computerResponse}-emoji.png" class="move-icon">`;
  score();

  
}      



function score()
{
document.querySelector('.js-result').innerHTML = `Wins: ${tracker.Wins}, Losses: ${tracker.Losses}, Ties: ${tracker.Ties}`;

}

score();

function resetScore()
{
tracker.Wins = 0;
tracker.Losses = 0;
tracker.Ties = 0;  
score();   
localStorage.removeItem('tracker'); 
}
