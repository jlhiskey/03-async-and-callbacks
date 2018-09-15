'use strict';

const fs = require('fs');

const fileReader = module.exports = {};

const CHAR_TO_READ = 5;
const finalArray = [];

function insertIntoFinal(idx, data) {
  finalArray[idx] = data;
  // if (!finalArray.includes(undefined) && finalArray.length === arrLength) {
  //   console.log(finalArray);
  //   return new Promise(((resolve, reject) => {
  //     resolve(finalArray);
  //
  //     if (false) {
  //       reject(Error(300));
  //     }
  //   }));
  // }
  // return null;
}


// async function callback() {
//   return new Promise(((resolve) => {
//     resolve(finalArray);
//   }));
// }

fileReader.readFiles = (filePaths) => {
  let itemsProcessed = 0;
  if (filePaths.length !== 0) {
    for (let i = 0; i < filePaths.length; i++) {
      itemsProcessed++; // eslint-disable-line
      fs.readFileSync(filePaths[i], (error, data) => { // eslint-disable-line
        const idx = i;
        if (error) {
          console.log('__ERROR__ We could not read your file');
          console.log(error);
          return error;
        }
        insertIntoFinal(idx, data.toString('utf8', 0, CHAR_TO_READ), filePaths.length);
        if (!finalArray.includes(undefined) && itemsProcessed === filePaths.length) {
          return Promise.resolve();
        }

        // return new Promise(((resolve, reject) => {
        //   if (!finalArray.includes(undefined) && finalArray.length === filePaths.length) {
        //     resolve(finalArray);
        //   } else {
        //     reject(Error(300));
        //   }
        // }));
      });
    }
  }
};
