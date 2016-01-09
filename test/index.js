import doc from '../src/index';
import { assert } from 'chai';

describe('doc', function () {
  it('should return a value that is defined', function () {
    const actual = doc();

    assert.isDefined(actual);
  });
});
