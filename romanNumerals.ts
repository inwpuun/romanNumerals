export function romanNumerals(romanNumeral: string) {
	const romanNumeralMap: { [key: string]: number } = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let result = romanNumeralMap[romanNumeral[0]] || NaN;
	for (let i = 1; i < romanNumeral.length; i++) {
		if (
			romanNumeralMap[romanNumeral[i]] > romanNumeralMap[romanNumeral[i - 1]]
		) {
			result +=
				romanNumeralMap[romanNumeral[i]] -
				2 * romanNumeralMap[romanNumeral[i - 1]];
		} else {
			result += romanNumeralMap[romanNumeral[i]];
		}
	}

	return result;
}
