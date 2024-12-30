function drawTable(data: Array<Record<string, string | number>>): string {
	function capitelize(value: string) {
		return value.charAt(0).toUpperCase() + value.slice(1)
	}

	let maxCharColumns: number[] = [];

	for (let index = 0; index < data.length; index++) {

		let row = data[index]
		let rowKeys = Object.entries(row)

		for (let indexRow = 0; indexRow < rowKeys.length; indexRow++) {

			let rowValue = rowKeys[indexRow]
			let key = rowValue[0].toString()
			let value = rowValue[1].toString()
			let temp = Math.max(maxCharColumns[indexRow] || 0,
				key.length,
				value.length
			)
			maxCharColumns[indexRow] = temp

		}

	}

	let separator = '+'
	for (let index = 0; index < maxCharColumns.length; index++) {

		separator += '-' + '-'.padEnd(maxCharColumns[index], '-') + "-+"

	}

	let table = separator + "\n"

	let keys = Object.keys(data[0])
	table += '|'
	for (let index = 0; index < keys.length; index++) {

		let rowKeys = keys[index]
		table += ' ' + capitelize(rowKeys).padEnd(maxCharColumns[index], ' ') + " |"

	}
	table += "\n" + separator + "\n"

	for (let index = 0; index < data.length; index++) {

		let row = data[index]
		let rowValues = Object.values(row)
		table += '|'
		for (let indexRow = 0; indexRow < rowValues.length; indexRow++) {

			let rowValue = rowValues[indexRow]
			table += ' ' + rowValue.toString().padEnd(maxCharColumns[indexRow], ' ') + " |"

		}
		table += "\n"
	}

	table += separator

	return table
}
