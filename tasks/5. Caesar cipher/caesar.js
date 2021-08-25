export function encryptCaesar(inputString, key) {
  // TODO: write your code here
    let decipherString = '';

    for(let i = 0; i < inputString.length; i++) {
        if (inputString[i] === inputString[i].toUpperCase()) {
            decipherString += String.fromCharCode((inputString.charCodeAt(i) + key - 65) % 26 + 65);
        } else {
            decipherString += String.fromCharCode((inputString.charCodeAt(i) + key - 97) % 26 + 97);
        }
    }
    return decipherString;
}
