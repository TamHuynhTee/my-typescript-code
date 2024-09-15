/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let num1Index = m - 1,
    num2Index = n - 1,
    right = m + n - 1;

  while (num2Index > -1) {
    if (num1Index >= 0 && nums1[num1Index] > nums2[num2Index]) {
      nums1[right] = nums1[num1Index];
      num1Index--;
    } else {
      nums1[right] = nums2[num2Index];
      num2Index--;
    }
    right--;
  }
}
