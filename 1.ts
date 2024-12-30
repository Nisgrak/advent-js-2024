function prepareGifts(gifts: number[]): number[] {

	return [...new Set(gifts)].sort((a, z) => a - z)
}
