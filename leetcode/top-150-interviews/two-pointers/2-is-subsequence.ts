function isSubsequence(s: string, t: string): boolean {
  const sLength = s.length;
  const tLength = t.length;

  if (sLength === 0) return true;

  let sIndex = 0;
  let tIndex = 0;

  while (tIndex < tLength) {
    if (t[tIndex] == s[sIndex]) {
      sIndex++;
    }
    tIndex++;
    if (sIndex === sLength) return true;
  }

  return false;
}
