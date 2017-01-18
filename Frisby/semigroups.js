const { Map } = require('immutable-ext');

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

const First = x => ({
    x,
    concat: _ => First(x),
    inspect: () => `First(${x})`   
});

console.log(Sum(2).concat(Sum(5)));
console.log(All(true).concat(All(true)));
console.log(First('React').concat(First('Redux')).concat(First('Saga')));

const acct1 = 
Map({ name: First('Gio'), isPaid: All(true), points: Sum(27), friends: ['kaki'] });
const acct2 = 
Map({ name: First('kogoia'), isPaid: All(false), points: Sum(80), friends: ['fox'] });

const res = acct1.concat(acct2);

console.log(res.toJS());

