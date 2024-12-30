function isTreesSynchronized(
	tree1: { value: string; left?: any; right?: any } | undefined,
	tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {

	let test = [{ node1: tree1, node2: tree2 }]
	let result = true

	while (result && test.length) {
		let t1 = test.pop()!

		let node1 = t1.node1
		let node2 = t1.node2

		result &&= node1?.value === node2?.value

		if (node1 && node2) {
			test.push({ node1: node1.left, node2: node2.right })
			test.push({ node1: node1.right, node2: node2.left })
		}

	}

	return [ result, tree1!.value ]
}
