function output() { return Array.from(arguments).map(i => console.log(i)); }

Array.prototype.reduce = function(reducer, initialValue) {
    var acc = initialValue;
    this.forEach((item) => {
       acc = reducer(acc, item);
    });
    return acc || initialValue;
};

Array.prototype.map = function(fn) {
    return this.reduce((acc, val) => {
        acc.push(fn(val));
        return acc;
    }, []);
};

Array.prototype.filter = function(fn) {
    var result = [];
    this.forEach((item) => {
        if (fn(item)) result.push(item);
    });
    return result;
};


Array.prototype.filter = function(fn) {
    return this.reduce((acc, val) => {
        if (fn(val)) acc.push(val);
        return acc;
    }, []);
};


output(
    [1, 2, 3].reduce((acc, val) => { 
        acc.push(val * 2);
        return acc;
    }, []),
    [1,2,3].map(x => x * 3),
    [1,2,3,4].filter(x => x % 2 === 0)
);