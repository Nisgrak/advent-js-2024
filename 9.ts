type Space = '·' | '@' | '*' | 'o'
type Board = Space[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: Board, mov: Movement): Result {
	const test = {
		"U": [-1, 0],
		"D": [1, 0],
		"L": [0, -1],
		"R": [0, 1]
	}

	let trainIndex = -1

	let index = board.findIndex(a => {
		trainIndex = a.indexOf('@')
		return trainIndex !== -1
	})

	try {
		let infoMov = test[mov]
		let rowIndex = index + infoMov[0]
		let charIndex = trainIndex + infoMov[1]
		let trainRow = board[rowIndex].charAt(charIndex)

		if (trainRow === "·") {
			return 'none'
		} else if (trainRow === "*") {
			return 'eat'
		} else {
			return 'crash'
		}

	} catch {
		return 'crash'
	}
}
