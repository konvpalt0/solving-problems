export function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    if (map.has(remainder)) {
      result = [i, map.get(remainder)];
      break;
    } else {
      map.set(nums[i], i);
    }
  }

  return result;
}