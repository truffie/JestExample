

// 4.  Необходимо вывести все товары,
// количество которых больше 10 и произведены в Германии
// Написать тест для функции
const arrItems = [
  { id: 1, title: "Часы", count: 10, price: 500, producer: "Германия" },
  { id: 2, title: "Смартфон", count: 33, price: 1500, producer: "Германия" },
  { id: 3, title: "Моноблок", count: 6, price: 2200, producer: "Германия" },
  { id: 4, title: "Ноутбук", count: 13, price: 3000, producer: "Китай" },
  { id: 5, title: "Планшет", count: 22, price: 2100, producer: "Китай" },
  { id: 6, title: "Телевизор", count: 4, price: 4100, producer: "Германия" },
  { id: 7, title: "Холодильник", count: 11, price: 2400, producer: "Германия" },
];
function getAllItems(arrItems) {
  try {
    if (!arrItems || !arrItems.length) {
      return null;
    }
    for (let item of arrItems) {
      if (!item.count || !item.producer) throw new Error("invalid data");
    }
    const arrFiltered = arrItems.filter((e) => e.count > 10 && e.producer === "Германия");
    if (!arrFiltered.length) {
      return null;
    }
    return arrFiltered;
  } catch (error) {
    return error.message;
  }
}
describe("getAllItems test", () => {
  test("correct show items", () => {
    expect(getAllItems(arrItems)).toEqual([
      {
        id: 2,
        title: "Смартфон",
        count: 33,
        price: 1500,
        producer: "Германия",
      },
      {
        id: 7,
        title: "Холодильник",
        count: 11,
        price: 2400,
        producer: "Германия",
      },
    ]);
  });
  test("empty items", () => {
    expect(getAllItems()).toBe(null);
  });
  test("empty filtered", () => {
    expect(getAllItems(["a"])).toBe("invalid data");
  });
});