function findMissingNumbers(nums: number[]): number[] {
	let test = [...new Set(nums)].sort()
	let lastNumber = 0

	let result = []

	for (let num of test) {
		result.push(...new Array(num - lastNumber - 1).fill(0).map(a => {
			let temp = lastNumber + 1;
			lastNumber = temp
			return temp
		}))
		lastNumber++
	}

	return result
}
