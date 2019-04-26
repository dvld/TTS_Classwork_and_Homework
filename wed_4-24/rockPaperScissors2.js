
let random_Number = () => {
  return parseInt(Math.random() * 3);
}
// let computer_1 = random_Number();
// let computer_2 = random_Number();
// console.log(computer_1);
// console.log(computer_2);
let winner;

let player_one_obj = {
  name: 'Niko',
  score: {
    wins: 0,
    ties: 0,
    losses: 0
  }
}

let player_two_obj = {
  name: 'Shaz',
  score: {
    wins: 0,
    ties: 0,
    losses: 0
  }
}

function convert_to_string(player_choice) {
  switch (player_choice) {
    case 0:
      player_choice = 'rock';
      break;
    case 1:
      player_choice = 'paper';
      break;
    case 2:
      player_choice = 'scissors';
      break;
  }
  console.log(player_choice);
  return player_choice;
}

let determine_winner = (player_one, player_two) => {
  player_one = random_Number();
  player_two = random_Number();
  if (player_one === player_two) {
    console.log(`Its a tie`);
    player_one_obj.score.ties++;
    player_two_obj.score.ties++;
  } else if (
    // rock > scissors
    (player_one === 0 && player_two === 2)
    ||
    // paper > rock
    (player_one === 1 && player_two === 0)
    ||
    // scissors > paper
    (player_one === 2 && player_two === 1)
  ) {
    convert_to_string(player_one);
    convert_to_string(player_two);
    console.log(`${player_one_obj.name} chose ${player_one}`);
    console.log(`${player_two_obj.name} chose ${player_two}`);
    console.log(`${player_one_obj.name} Wins`);
    winner = player_one_obj.name;
    player_one_obj.score.wins++;
    player_two_obj.score.losses++;
  } else {
    convert_to_string(player_one);
    convert_to_string(player_two);
    console.log(`${player_one_obj.name} chose ${player_one}`);
    console.log(`${player_two_obj.name} chose ${player_two}`);
    console.log(`${player_two_obj.name} Wins`);
    winner = player_two_obj.name;
    player_one_obj.score.losses++;
    player_two_obj.score.wins++;
  }
}

// determine_winner(computer_1, computer_2);

let play_game_best_out_of = (player_1, player_2, number_of_wins) => {
  while (
    player_one_obj.score.wins < number_of_wins
    &&
    player_two_obj.score.wins < number_of_wins
  ) {
    determine_winner(player_1, player_2);
  }
  console.log(player_one_obj.score);
  console.log(player_two_obj.score);
}

play_game_best_out_of(player_one_obj, player_two_obj, 1);
// rock = 0
// paper = 1
// scissors = 2