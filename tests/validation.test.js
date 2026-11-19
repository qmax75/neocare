"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const validation = require("../assets/js/validation.js");

test("parseFinite accepts finite numeric strings and rejects empty/non-finite values", () => {
  assert.equal(validation.parseFinite("0.25"), 0.25);
  assert.equal(validation.parseFinite(""), null);
  assert.equal(validation.parseFinite("Infinity"), null);
  assert.equal(validation.parseFinite("abc"), null);
});
test("positive requires a finite number greater than zero", () => {
  assert.equal(validation.positive("1"), true);
  assert.equal(validation.positive("0"), false);
  assert.equal(validation.positive("-1"), false);
  assert.equal(validation.positive("NaN"), false);
});
test("nonNegative permits zero but rejects negatives and invalid values", () => {
  assert.equal(validation.nonNegative("0"), true);
  assert.equal(validation.nonNegative("0.1"), true);
  assert.equal(validation.nonNegative("-0.1"), false);
  assert.equal(validation.nonNegative(""), false);
});
test("volumeBalance prevents component volume equal to or above final volume", () => {
  assert.equal(validation.volumeBalance("10", ["2", "3"]), true);
  assert.equal(validation.volumeBalance("10", ["10"]), false);
  assert.equal(validation.volumeBalance("10", ["11"]), false);
  assert.equal(validation.volumeBalance("10", ["-1"]), false);
  assert.equal(validation.volumeBalance("10", ["NaN"]), false);
});
