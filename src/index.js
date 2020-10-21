const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let decodeString = '';
    let charArr = [];
    for (let i = 0; i < expr.length; i += 10) {
        let char = expr.substring(i, i + 10);
        charArr.push(char);
    }

    for (let i = 0; i < charArr.length; i++) {
        let symbol = charArr[i];
        let symbolDecode = '';


        if (symbol[0] === '*') {
            decodeString += ' '
        } else {
            for (let y = 0; y < symbol.length; y++) {
                if (symbol[y] === '1') {
                    symbol = symbol.substring(y, symbol.length);
                    break;
                } 
            }

            let morseChar;
            for (let z = 0; z < symbol.length; z = z + 2) {
                morseChar = symbol[z] + symbol[z + 1];
                if (morseChar === '10') {
                    symbolDecode += '.';
                } else if (morseChar === '11') {
                    symbolDecode += '-';
                }
            }
            decodeString += MORSE_TABLE[symbolDecode];
        }
    }

    return(decodeString);
}

module.exports = {
    decode
}