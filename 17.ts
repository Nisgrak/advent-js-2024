function detectBombs(grid: boolean[][]): number[][] {

	let result: number[][] = []

	let toMake = [[-1, 0], [-1, -1], [-1, 1], [1, 0], [1, -1], [1, 1], [0, -1], [0, 1]]

	for (let indexRow = 0; indexRow < grid.length; indexRow++) {
		let row = grid[indexRow]

		result[indexRow] = []

		for (let indexColumn = 0; indexColumn < row.length; indexColumn++) {
			result[indexRow][indexColumn] = 0

			for (let a of toMake) {
				let newRow = indexRow + a[0]
				let newColumn = indexColumn + a[1]

				let allowRow = newRow >= 0 && newRow < grid.length
				let allowColumn = newColumn >= 0 && newColumn < row.length

				if (allowRow && allowColumn && grid[newRow][newColumn]) {
					result[indexRow][indexColumn]++
				}
			}
		}
	}

	return result
}
