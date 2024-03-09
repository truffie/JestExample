// Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
// Добавить необходимые проверки.
// Написать тест для функции
function pow(a, b) {
  try {
    if (isNaN(a) || isNaN(b)) throw new Error("args not a numbers!");
    if (typeof (a ** b) !== "number") throw new Error("res not a number!");
    return a ** b;
  } catch (error) {
    return error.message;
  }
}
describe("pow test", () => {
  test("1 check for pow", () => {
    expect(pow(1, 2)).toBe(1);
  });
  test("2 check for pow", () => {
    expect(pow(2, 2)).toBe(4);
  });
  test("3 check for pow", () => {
    expect(pow("a", 2)).toBe("args not a numbers!");
  });
});