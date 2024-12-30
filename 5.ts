type Shoe = {
	type: 'I' | 'R'
	size: number
}

function organizeShoes(shoes: Shoe[]): number[] {
	let shoeList: Record<number, { I: number, R: number }> = {}
	let result: number[] = []

	for (let shoe of shoes) {
		let alternativeSide = shoe.type === 'I' ? 'R' as const : 'I' as const
		if (!shoeList[shoe.size]) {
			let temp = { R: 0, I: 0 }
			temp[shoe.type]++
			shoeList[shoe.size] = temp
			continue;
		}

		if (shoeList[shoe.size][alternativeSide]) {
			result.push(shoe.size)
			shoeList[shoe.size][alternativeSide]--;
		} else {
			shoeList[shoe.size][shoe.type]++;
		}

	}

	return result
}
