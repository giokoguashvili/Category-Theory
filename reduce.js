Array.prototype.reduce = function(reducer, initialValue) {
    var acc = initialValue;
    this.forEach((item) => {
       acc = reducer(acc, item);
    });
    return acc || initialValue;
};

var result = [1, 2, 3].reduce((acc, val) => { 
    acc.push(val * 2);
    return acc;
}, []);


console.log(result);