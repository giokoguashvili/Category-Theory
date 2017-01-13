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

console.log(nextCharForNumberString('  64 '));
console.log(nextCharForNumberString_2('  66 '));