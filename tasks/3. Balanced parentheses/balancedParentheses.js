export function areParenthesesBalanced(inputString) {
  // TODO: write your code here
    if(inputString.length === 0 ) {
        return true;
    }
    let bracketStack = [];
    let bracketMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === '(' || inputString[i] === '{' || inputString[i] === '[' ) {
            bracketStack.push(inputString[i]);
        }
        else if(inputString[i] === ')' || inputString[i] === '}' || inputString[i] === ']') {
            //if inputString[i] is a closing brace
            //then check if the element before is the correct open brace
            let last = bracketStack.pop();
            if (inputString[i] !== bracketMap[last]) {
                return false
            }
        }
    }
    return bracketStack.length === 0;
}