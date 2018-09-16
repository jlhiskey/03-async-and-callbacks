'use strict';

// Jason- Required Modules
const fs = require('fs');
// Jason- Set up route so module can be exported.
const fileReader = module.exports = {};
// variables
const CHAR_TO_READ = 5;
const finalArray = [];
// Data that is used to test reader.js
// const litanyPath = `${__dirname}/../data/litany.txt`;
// const sherlockPath = `${__dirname}/../data/sherlock.txt`;
// const prideAndPrejudicePath = `${__dirname}/../data/pride-and-pred.txt`;
// const reallyBig = `${__dirname}/../data/reallybig.txt`;
//
// const fileArray = [reallyBig, litanyPath, sherlockPath, prideAndPrejudicePath];
// const emptyArray = [];
// Jason- Inserts the data from the fileArray into the final array after it has been read by fs.
function insertIntoFinal(idx, data) {
  finalArray[idx] = data;
}
// Main function
fileReader.readFiles = (filePaths) => {
  let itemsProcessed = 0;
  if (filePaths.length > 0) {
    for (let i = 0; i < filePaths.length; i++) {
            itemsProcessed++; // eslint-disable-line
            fs.readFile(filePaths[i], (error, data) => { // eslint-disable-line
        const idx = i;
        if (error) {
          console.log('__ERROR__ We could not read your file');
          console.log(error);
          return error;
        }
        insertIntoFinal(idx, data.toString('utf8', 0, CHAR_TO_READ));
        if (!finalArray.includes(undefined) && itemsProcessed === filePaths.length) {
          console.log(finalArray);
          return finalArray;
        }
      });
    }
  }
  return null;
};
