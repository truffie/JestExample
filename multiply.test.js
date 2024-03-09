
// 2. Написать функцию которая принимает 2 числа и возвращает результат
// произведения 2 множителей. Добавить необходимые проверки.
// Написать тест для функции
function multiply(a, b) {
  try {
    if (typeof a !== "number") throw new Error("first arg is not a number!");
    if (typeof b !== "number") throw new Error("second arg is not a number!");
    return a * b;
  } catch (error) {
    return error.message;
  }
}

describe("multiply test", () => {
  test("correct multiply numbers", () => {
    expect(multiply(2, 4)).toBe(8);
  });
  test("correct second argument", () => {
    expect(multiply(2, "3")).toBe("second arg is not a number!");
  });
  test("correct second argument", () => {
    expect(multiply("3", 2)).toBe("first arg is not a number!");
  });
});