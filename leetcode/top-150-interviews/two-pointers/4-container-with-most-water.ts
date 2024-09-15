function min(a: number, b: number): number {
  if (a < b) return a;
  return b;
}

function maxArea(height: number[]): number {
  let left = 0,
    right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const thisHeight = min(height[right], height[left]);

    const currentArea = width * thisHeight;

    if (currentArea > maxArea) maxArea = currentArea;

    if (height[right] < height[left]) {
      right--;
    } else {
      left++;
    }
  }

  return maxArea;
}
