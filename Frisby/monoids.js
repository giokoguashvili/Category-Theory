const { Map, List } = require('immutable-ext');

const Sum = x => ({
    x,
    concat: ({x: y}) =>
        Sum(x + y),
    inspect: () => `Sum(${x})`
})
Sum.empty = () => Sum(0);

const Product = x => ({
    x,
    concat: ({x: y}) =>
        Product(x * y)
})
Product.empty = () => Product(1);

const Any = x => ({
    x,
    concat: ({x: y}) =>
        Any(x || y)
})
Any.empty = () => Any(false);

const All = x => ({
    x,
    concat: ({x: y}) =>
        All(x && y)
})
All.empty = () => All(true);

const Max = x => ({
    x,
    concat: ({x: y}) =>
        Max(x > y ? x : y)
})
Max.empty = () => Max(-Infinity);

const Min = x => ({
    x,
    concat: ({x: y}) =>
        Min(x < y ? x : y)
})
Min.empty = () => Min(Infinity);

/////////////////////////////////////////////////////// monoids

// const Box = x => ({
//     map: f => Box(f(x)),
//     fold: f => f(x),
// });

const Right = x => ({
    chain: f => f(x), 
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    concat: o =>
        o.fold(
            e => Left(e),
            r => Right(x.concat(r))
        )
});

const Left = x => ({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    concat: o => Left(x)
});

const First = either => ({
    fold: f => f(either),
    concat: o => either.isLeft ? o : First(either)
});

First.empty = () => First(Left());

const res = List.of(Sum(1), Sum(2), Sum(3))
    .fold(Sum.empty())
    //.reduce((acc, x) => acc.concat(x), Sum.empty());

const res2 = List.of(3, 4, 5)
    .foldMap(Sum, Sum.empty());
console.log(res);
console.log(res2);