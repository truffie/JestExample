
// 3. Написать функцию которая принимает массив чисел и находит сумму всех
// элементов. Добавить необходимые проверки.
// Написать тест для функции
function sumElArr(arrNum) {
  try {
    if (!arrNum) throw new Error("empty arguments!");
    if (!arrNum.length) {
      return 0;
    }
    if (arrNum.some((e) => typeof e !== "number")) throw new Error("array must includes only numbers");
    const sum = arrNum.reduce((prev, cur) => prev + cur, 0);
    if (typeof sum !== "number") throw new Error("sum not a number!");

    return sum;
  } catch (error) {
    return error.message;
  }
}
describe("sum array elements", () => {
  test("correct sum", () => {
    expect(sumElArr([1, 2, 3, 4])).toBe(10);
  });
  test("length", () => {
    expect(sumElArr([])).toBe(0);
  });
  test("correct sum #2", () => {
    expect(sumElArr()).toBe("empty arguments!");
  });
  test("correct numbers", () => {
    expect(sumElArr([1, "2", "3"])).toBe("array must includes only numbers");
  });
});