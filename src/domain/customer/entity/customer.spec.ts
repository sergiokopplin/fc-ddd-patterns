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

  test("Should set Address", () => {
    const customAddress = makeAddressSut({
      street: "custom_street",
      city: "custom_city",
      number: 1234,
      zip: "custom_zip",
    }).sut;

    const secondCustomAddress = makeAddressSut({
      street: "second_custom_street",
      city: "second_custom_city",
      number: 12340000,
      zip: "second_custom_zip",
    }).sut;

    const { sut } = makeSut({ address: customAddress });

    expect(sut.address.city).toEqual("custom_city");
    expect(sut.address.number).toEqual(1234);
    expect(sut.address.street).toEqual("custom_street");
    expect(sut.address.zip).toEqual("custom_zip");

    sut.address = secondCustomAddress;

    expect(sut.address.city).toEqual("second_custom_city");
    expect(sut.address.number).toEqual(12340000);
    expect(sut.address.street).toEqual("second_custom_street");
    expect(sut.address.zip).toEqual("second_custom_zip");
  });

  test("Should return isActive", () => {
    const { sut } = makeSut();

    expect(sut.isActive()).toEqual(false);
  });
});
