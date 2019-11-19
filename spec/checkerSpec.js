// Tests

let jasmine = require("jasmine");
let { add } = require("../calculator.js")
let { multiply } = require("../calculator.js");

describe("Adding two numbers", () => {
  it("should return sum of numbers proved", () => {
    expect(add(4,5)).toEqual(9);
  });
});
describe("Remembering last entry", () => {
  it("should return 10", () => {
    expect(lasto(1, 2, 3, 4)).toBe(10);
  });
});

/*describe("Multiplying two numbers", () => {
  it("should return 2", () => {
    expect(multiply(1, 2)).toBe(2);
  });
});
describe("Multiplying many numbers", () => {
  it("should return 6", () => {
    expect(multiply(1, 2, 3)).toBe(6);
  });
});*/
