//creating an object for the sccore
let score = JSON.parse (localStorage.getItem('score'))||{
  wins: 0,
  Losses: 0,
  Ties: 0
} ;
updateScoreElement();
console.log(JSON.parse (localStorage.getItem('score')));
const randomNumber = Math.random();
let result ='';
let compMove = '';      
function randN(){
  if(randomNumber >= 0 && randomNumber < 1/3){
    compMove ='Rock';
  }else if (randomNumber >= 1/3 && randomNumber < 2/3){
    compMove ='Paper';
  }else if (randomNumber >= 2/3 && randomNumber < 1){
    compMove ='Scissors';
  }
}

function playGame(playerMove){
  if(playerMove === 'Scissors'){
    if(compMove === 'Rock'){
      result = 'You lose.'
    }else if (compMove === 'Paper'){
      result = 'You win.'
    }else if (compMove === 'Scissors'){
      result = 'Tie.'
    }
  } else if(playerMove === 'Paper') {
    if(compMove === 'Rock'){
      result = 'You win.'
    }else if (compMove === 'Paper'){
      result = 'Tie.'
    }else if (compMove === 'Scissors'){
      result = 'You lose.'
    }
  } else if(playerMove === 'Rock'){
    if(compMove === 'Rock'){
      result = 'Tie.'
    }else if (compMove === 'Paper'){
      result = 'You lose.'
    }else if (compMove === 'Scissors'){
      result = 'You win.'
    }
  } 
  if (result === 'You win.'){
    score.wins ++;
  } else if (result === 'You lose.'){
    score.Losses ++;
  } else if(result === 'Tie.'){
    score.Ties ++;
  } 
  localStorage.setItem('score', JSON.stringify(score)); 
  updateScoreElement();
  document.querySelector('.js-result')
    .innerHTML =  result; 
  document.querySelector('.js-moves')
    .innerHTML =  `You
    <img src="images/${playerMove}-emoji.png" alt="playerMove" class="move-icon">
    <img src="images/${compMove}-emoji.png" alt="compMove" class="move-icon">
    Computer`;         
  //console.log(score);
  /*alert(`You picked ${playerMove}, The computer picked ${compMove}, ${result} 
Wins: ${score.wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`);*/
}
function updateScoreElement(){
  document.querySelector('.Js_score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}
