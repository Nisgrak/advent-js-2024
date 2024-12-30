type Inventory = Array<
	{ name: string, quantity: number, category: string }
>

function organizeInventory(inventory: Inventory): object {
	let result: Record<string, Record<string, number>> = {}

	for (let element of inventory) {
		if (result[element.category] === undefined) {
			result[element.category] = {
				[element.name]: element.quantity
			}
			continue;
		}

		if (result[element.category][element.name] === undefined) {
			result[element.category][element.name] = element.quantity
			continue;
		}

		result[element.category][element.name] += element.quantity

	}

	return result
}
