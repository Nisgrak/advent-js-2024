function createFrame(names: string[]): string {

	const maxLength = Math.max(...names.map(a => a.length));

	let result = names.map(name => {
		let neededSpaces = maxLength - name.length + 1

		return `* ${name}${new Array(neededSpaces).join(" ")} *`;
	})

	result.push(new Array(maxLength + 4).fill("*").join(""))
	result.unshift(new Array(maxLength + 4).fill("*").join(""))

	return result.join("\n")
}
