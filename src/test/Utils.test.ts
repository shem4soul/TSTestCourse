import { toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return uppercase of valid string", () => {
    // Arrange
    const sut = toUpperCase;
    const expected = "ABC";

    // Act
    const actual = sut("abc");

    // Assert
    expect(actual).toBe(expected);
  });
});
