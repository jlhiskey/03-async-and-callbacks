'use strict';

const fs = require('fs');

const fileReader = module.exports = {};
//! Vinicio - in a different file I'll import file-reader by doing...
//! require('file-reader');


fileReader.arrayReturn = (paths, callback) => {
  // console.log(`Reading ${filePath}`);

  return fs.readFile(paths, (error, result) => {
    if (error) {
      callback(error);
    }
    return callback(null, result);
  });
};
