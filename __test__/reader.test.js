'use strict';

const fileReader = require('../lib/reader');

const litanyPath = `${__dirname}/../data/litany.txt`;
const sherlockPath = `${__dirname}/../data/sherlock.txt`;
const prideAndPrejudicePath = `${__dirname}/../data/pride-and-pred.txt`;
const reallyBig = `${__dirname}/../data/reallybig.txt`;

module.exports = {
  setTestFrameworkScriptFile: './jest.setup.js',
};

jest.setTimeout(30000);

const fileArray = [reallyBig, litanyPath, sherlockPath, prideAndPrejudicePath];

describe('#reader.js', () => {
  test('The finalArray should return characters from each .txt file in order', (done) => {
    return fileReader.readFiles(fileArray, (data) => {
      expect(data).toEqual(['Reall', 'I mus', 'Proje', 'The P']);
      done();
    });
  });
  // test('The finalArray null if there is no data', (done) => {
  //     return fileReader.readFiles(fileArray, (data) => {
  //         expect(data).toEqual(['Reall', 'I mus', 'Proje', 'The P']);
  //         done();
  //     });
  // });
});
