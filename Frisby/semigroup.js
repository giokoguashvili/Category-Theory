// a + b + c == (a + b) + c == a + (b + c)
const Sum = x => ({
    x,
    concat: ({x: y}) =>
        Sum(x + y),
    inspect: () => `Sum(${x})`
});

const All = x => ({
    x,
    concat: ({x: y}) =>
        All(x && y),
    inspect: () => `All(${x})`    
});

console.log(Sum(2).concat(Sum(5)));
console.log(All(true).concat(All(true)));
