"use strict";

function calcAge(birthYear) {
	const age = 2037 - birthYear;

	function printAge() {
		const output = `${firstName} ,you are ${age}, born in ${birthYear}`;
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			var millenial = true;
			// Creating NEW variable with same name as outer scope's variable
			const firstName = "Steven";
			const str = `Oh, and you are a millenial, ${firstName}`;
			console.log(str);

			function add(a, b) {
				return a + b;
			}
			// Reassigning outer scope's variable
			// output = 'NEW OUTPUT';
		}
		// console.log(str); won't work
		console.log(millenial);
		// add(2, 3); won't work in restrict mode
	}
	printAge();

	return age;
}

const firstName = "Almir";
calcAge(1991);
