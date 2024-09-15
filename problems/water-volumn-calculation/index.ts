/**
 * Given n non-negative integers representing an elevation
 * map where the width of each bar is 1, calculate the amount
 * of water that can accumulate after rain
 */

function waterVolumeCalculation(heights: number[]): number {
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let volume = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] >= leftMax) {
        leftMax = heights[left];
      } else {
        volume += leftMax - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= rightMax) {
        rightMax = heights[right];
      } else {
        volume += rightMax - heights[right];
      }
      right--;
    }
  }

  return volume;
}

console.log(waterVolumeCalculation([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(waterVolumeCalculation([4, 2, 0, 3, 2, 5]));
