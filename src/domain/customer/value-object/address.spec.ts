import {
  MissingCustomerCity,
  MissingCustomerNumber,
  MissingCustomerStreet,
  MissingCustomerZip,
} from "./address.errors";
import { makeSut } from "./__mocks__/factory";

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

  test("Should return toString", () => {
    const { sut } = makeSut({
      city: "custom_city",
      number: 1234,
      street: "custom_street",
      zip: "custom_zip",
    });

    expect(sut.toString()).toBe("custom_street, 1234, custom_zip custom_city");
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
