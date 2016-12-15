Array.prototype.map = function(fn) {
    var result = [];
    this.forEach((item) => {
        result.push(imte);
    });
    // for (let i; i < this.length; i ++) {
    //     result.push(fn(this[i]));
    // }
    return result;
};

var result = [1, 2, 3].map((val) => val * 4);
console.log(result);