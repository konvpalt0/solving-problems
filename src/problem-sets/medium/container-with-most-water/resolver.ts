export function resolver(height: number[]): number {
	let left = 0;
	let right = height.length - 1;
	let maxArea = 0;

	while (left < right) {
		const newArea: number =
			Math.min(height[left], height[right]) * (right - left);
		maxArea = maxArea > newArea ? maxArea : newArea;
		if (height[left] < height[right]) {
			left += 1;
		} else {
			right -= 1;
		}
	}

	return maxArea;
}
