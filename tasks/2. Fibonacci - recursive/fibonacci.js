export function getFibonacciUntil(n) {
  //TODO write your code here, remember it should be recursive
    if(n <= 1) {
        return 1;
    }
    else {
        return getFibonacciUntil(n-1) + getFibonacciUntil(n-2);
    }
}
