function distributeWeight(weight: number): string {

	let result = ""
	let lastWeight = 0
	const boxRepresentations = {
		1: [" _ ", "|_|"],
		2: [" ___ ", "|___|"],
		5: [" _____ ", "|     |", "|_____|"],
		10: [" _________ ", "|         |", "|_________|"]
	}

	let weights = (Object.keys(boxRepresentations) as unknown as number[]).sort((a, z) => z - a) as unknown as (keyof typeof boxRepresentations)[]

	while (weight != 0) {
		let selectedWeight = weights.find(a => weight >= a)
		if (selectedWeight === undefined) {
			weight = 0
			break;
		}

		let box = [...boxRepresentations[selectedWeight]]
		box.shift()
		box.reverse()

		let completeSpace = ""

		if (lastWeight != selectedWeight && lastWeight !== 0) {
			let lon1 = boxRepresentations[lastWeight as keyof typeof boxRepresentations][1].length
			let lon2 = boxRepresentations[selectedWeight][1].length
			let longitud = lon1 - lon2 - 1
			completeSpace = "".padStart(longitud, '_')
		}

		for (let indexShape = 0; indexShape < box.length; indexShape++) {
			let shape = box[indexShape]


			result = "\n" + shape + (indexShape === 0 ? completeSpace : '') + result
		}

		lastWeight = selectedWeight

		weight -= selectedWeight;
	}

	result = boxRepresentations[lastWeight as keyof typeof boxRepresentations][0] + result

	return result;
}
