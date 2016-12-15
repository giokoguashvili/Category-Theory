Array.prototype.concatAll = function() {
    var result = [];
    this.forEach((item) => {
        result = result.concat(item);
    });
    return result;
};

var result = [[1, 2, 3], [4, 5, 6], [7, 8, 9]].concatAll();
console.log(result);