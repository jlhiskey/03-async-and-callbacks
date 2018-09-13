'use strict';

const fileReader = require('../lib/reader');

const litanyPath = `${__dirname}/../data/litany.txt`;

describe('#reader.js', () => {
  test('The first 5 characters of a file should be read', (done) => {
    return fileReader.arrayReturn(litanyPath, 5, (data) => {
      expect(data).toEqual('I mus');
      done();
    });
  });
});
