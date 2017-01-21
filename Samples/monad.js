Array.prototype.concatAll = function() {
    var result = [];
    this.forEach((item) => {
        result = result.concat(item);
    });
    return result;
};

function output() { return Array.from(arguments).map(i => console.log(i)); }

const fnA = (number) =>
    number.toString().split('');

const fnB = (numbers) =>
    numbers.map(n => fnA(n)).concatAll();

output(
    // fnA :: a -> [b]
    fnA(10), // ['1', '0']

    // funB :: [a] -> [b]
    fnB([10,11,12]) // ['1','0','1','1','1','2']
); 

//monad :: (a -> [b]) -> ([a] -> [b])
function monad(fnA) {
    return function(numbers) {
        return numbers
            .map(n => fnA(n))
            .concatAll();
    }
}

Array.prototype.bind = function(fnA) {
    return monad(fnA)(this);
}

output(
    [10,11,12,13].bind(fnA),
    [10,11,12,13,14].bind(number => number.toString().split(''))
);

