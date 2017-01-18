const _ = require('./box.js')

const findColor = name => 
    _.fromNullable(({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'})[name]);

module.exports = findColor;