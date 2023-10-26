"use strict";

const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
	let max = temps[0];
	let min = temps[0];

	for (let i = 0; i < temps.length; i++) {
		if (typeof temps[i] !== "number") {
			continue; // Skip non-numeric values
		}

		if (temps[i] > max) {
			max = temps[i];
		}

		if (temps[i] < min) {
			min = temps[i];
		}
	}

	const amplitude = max - min;
	console.log("Max temperature:", max);
	console.log("Min temperature:", min);
	console.log("Temperature amplitude:", amplitude);
};

calcTempAmplitude(temps);
