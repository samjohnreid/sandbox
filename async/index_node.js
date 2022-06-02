const fs = require('fs');
const csv = require('csv-parser');

const retailers = [];

fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (row) => {
        retailers.push({name: 'hi sam'});
    })
    .on('end', () => {
        console.log('all done!', retailers);
    });
;

console.log(retailers);