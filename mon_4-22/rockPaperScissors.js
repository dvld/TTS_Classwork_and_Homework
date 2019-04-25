// var rps = function () {

  // var computerChoice = Math.floor(Math.random() * 3);
  // console.log(computerChoice);

//   var userChoice = prompt("Rock Paper Scissors Shoot!");
//   userChoice = userChoice.toLowerCase();

//   if (userChoice === "rck" || userChoice === "roc" || userChoice === "rok") {
//     if (confirm("Did you mean 'Rock'")) {
//       userChoice = "rock";
//     }
//   }
//   if (userChoice === "papr" || userChoice === "pper" || userChoice === "paer") {
//     if (confirm("Did you mean 'Paper'")) {
//       userChoice = "paper";
//     }
//   }
//   if (userChoice === "scisors" || userChoice === "sisors" || userChoice === "sissors") {
//     if (confirm("Did you mean 'Scissors'")) {
//       userChoice = "scissors";
//     }
//   }

//   if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
//     alert("You may have missplelled that, Please enter one of the following; Rock, Paper, or Scissors");
//     rps();
//   }

//   // console.log(userChoice);

//   // if (computerChoice <= 3) {
//   //   computerChoice = "rock";
//   // } else if (computerChoice <= 6) {
//   //   computerChoice = "paper";
//   // } else {
//   //   computerChoice = "scissors";
//   // }

//   if (computerChoice <= 3) {
//     computerChoice = "rock";
//   } else if (computerChoice <=6) {
//     computerChoice = "paper";
//   } else {
//     computerChoice = "scissors";
//   }

//   // console.log(computerChoice);

//   var check = function (comp, user) {
//     if (comp === user) {
//       console.log("Tie game");
//       alert("Tie game");
//     } else if (comp === "rock") {
//       if (user === "scissors") {
//         console.log("Computer wins");
//         alert("Computer wins");
//       } else {
//         console.log("You win")
//         alert("You win")
//       }
//     } else if (comp === "paper") {
//       if (user === "rock") {
//         console.log("Computer wins");
//         alert("Computer wins");
//       } else {
//         console.log("You win");
//         alert("You win");
//       }
//     } else {
//       if (user === "paper") {
//         console.log("Computer wins");
//         alert("Computer wins");
//       } else {
//         console.log("You win");
//         alert("You win");
//       }
//     }
//   }
//   console.log("Computer chose " + computerChoice);
//   console.log("You chose " + userChoice);
//   check(computerChoice, userChoice);
//   rps();
// }
// rps();

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

rock.addEventListener("click", rockUser);
paper.addEventListener("click", paperUser);
scissors.addEventListener("click", scissorsUser);



function rockUser() {

  var computerChoice = Math.floor(Math.random() * 3);

  console.log("You chose Rock");
  // 0 === "rock"
  if (computerChoice === 0) {
    console.log("Computer chose Rock. Tie game");
    alert("Computer chose Rock. Tie game");
  } else if (rock && computerChoice === 1) {
    console.log('Computer chose Paper. You lose');
    alert('Computer chose Paper. You lose');
  } else {
    console.log('Computer chose Scissors. You win');
    alert('Computer chose Scissors. You win');
    // score++;
  }
}
function paperUser() {

  var computerChoice = Math.floor(Math.random() * 3);

  console.log("You chose Paper");
  // 1 === "paper"
  if (computerChoice === 1) {
    console.log("Computer chose Paper. Tie game");
    alert("Computer chose Paper. Tie game");
  } else if (computerChoice === 2) {
    console.log('Computer chose Scissors. You lose');
    alert('Computer chose Scissors. You lose');
  } else {
    console.log('Computer chose Rock. You win');
    alert('Computer chose Rock. You win');
    // score++;
  }
}

function scissorsUser() {

  var computerChoice = Math.floor(Math.random() * 3);

  console.log("You chose Scissors");
  // 2 === "scissors"
  if (computerChoice === 2) {
    console.log("Computer chose Scissors. Tie game");
    alert("Computer chose Scissors. Tie game");
  } else if (computerChoice === 0) {
    console.log('Computer chose Rock. You lose');
    alert('Computer chose Rock. You lose');
  } else {
    console.log('Computer chose Paper. You win');
    alert('Computer chose Paper. You win');
    // score++;
  }
}

// function paperUser() {
//   if (computerChoice === 2) {
//     console.log("Computer chose scissors. You Lose");
//   } else if(computerChoice === 0) {
//     console.log("Computer chose rock. You Win!");
//   } else {
//     console.log("Computer chose paper. Tie game");
//   }
// }

// function scissorsUser() {
//   if (computerChoice === 0) {
//     console.log("Computer chose rock. You Lose");
//   } else if(computerChoice === 1) {
//     console.log("Computer chose paper. You Win!");
//   } else {
//     console.log("Computer chose scissors. Tie game");
//   }
// }

