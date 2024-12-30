function removeSnow(s: string): string {
	let internalRegex = /(.)\1{1}/

	let m;

	while ((m = internalRegex.exec(s)) !== null) {
		if (m.index === internalRegex.lastIndex) {
			internalRegex.lastIndex++;
		}
		s = s.replace(m[0], "")

	}

	return s
}
