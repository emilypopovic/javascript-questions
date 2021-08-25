export function Reduce(array, reducer, initialValue) {
  // TODO: write your code here
    let valueResult = 0;

    for(let i = 0; i < array.length; i++) {
        valueResult += reducer(initialValue, array[i]);
    }
    return valueResult;
}
