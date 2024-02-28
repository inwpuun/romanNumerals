function romanNumeralsTesting(romanNumeral: string, expected: number) {
	const result = romanNumerals(romanNumeral);
	console.log(
		result === expected ? "Checked" : "Not Checked",
		romanNumerals(romanNumeral),
		expected,
		result,
	);
}

// Test cases
romanNumeralsTesting("I", 1);
romanNumeralsTesting("V", 5);
romanNumeralsTesting("X", 10);
romanNumeralsTesting("L", 50);
romanNumeralsTesting("C", 100);
romanNumeralsTesting("D", 500);
romanNumeralsTesting("M", 1000);

romanNumeralsTesting("II", 2);
romanNumeralsTesting("III", 3);
romanNumeralsTesting("IV", 4);
romanNumeralsTesting("VI", 6);
romanNumeralsTesting("VII", 7);
romanNumeralsTesting("VIII", 8);
romanNumeralsTesting("IX", 9);

romanNumeralsTesting("XI", 11);
romanNumeralsTesting("XII", 12);
romanNumeralsTesting("XIII", 13);
romanNumeralsTesting("XIV", 14);
romanNumeralsTesting("XV", 15);

romanNumeralsTesting("XXXIX", 39);
romanNumeralsTesting("MCMIII", 1903);
romanNumeralsTesting("MMVI", 2006);
romanNumeralsTesting("MCMXLIV", 1944);
