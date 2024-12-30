function compile(instructions: string[]): number {
	const memory: Record<string, number> = {}

	for (let instructionIndex = 0; instructionIndex < instructions.length; instructionIndex++) {
		let instruction = instructions[instructionIndex]
		let [command, value1, value2] = instruction.split(" ")

		if (command === 'MOV') {
			let content = /[a-zA-Z]/i.test(value1) ? memory[value1] : parseInt(value1)
			memory[value2] = content
		} else if (command === 'INC') {
			memory[value1] = (memory[value1] || 0) + 1
		} else if (command === 'DEC') {
			memory[value1] = (memory[value1] || 0) - 1
		} else if (command === 'JMP') {
			if (!memory[value1]) {
				instructionIndex = parseInt(value2) - 1
			}
		}
	}
	return memory["A"]
}
