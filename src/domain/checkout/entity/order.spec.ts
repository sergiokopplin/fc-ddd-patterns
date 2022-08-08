import {
  MissingOrderId,
  MissingOrderCustomerId,
  MissingOrderItems,
  NotEnoughOrderItems,
} from "./order.errors";
import { makeSut as makeOrderItemSut } from "../value-object/__mocks__/factory";
import { makeSut } from "./__mocks__/factory";

describe("Order Entity", () => {
  test("Should create Entity without errors", () => {
    const { sut } = makeSut();

    expect(sut).toBeTruthy();
  });

  test("Should get id", () => {
    const { sut } = makeSut({ id: "custom_id" });

    expect(sut.id).toEqual("custom_id");
  });

  test("Should get customerId", () => {
    const { sut } = makeSut({ customerId: "custom_customerId" });

    expect(sut.customerId).toEqual("custom_customerId");
  });

  test("Should get items", () => {
    const { sut } = makeSut({
      items: [
        makeOrderItemSut().sut,
        makeOrderItemSut().sut,
        makeOrderItemSut().sut,
      ],
    });

    expect(sut.items.length).toEqual(3);
  });

  test("Should return total", () => {
    const { sut } = makeSut({
      items: [
        makeOrderItemSut({
          price: 5,
          quantity: 10,
        }).sut,
        makeOrderItemSut({
          price: 10,
          quantity: 5,
        }).sut,
        makeOrderItemSut({
          price: 50,
          quantity: 1,
        }).sut,
      ],
    });

    expect(sut.total()).toEqual(150);
  });

  test("Should throw when id missing", () => {
    expect(() => makeSut({ id: null })).toThrowError(new MissingOrderId());
  });

  test("Should throw when customerId missing", () => {
    expect(() => makeSut({ customerId: null })).toThrowError(
      new MissingOrderCustomerId()
    );
  });

  test("Should throw when items missing", () => {
    expect(() => makeSut({ items: null })).toThrowError(
      new MissingOrderItems()
    );
  });

  test("Should throw when items are zero", () => {
    expect(() => makeSut({ items: [] })).toThrowError(
      new NotEnoughOrderItems()
    );
  });
});
