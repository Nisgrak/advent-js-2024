function calculatePrice(ornaments: string): number | undefined {
	let mapData = {
		'*': 1,
		'o': 5,
		'^': 10,
		'#': 50,
		'@': 100,
	}
	let result = 0

	for (let index = 0; index < ornaments.length; index++) {
		let adorno = ornaments.charAt(index);
		let dataAdorno = mapData[adorno as keyof typeof mapData]
		if (dataAdorno === undefined) {
			return undefined
		}


		let adornoAnterior = ornaments.charAt(index + 1);
		let dataAdornoAnterior = mapData[adornoAnterior as keyof typeof mapData]
		if (dataAdorno < dataAdornoAnterior) {
			result += dataAdorno
		} else {
			result -= dataAdorno
		}

	}

	return -result
}
