function letterCombinations(digits: string): string[] {
  const digitsLength = digits.length;
  if (!digitsLength) return [];

  const keys: Record<string, string[]> = {
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  const splitDigits = digits.split('');

  const hashMap = splitDigits.reduce(
    (
      result: {
        totalLoops: number;
        digitsLength: number[];
      },
      digit: string
    ) => {
      if (digit in keys && keys[digit].length) {
        result.totalLoops *= keys[digit].length;
        result.digitsLength.push(keys[digit].length);
      }
      return result;
    },
    {
      totalLoops: 1,
      digitsLength: [],
    }
  );

  let i = hashMap.totalLoops;
  const indexes = Array(digitsLength).fill(0);
  const finalElementIndex = indexes.length - 1;
  const results = [];

  while (i > 0) {
    // APPEND STR
    let row = '';
    splitDigits.forEach((digit, index) => {
      row += keys[digit][indexes[index]];
    });
    results.push(row);
    // UPDATE INDEX IN REVERSE
    if (
      indexes[finalElementIndex] <
      hashMap.digitsLength[finalElementIndex] - 1
    ) {
      indexes[finalElementIndex]++;
    } else {
      for (let k = indexes.length - 1; k >= 0; k--) {
        if (indexes[k] < hashMap.digitsLength[k] - 1) {
          indexes[k]++;
          break;
        } else {
          indexes[k] = 0;
        }
      }
    }

    i--;
  }

  return results;
}
