import { faker } from "@faker-js/faker";
import { Address, AddressParams } from "./address";

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
});
