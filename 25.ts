function execute(code: string): number {

	let result = 0

	let tempBucle = 0
	let tempCond = 0

	for (let index = 0; index < code.length; index++) {
		let instruction = code[index]

		if (instruction == '+') {
			result++
		} else if (instruction == '-') {
			result--
		} else if (instruction == '[') {
			tempBucle = index
		} else if (instruction == ']') {
			if (result !== 0) {
				index = tempBucle
			}
		} else if (instruction == '{') {
			tempCond = index
			if (result === 0) {
				index = code.indexOf('}', tempCond)
			}
		}
	}

	return result
}
