function createXmasTree(height: number, ornament: string): string {
	let tree = "";


	for (let i = 1; i <= height; i++) {
		let size = height - i;
		tree += `${"".padEnd(size, "_")}${"".padEnd(i * 2 - 1, ornament)}${"".padEnd(size, "_")}\n`
	}


	let tronco = `${"".padEnd(height - 1, "_")}#${"".padEnd(height - 1, "_")}`
	tree += tronco + "\n"
	tree += tronco

	return tree
}
