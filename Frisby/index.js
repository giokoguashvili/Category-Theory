const nextCharForNumberString = str => {
    const trimmed = str.trim();
    const number = parseInt(trimmed);
    const nextNumber = number + 1;
    return String.fromCharCode(nextNumber);
}



console.log(nextCharForNumberString('  64 '));