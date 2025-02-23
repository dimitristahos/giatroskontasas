export function numberToLetters(num: number): string {
  let letters = "";
  while (num > 0) {
    num--; // Adjust for 0-based index
    letters = String.fromCharCode(65 + (num % 26)) + letters;
    num = Math.floor(num / 26);
  }
  return letters;
}
