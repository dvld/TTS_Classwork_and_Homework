// var billAmount = Math.floor(Math.random() * 100 + 1);

// console.log((billAmount).toFixed(2));

// function gratuity(bill) {
//   return bill * 0.20;
// }

// console.log("20% of the bill is " + gratuity(billAmount).toFixed(2));

// function totalWithGrat(amount) {
//   return gratuity(amount) + amount;
// }

// console.log("Your total including gratuity is: " + totalWithGrat(billAmount).toFixed(2));

// ===========================

// exercise 2

let hands = ['rock', 'paper', 'scissors'];

let getHand = () => {
  let hand = hands[parseInt((Math.random() * 10) % 3)];
  console.log(hand);
  return hand;
  // console.log(hand);
  // if (hand === 0) {
  //   return hands[0];
  // } else if (hand === 1) {
  //   return hands[1];
  // } else {
  //   return hands[2];
  // }
  
}
getHand();

let player1 = {
  name: "Niko",
  score: {
    wins: 0,
    ties: 0,
    losses: 0,
  }
}
// console.log(player1.hand);

let player2 = {
  name: "Shaz",
  score: {
    wins: 0,
    ties: 0,
    losses: 0,
  }
}
// console.log(player2.hand);

let playRound = (p1, p2) => {
  let one = getHand();
  let two = getHand();
  console.log(`${p1.name} chose ${one}`);
  console.log(`${p2.name} chose ${two}`);
  if (one === two) {
    console.log("It's a tie!!");
    p1.score.ties++;
    p2.score.ties++;
    return null;
  }
  if (one === "rock") {
    if (two === "paper") {
      console.log(`${p2.name} wins!`);
      p1.score.losses++;
      p2.score.wins++;
      return p2;
    } else {
      console.log(`${p1.name} wins!`);
      p1.score.wins++;
      p2.score.losses++;
      return p1;
    }
  }
  if (one === "paper") {
    if (two === "scissors") {
      console.log(`${p2.name} wins!`);
      p1.score.losses++;
      p2.score.wins++;
      return p2;
    } else {
      console.log(`${p1.name} wins!`);
      p1.score.wins++;
      p2.score.losses++;
      return p1;
    }
  }
  if (one === "scissors") {
    if (two === "rock") {
      console.log(`${p2.name} wins!`);
      p1.score.losses++;
      p2.score.wins++;
      return p2;
    } else {
      console.log(`${p1.name} wins!`);
      p1.score.wins++;
      p2.score.losses++;
      return p1;
    }
  }
}

// playRound(player1, player2);

let playGame = (p1, p2, playUntil) => {
  while (p1.score.wins < playUntil && p2.score.wins < playUntil) {
    playRound(p1, p2);
  }
  console.log(p1.name);
  console.log(p1.score);
  console.log(p2.name);
  console.log(p2.score);
}

// playGame(player1, player2, 5);