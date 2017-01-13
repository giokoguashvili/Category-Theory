const Box = require('./box.js');

const moneyToFloat = str => 
    Box(str)
        .map(s => s.replace('$', ''))
        .map(s => parseFloat(s));

const percentToFloat = str =>
    Box(str)
        .map(s => s.replace('%', ''))
        .map(s => parseFloat(s))
        .map(f => f * 0.01);

const applyDiscount = (price, discount) => 
    moneyToFloat(price)
        .fold(p => 
            percentToFloat(discount)
                .fold(disc => p - p * disc)
        )

module.exports = applyDiscount;