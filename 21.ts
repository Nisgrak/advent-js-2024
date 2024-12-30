function treeHeight(tree: { value: string; left: any; right: any } | null): number {

	if (tree === null) {
		return 0;
	}

	return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right));
}
