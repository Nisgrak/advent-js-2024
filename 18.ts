function findInAgenda(agenda: string, phone: string): { name: string; address: string } | null {

	let lines = agenda.split("\n")
	let linesWithThatNumber = lines.filter(a => a.includes(phone))

	if (linesWithThatNumber.length != 1) {
		return null
	}

	let line = linesWithThatNumber[0]

	let name = line.match(/<(?<name>.*)>/)![1]
	let address = line.replace(/\+\d{1,2}-\d{3}-\d{3}-\d{3}/, "").replace(/<.*>/, "").trim()

	return { name, address }

}
