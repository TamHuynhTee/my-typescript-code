function isPalindrome(s: string): boolean {
  const formatStr = s.replaceAll(/[^a-zA-Z\d]/g, '').toLowerCase();
  const strLength = formatStr.length;
  for (let i = 0; i < strLength / 2; i++) {
    if (formatStr[i] != formatStr[strLength - 1 - i]) return false;
  }
  return true;
}
