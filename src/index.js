const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
       let str = '';
 for (let i = 0 ; i < expr.length; i +=10) {
 let letter = expr.slice ( i , i + 10 ).replace(/00/g,'').replace(/10/g,'.').replace(/11/g,'-');
 if ( letter  === '**********') {
str += ' '
 } else {
        for (let item in MORSE_TABLE) {
             if (item === letter) {
                str += MORSE_TABLE[item];
      }
    }
 }
 };
 return str;
    }

module.exports = {
    decode
}