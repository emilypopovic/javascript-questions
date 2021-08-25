let results = {};

export function getFibonacciUntil(n) {
  //TODO write your code here, remember it should be recursive
    if (n < 3) {
        return [0, 1];
    }

    let arr = getFibonacciUntil(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}
