var woolOwners = [
  {
    'master': 1
  },
  {
    'dame': 1
  },
  {
    'little boy': 1,
    'location': 'down the lane'
  }
];
// console.log(woolOwners2[0].master);

var boy = Object.keys(woolOwners[2]);
// console.log(boy);

var littleBoy = boy[0];
// console.log(littleBoy);

var whereHeLives = woolOwners[2].location;
// console.log(whereHeLives);

var haveYouAnyWool = function() {
  for (var i = 0; i < woolOwners.length; i++) {
    var totalBags = totalBags + i;
  }
  return (i);
};

var bags = haveYouAnyWool();
// console.log(bags);

function baabaaBlackSheep() {
  console.log('BaaBaa BlackSheep have you any wool?');
  if (bags > 0) {
    console.log('yes sir, yes sir ' + bags + ' bags full')
  }
}

function oneForMy() {
  for (var i =0; i < 2; i++) {
    var people = Object.keys(woolOwners[i]);
    // console.log(people);
    var person = people.toString();
    // console.log(person);
    console.log('one for my ' + person);
  }
}

baabaaBlackSheep();
oneForMy();

console.log('one for the ' + littleBoy + ' that lives ' + whereHeLives);