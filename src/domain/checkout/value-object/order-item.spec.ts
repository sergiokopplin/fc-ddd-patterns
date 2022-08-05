import { makeSut } from "./__mocks__/factory";

describe("OrderItem Value Object", () => {
  test("Should create Entity without errors", () => {
    const { sut } = makeSut();

    expect(sut).toBeTruthy();
  });

  test("Should get id", () => {
    const { sut } = makeSut({ id: "custom_id" });

    expect(sut.id).toEqual("custom_id");
  });

  test("Should get name", () => {
    const { sut } = makeSut({ name: "custom_name" });

    expect(sut.name).toEqual("custom_name");
  });

  test("Should get productId", () => {
    const { sut } = makeSut({ productId: "custom_productId" });

    expect(sut.productId).toEqual("custom_productId");
  });

  test("Should get quantity", () => {
    const { sut } = makeSut({ quantity: 3 });

    expect(sut.quantity).toEqual(3);
  });

  test("Should get price", () => {
    const { sut } = makeSut({ price: 5, quantity: 10 });

    expect(sut.price).toEqual(50);
  });
});
