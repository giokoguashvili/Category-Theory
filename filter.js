Array.filter = function(fn) {
    var result = [];
    this.forEach((item) => {
        if (fn(item)) result.push(item);
    });
    // for (let i; i < this.length; i ++) {
    //     let item = this[i];
    //     if (fn(item)) {
    //         result.push(item);
    //     }
    // }
    return result;
};

var result = [1, 2, 3].filter((val) => val === 2);
console.log(result);