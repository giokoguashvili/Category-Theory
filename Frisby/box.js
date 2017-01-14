const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
});

const Right = x => ({
    chain: f => f(x), 
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: () => `Right(${x})`
});

const Left = x => ({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `Left(${x})`
});

const fromNullable = x => 
    x === null || x === undefined ? Left(null) : Right(x);

const tryCatch = f => {
    try {
        return Right(f());
    } catch (e) {
        return Left(e);
    }
}

module.exports = {
    Box,
    Left, 
    Right,
    fromNullable,
    tryCatch
};