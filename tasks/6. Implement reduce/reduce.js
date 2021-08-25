export function Reduce(array, reducer, initialValue) {
  // TODO: write your code here
    let valueResult = '';
    for(let i = 0; i < array.length; i++) {
        if(typeof array[i] == 'number' && i === 0) {
            valueResult = 0;
        }
        valueResult += reducer(initialValue, array[i]);
    }
    return valueResult;
}
