function decodeFilename(filename: string): string {

	return filename.substring(0, filename.lastIndexOf('.')).substring(filename.indexOf('_') + 1)

}
