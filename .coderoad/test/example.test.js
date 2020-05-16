// assert docs: https://nodejs.org/api/assert.html#assert_assert
const assert = require('assert');
const { echo } = require('../../src/index');

describe('Example', function () {
  it('should return true', function () {
    const result = echo(true) === true;
    assert.ok(result, 'There is no truth, only lies!');
  });
});
