import { faker } from "@faker-js/faker";
import { Customer, CustomerParams } from "./customer";
import { makeSut as makeAddressSut } from "../value-object/address.spec";

const makeSut = (params?: Partial<CustomerParams>): { sut: Customer } => {
  const sutParams: CustomerParams = {
    id: faker.datatype.uuid(),
    active: false,
    name: faker.random.word(),
    rewardPoints: 0,
    address: makeAddressSut().sut,
  };

  return {
    sut: new Customer(Object.assign(sutParams, params)),
  };
};

describe("Customer Entity", () => {
  test("Should create Entity without errors", () => {
    const { sut } = makeSut();

    expect(sut).toBeTruthy();
  });
});
