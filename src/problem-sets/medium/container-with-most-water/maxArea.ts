export function maxArea(height: number[]): number {
  let left: number = 0;
  let right: number = height.length - 1;
  let maxArea: number = 0;

  while (left < right) {
    const newArea: number = Math.min(height[left], height[right]) * (right - left);
    maxArea = maxArea > newArea ? maxArea : newArea;
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return maxArea;
}