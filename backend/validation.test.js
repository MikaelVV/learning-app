const { test } = require("node:test");
const assert = require("node:assert");
const {
  isValidConfidence,
  isValidTopic
} = require("./validation");

test("confidence must be an integer between 1 and 5", () => {
  // Valid input
  assert.strictEqual(isValidConfidence(4), true);

  // Invalid input
  assert.strictEqual(isValidConfidence(6), false);
});


test("topic must not be empty or contain only whitespace", () => {
  // Valid input
  assert.strictEqual(isValidTopic("React"), true);

  // Invalid input
  assert.strictEqual(isValidTopic("   "), false);
});
