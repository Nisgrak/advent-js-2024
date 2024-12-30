function isRobotBack(moves: string): true | [number, number] {
	let info: Record<string, {data: [number, number], invert: string, count: number}> = {
		'R': {
			data: [1, 0],
			invert: 'L',
			count: 0
		},
		'L': {
			data: [-1, 0],
			invert: 'R',
			count: 0
		},
		'D': {
			data: [0, -1],
			invert: 'U',
			count: 0
		},
		'U': {
			data: [0, 1],
			invert: 'D',
			count: 0
		}
	}
	let mods = {
		'*': (instruction: keyof typeof info) => info[instruction].data.map(a => a * 2) as [number, number],
		'!': (instruction: keyof typeof info) => info[info[instruction].invert as unknown as keyof typeof info].data,
		'?': (instruction: keyof typeof info) => info[instruction].count != 0 ? [0, 0] as [number, number] : info[instruction].data
	}
	let location: [number, number] = [0, 0]

	const regex = /(?<mod>[!*?]?)(?<instruction>[LRDU])/g;

	let results = [...moves.matchAll(regex)]

	for (let index = 0; index < results.length; index++) {
		let [_, mod, instruction] = results[index]
		let instructionInfo = info[instruction]

		let toSum: [number, number] = [0, 0]
		if (mod) {
			toSum = mods[mod as keyof typeof mods](instruction)
		} else {
			toSum = instructionInfo.data;

		}
		if (mod === '!') {
			info[instructionInfo.invert].count++
		} else {
			instructionInfo.count++
		}

		location[0] += toSum[0]
		location[1] += toSum[1]
	}

	return location[0] == 0 && location[1] == 0 ? true : location
}
