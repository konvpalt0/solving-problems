function floodFill(
	image: number[][],
	sr: number,
	sc: number,
	newColor: number
): number[][] {
	const startColor = image[sr][sc];

	const cImage = image.map((row) => row.map((cell) => cell));

	if (newColor === startColor) return cImage;

	const flooding = (sr: number, sc: number) => {
		const top = sr === 0 ? null : sr - 1;
		const left = sc === 0 ? null : sc - 1;
		const right = sc === cImage[0].length - 1 ? null : sc + 1;
		const bottom = sr === cImage.length - 1 ? null : sr + 1;

		cImage[sr][sc] = newColor;

		if (top !== null) cImage[top][sc] === startColor && flooding(top, sc);
		if (left !== null) cImage[sr][left] === startColor && flooding(sr, left);
		if (right !== null) cImage[sr][right] === startColor && flooding(sr, right);
		if (bottom !== null)
			cImage[bottom][sc] === startColor && flooding(bottom, sc);

		return;
	};

	flooding(sr, sc);

	return cImage;
}

export default floodFill;
