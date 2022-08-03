import { faker } from "@faker-js/faker";
import { Address, AddressParams } from "./address";
import {
  MissingCustomerCity,
  MissingCustomerNumber,
  MissingCustomerStreet,
  MissingCustomerZip,
} from "./address.errors";

export const makeSut = (params?: Partial<AddressParams>): { sut: Address } => {
  const sutParams: AddressParams = {
    street: faker.random.word(),
    city: faker.random.word(),
    zip: faker.random.numeric(7),
    number: faker.datatype.number(3),
  };

  return {
    sut: new Address(Object.assign(sutParams, params)),
  };
};

describe("Address Value Object", () => {
  test("Should create Value Object without errors", () => {
    const { sut } = makeSut();

    expect(sut).toBeTruthy();
  });

  test("Should get street", () => {
    const { sut } = makeSut({ street: "custom_street" });

    expect(sut.street).toBe("custom_street");
  });

  test("Should get number", () => {
    const { sut } = makeSut({ number: 1234 });

    expect(sut.number).toBe(1234);
  });

  test("Should get zip", () => {
    const { sut } = makeSut({ zip: "1234" });

    expect(sut.zip).toBe("1234");
  });

  test("Should get city", () => {
    const { sut } = makeSut({ city: "custom_city" });

    expect(sut.city).toBe("custom_city");
  });

  test("Should throw when street missing", () => {
    expect(() => makeSut({ street: null })).toThrowError(
      new MissingCustomerStreet()
    );
  });

  test("Should throw when number missing", () => {
    expect(() => makeSut({ number: null })).toThrowError(
      new MissingCustomerNumber()
    );
  });

  test("Should throw when zip missing", () => {
    expect(() => makeSut({ zip: null })).toThrowError(new MissingCustomerZip());
  });

  test("Should throw when city missing", () => {
    expect(() => makeSut({ city: null })).toThrowError(
      new MissingCustomerCity()
    );
  });
});
