Array.prototype.reduce = function(reducer, initialValue) {
    var acc = initialValue;
    this.forEach((item) => {
       acc = reducer(acc, item);
    });
    // for (let i = 0; i < this.length; i ++) {
    //    acc = reducer(acc, this[i]);
    // }
    return acc || initialValue;
};

var result = [1, 2, 3].reduce((acc, val) => { 
    acc.push(val * 2);
    return acc;
}, []);


console.log(result);