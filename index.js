/**
 * Creates a ~100MB (100.7 measured by MacOS) CSV format file containing 12 columns, 3 of each type
 * The same file will be generated each time this script is run, and
 *  it will be saved into file 'datafile.txt'
 */

const fs = require('fs');
let stream = fs.createWriteStream(`${__dirname}/datafile.txt`);

for (let i = 0; i < 1000000; i++) {
  stream.write(''
              .concat(`string ${i},`)              // col 1  - String
              .concat(`${i},`)                     // col 2  - Int
              .concat(`${i % 2},`)                 // col 3  - Bool
              .concat(`${i + (i % 10) / 10},`)     // col 4  - Float
              .concat(`string ${999999 - i},`)     // col 5  - String
              .concat(`${999999 - i},`)            // col 6  - Int
              .concat(`${(i + 1) % 2},`)           // col 7  - Bool
              .concat(`${i + (i % 10) / 5},`)      // col 8  - Float
              .concat(`string ${i},`)              // col 9  - String
              .concat(`${i},`)                     // col 10 - Int
              .concat(`${i % 2},`)                 // col 11 - Bool
              .concat(`${i + (i % 10) / 10}`)      // col 12 - Float
              .concat('\n')); 
}