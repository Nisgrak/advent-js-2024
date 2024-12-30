function drawRace(indices: number[], length: number): string {

	let result = indices.map((reno, index) => {
		let race = ""

		if (reno === 0) {
			race = "".padEnd(length, "~")
		} else {
			let position = reno < 0 ? length + reno : reno

			race = "".padEnd(position, "~")

			race += "r"

			race += "".padEnd(length - position - 1, "~")
		}

		return "".padEnd(indices.length - index - 1, " ") + race + " /" + (index + 1)
	});

	return result.join("\n")
}
