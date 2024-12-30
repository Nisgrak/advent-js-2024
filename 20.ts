function fixGiftList(received: string[], expected: string[]): { missing: Record<string, number>, extra: Record<string, number> } {

	let data: Record<string, number> = {}

	for (let item of received) {
		if (data[item] === undefined) {
			data[item] = 0
		}

		data[item]++
	}

	let missing: Record<string, number> = {}

	for (let item of expected) {
		if (data[item] === undefined) {
			if (missing[item] === undefined) {
				missing[item] = 1
			} else {
				missing[item]++
			}
			continue;
		}

		data[item]--

		if (data[item] === 0) {
			delete data[item]
		}

	}

	return {
		missing: missing,
		extra: data
	}
}
