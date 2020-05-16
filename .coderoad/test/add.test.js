// assert docs: https://nodejs.org/api/assert.html#assert_assert
const assert = require("assert");
const { add } = require("../../src/add");

describe("Example", function () {
  it("should add one number", function () {
    const result = add(1) === 1;
    const message = "Should accept a single param";
    assert.ok(result, message);
    const result2 = add(42) === 42;
    assert.ok(result2, message);
  });
  it("should add two numbers", function () {
    const result = add(1, 2) === 3;
    const message = "Should accept two params";
    assert.ok(result, message);
    const result2 = add(42, 4) === 46;
    assert.ok(result2, message);
  });
  it("should add three numbers", function () {
    const result = add(1, 2, 3) === 6;
    const message = "Should accept three params";
    assert.ok(result, message);
    const result2 = add(42, 4, 4) === 50;
    assert.ok(result2, message);
  });
});
