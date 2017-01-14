const fs = require('fs');
const _ = require('./box.js');

// const getPort = () => {
//     try {
//         const str = fs.readFileSync('./config.json');
//         const config = JSON.parse(str);
//         return config.port;
//     } catch (e) {
//         return 8080;
//     }
// }

const getPort = () =>
    _.tryCatch(() => fs.readFileSync('./Frisby/config.json'))
        .chain(str => _.tryCatch(() => JSON.parse(str)))
        .fold(
            c => 8080,
            c => c.port
        );

console.log(getPort());