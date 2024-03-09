
// 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции
function getUniqueTel(arrTel) {
  try {
    if (!arrTel || !arrTel.length) throw new Error("invalid array of tel");
    const uniqueTel = [];
    for (let tel of arrTel) {
      if (/[a-zA-Z]/gi.test(arrTel)) throw new Error("number contains letters");

      if (arrTel.indexOf(tel) === arrTel.lastIndexOf(tel)) {
        uniqueTel.push(tel);
      }
    }

    return uniqueTel;
  } catch (error) {
    return error.message;
  }
}
describe("uniqueArrTel test", () => {
  test("success", () => {
    const arrTel = ["892111122233", "892111122233", "892111122232", "892111122231", "892111122231", "892111122230"];
    const res = getUniqueTel(arrTel);
    expect(res).toEqual(["892111122232", "892111122230"]);
    expect(res.length).toBe(2);
    expect(res).toHaveLength(2);
  });
  test("empty array. should return an error", () => {
    expect(getUniqueTel([])).toBe("invalid array of tel");
  });
  test("empty arg. should return an error", () => {
    expect(getUniqueTel()).toBe("invalid array of tel");
  });
  test("includes letters. should return <an></an> error", () => {
    const arrTel = ["asdf", "fdsfs"];
    const res = getUniqueTel(arrTel);
    expect(res).toBe("number contains letters");
  });
});