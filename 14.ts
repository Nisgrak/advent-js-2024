function minMovesToStables(reindeer: number[], stables: number[]): number {

	let orderedReindeer = reindeer.sort()
	let orderedStables = stables.sort()

	return orderedReindeer.reduce((acc, actual, index) => {
		return acc + Math.abs(orderedStables[index] - actual)
	}, 0)
}
