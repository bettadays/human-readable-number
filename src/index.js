module.exports = function toReadable(number) {
    const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let [single, ten, hundred] = number.toString().split('').reverse(); //reverse because length is unpredicatbel
    return (((hundred ? digits[hundred] + ' hundred' + ' ' : '') +
            (ten && ten !== '0' ? (tens[ten] || teens[single]) + ' ' : '') +
            (single && ten !== '1' ? digits[single] : ''))
        .replace('  ', ' ')
        .trim() || 'zero');
}

//initial solution
// function toReadable(number) {
//     let result = '';
//     let digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
//     digitNames[30] = 'thirty';
//     digitNames[40] = 'forty';
//     digitNames[50] = 'fifty';
//     digitNames[60] = 'sixty';
//     digitNames[70] = 'seventy';
//     digitNames[80] = 'eighty';
//     digitNames[90] = 'ninety';

//     let hundreds = parseInt(number / 100);
//     if (hundreds >= 1) {
//         result += digitNames[hundreds] + ' hundred';
//         number = number % (hundreds * 100);
//         if (number === 0) return result;
//         result += ' ';
//     }

//     let tens = parseInt(number / 10);
//     if (tens >= 1) {
//         if (digitNames[number]) {
//             return result += digitNames[number];
//         }
//         result += digitNames[tens * 10] + ' ';
//         number = number % (tens * 10);
//     }

//     result += digitNames[number];
//     return result;

// }
