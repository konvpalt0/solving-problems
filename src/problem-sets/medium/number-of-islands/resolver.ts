function numIslands(grid: string[][]): number {
	let islandsCount = 0;

	grid.forEach((row, r) =>
		row.forEach((cell, c) => {
			if (cell === '1') {
				islandsCount++;
				revealTheIsland(grid, r, c);
			}
		})
	);

	return islandsCount;
}

function revealTheIsland(grid: string[][], r: number, c: number): void {
	const dfs = (r: number, c: number): void => {
		if (grid[r][c] === '1') {
			grid[r][c] = '0';
		} else return;

		if (r >= 1) dfs(r - 1, c);
		if (c >= 1) dfs(r, c - 1);
		if (r + 1 < grid.length) dfs(r + 1, c);
		if (c + 1 < grid[0].length) dfs(r, c + 1);
	};

	dfs(r, c);
}

export default numIslands;
