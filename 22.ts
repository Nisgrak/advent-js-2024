function generateGiftSets(gifts: string[]): string[][] {
	let result: string[][] = []

	function generateCombinations(arr: string[], size: number, start: number, temp: string[]) {
		if (temp.length === size) {
			result.push([...temp]);
			return;
		}

		for (let i = start; i < arr.length; i++) {
			temp.push(arr[i]);
			generateCombinations(arr, size, i + 1, temp);
			temp.pop();
		}
	}

	for (let i = 1; i <= gifts.length; i++) {
		generateCombinations(gifts, i, 0, []);
	}



	return result
}
