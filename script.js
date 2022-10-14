var luckyNumber = Math.random() * 20; 
luckyNumber = Math.floor(luckyNumber); 

var scoreNumber = 20;
var highScore = 0;

var guessing =
  document.getElementById('guessing');
var check = document.getElementById('check');
var message = document.getElementById('message');
var score = document.getElementById('score');
var main = document.getElementById('main');
var highscore =
  document.getElementById('highscore');
var again = document.getElementById('again');
function checkNumber() {
  var userNumber = guessing.value; 

  if (luckyNumber < userNumber) {
    message.innerHTML = 'Your number is too high';
    scoreNumber = scoreNumber - 1;
    score.innerHTML = scoreNumber;
    main.style.backgroundColor = '#D82148';
  }
  if (luckyNumber > userNumber) {
    message.innerHTML = 'Your number is too low';
    scoreNumber = scoreNumber - 1;
    score.innerHTML = scoreNumber;
    main.style.backgroundColor = '#D82148';
  }
  if (luckyNumber == userNumber) {
    message.innerHTML = 'You got it!';
    main.style.backgroundColor = '#019267';
    highscore.innerHTML = scoreNumber;
    scoreNumber = 20;
    score.innerHTML = scoreNumber;
  }
}

function startAgain() {
  luckyNumber = Math.random() * 20;
  luckyNumber = Math.floor(luckyNumber);
  scoreNumber = 20;
  score.innerHTML = scoreNumber;
  console.log(luckyNumber);
  main.style.backgroundColor = '#222';
}

check.onclick = checkNumber;
again.onclick = startAgain;

console.log(luckyNumber);
