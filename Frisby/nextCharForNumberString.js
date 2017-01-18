const Box = require('./box.js').Box;

const nextCharForNumberString = str => {
    const trimmed = str.trim();
    const number = parseInt(trimmed);
    const nextNumber = number + 1;
    return String.fromCharCode(nextNumber);
}

const nextCharForNumberString_2 = str => {
    return [str]
        .map(s => s.trim())
        .map(ts => parseInt(ts))
        .map(n => n + 1)
        .map(nn => String.fromCharCode(nn))
}


const nextCharForNumberString_3 = str => {
    return Box(str)
        .map(s => s.trim())
        .map(ts => parseInt(ts))
        .map(n => n + 1)
        .fold(nn => String.fromCharCode(nn))
}

module.exports =  {
    _1: nextCharForNumberString,
    _2: nextCharForNumberString_2,
    _3: nextCharForNumberString_3
}