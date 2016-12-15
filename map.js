Array.prototype.map = function(fn) {
    var result = [];
    this.forEach((item) => {
        result.push(fn(item));
    });
    return result;
};

var result = [1, 2, 3].map((val) => val * 4);
console.log(result);