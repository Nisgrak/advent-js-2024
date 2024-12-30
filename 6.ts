function inBox(box: string[]): boolean {
	let rowWithGift = /^#+[ ]*\*[ ]*#+$/
	let rowA = /^#+$/
	let hasGift = false;

	let firstRow = box.shift()!
	let firstResult = rowA.test(firstRow)
	if (!firstResult) {
		return false
	}

	let lastRow = box.pop()!
	let lastResult = rowA.test(lastRow)

	if (!lastResult) {
		return false
	}

	for (let rowIndex = 0; rowIndex < box.length; rowIndex++) {

		let row = box[rowIndex];
		let gift = rowWithGift.test(row)

		hasGift = hasGift || gift

	}

	return hasGift
}
