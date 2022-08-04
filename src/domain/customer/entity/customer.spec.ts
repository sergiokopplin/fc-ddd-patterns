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

  test("Should get id", () => {
    const { sut } = makeSut({ id: "custom_id" });

    expect(sut.id).toEqual("custom_id");
  });

  test("Should get name", () => {
    const { sut } = makeSut({ name: "custom_name" });

    expect(sut.name).toEqual("custom_name");
  });

  test("Should get rewardPoints", () => {
    const { sut } = makeSut({ rewardPoints: 1234 });

    expect(sut.rewardPoints).toEqual(1234);
  });

  test("Should get Address", () => {
    const customAddress = makeAddressSut().sut;
    const { sut } = makeSut({ address: customAddress });

    expect(sut.address).toEqual(customAddress);
  });
});
