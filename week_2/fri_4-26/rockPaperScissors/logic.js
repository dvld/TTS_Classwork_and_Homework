
  class Player {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  }

function user_win() {
  alert('User Wins')
}

function playRound(user, comp) {
  if (user === comp) {
    alert('Tie Game');
  } else if ((user === 'rock') && (comp === 'scissors' || 'lizard')) {
    user_win();
  } else if ((user === 'paper') && (comp === 'rock' || 'spock')) {
    user_win();
  } else if ((user === 'scissors') && (comp === 'paper' || 'lizard')) {
    user_win();
  } else if ((user === 'lizard') && (comp === 'spock' || 'paper')) {
    user_win();
  } else if ((user === 'spock') && (comp === 'rock' || 'scissors')) {
    user_win();
  } else {
    alert ('Computer Wins');
  }
}

function random_number() {
  return Math.floor(Math.random() * 3);
}
// console.log(random_number());