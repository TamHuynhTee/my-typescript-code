function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// function removeElement(nums: number[], val: number): number {
//     let index = 0;
//     while(index < nums.length) {
//         if (nums[index] === val) {
//             nums.splice(index, 1);
//         } else
//         index++;
//     }

//     return nums.length;
// };
