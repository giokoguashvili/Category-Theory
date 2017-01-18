
const nextCharForNumberString = require('./nextCharForNumberString.js');
const applyDiscount = require('./applyDiscount.js');
const findColor = require('./findColor.js');

console.log(nextCharForNumberString._1('  67 '));
console.log(nextCharForNumberString._2('  67 '));
console.log(nextCharForNumberString._3('  67 '));
console.log(applyDiscount('127$', '27%'));
console.log(
    findColor('reds')
        .map(c => c.slice(1))
        .fold(
            x => "no color", 
            x => x.toUpperCase()
        )
);