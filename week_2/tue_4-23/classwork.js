// // exercise 1
// // =====================================
// console.log('\nExercise 1');
// console.log('==========\n');

// var shoppingList = ['Pop Tarts', 'Ramen Noodles', 'Chips', 'Salsa', 'Coffee'];
// console.log(1);
// console.log(shoppingList);

// shoppingList.push('Fruit Loops');
// console.log(2);
// console.log(shoppingList);

// shoppingList[4] = 'Fair_trade_coffee';
// console.log(3)
// console.log(shoppingList);

// shoppingList.splice(2, 2, 'Rice', 'Beans');
// console.log(4);
// console.log(shoppingList);

// var shoppingCart = [];
// console.log(5);
// console.log(shoppingCart);

// shoppingCart.push(shoppingList.pop());
// console.log(6);
// console.log(shoppingCart);

// shoppingCart.push(shoppingList.shift());
// console.log(7);
// console.log(shoppingCart);

// console.log(8);
// while (shoppingList.length > 0) {
//   shoppingCart.push(shoppingList.pop());
// }
// console.log(shoppingCart);

// shoppingCart.sort().reverse();

// console.log(9);
// console.log(shoppingCart);

// console.log(10);
// console.log(shoppingCart.toString());

// ##########################################################

// exercise 2
// =====================================
// console.log('\nExercise 2');
// console.log('==========\n');

var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

// // 1
// // get name of course
// console.log(1);
// console.log(course.name);

// // 2
// // get name of second teacher
// console.log(2);
// console.log(course.teachers[1]);

// // 3
// // get name of first student
// console.log(3);
// console.log(course.students[0].name);

// // 4
// // get katys computer type
// console.log(4);
// console.log(course.students[1].computer.type);

// // 5
// // preReq equipment object
// console.log(5);
// console.log(course.preReqs.equipment);

// // 6
// // second osoption from equipment prereq
// console.log(6);
// console.log(course.preReqs.equipment.OSOptions[1]);

// // 7
// // string listing osoptions separated by "or"
// console.log(7);
// console.log(course.preReqs.equipment.OSOptions.join(" or "));

// // 8
// // array of all students using osx
console.log(8);
// function osFilter(array) {
//   if (array.computer.OS === "OSX") {
//     return true;
//   }
// }
// console.log(course.students.filter(osFilter));

// console.log(course.students.filter(os => {
// 	if (os.computer.OS === "OSX") {
// 		os.name;
// 	}
// }));

let osFilter = (array, query) => {
	return array.filter(item => item.computer.OS.indexOf(query) > -1);
};

console.log(osFilter(course.students, "OSX"));