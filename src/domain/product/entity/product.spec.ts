import {
  MissingProductId,
  MissingProductName,
  PriceGreaterThanZero,
} from "./product.errors";
import { makeSut } from "./__mocks__/product-factory";

describe("Product Entity", () => {
  test("Should create Entity without errors", () => {
    const { sut } = makeSut();

    expect(sut).toBeTruthy();
  });

  test("Should get id", () => {
    const { sut } = makeSut({ id: "custom_id" });

    expect(sut.id).toBe("custom_id");
  });

  test("Should get name", () => {
    const { sut } = makeSut({ name: "custom_name" });

    expect(sut.name).toBe("custom_name");
  });

  test("Should get price", () => {
    const { sut } = makeSut({ price: 10 });

    expect(sut.price).toBe(10);
  });

  test("Should changeName", () => {
    const { sut } = makeSut({ name: "custom_name" });

    expect(sut.name).toBe("custom_name");

    sut.changeName("second_custom_name");

    expect(sut.name).toBe("second_custom_name");
  });

  test("Should changePrice", () => {
    const { sut } = makeSut({ price: 1234 });

    expect(sut.price).toBe(1234);

    sut.changePrice(123456);

    expect(sut.price).toBe(123456);
  });

  test("Should throw when id missing", () => {
    expect(() => makeSut({ id: null })).toThrowError(new MissingProductId());
  });

  test("Should throw when name missing", () => {
    expect(() => makeSut({ name: null })).toThrowError(
      new MissingProductName()
    );
  });

  test("Should throw when price less than zero", () => {
    expect(() => makeSut({ price: -1 })).toThrowError(
      new PriceGreaterThanZero()
    );
  });
});
