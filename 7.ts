function fixPackages(packages: string): string {
	let internalRegex = /\(([a-z]*)\)/

	let m;

	while ((m = internalRegex.exec(packages)) !== null) {
		if (m.index === internalRegex.lastIndex) {
			internalRegex.lastIndex++;
		}

		packages = packages.replace(m[0], m[1].split("").reverse().join(""))

	}

	return packages
}
