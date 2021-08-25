export function isPalindrome(inputString) {
  // TODO: write your code here
    const len = inputString.length;

    for (let i = 0; i < len / 2; i++) {
        const endIndex = len - 1 - i;
        if (inputString[i] !== inputString[endIndex]) {
            return false;
        }
    }
    return true;
}