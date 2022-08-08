import { OrderService } from "./order-service";
import { MinimumItemsOnOrderService } from "./order-service.errors";
import { makeSut as makeSutCustomer } from "../../customer/entity/__mocks__/factory";
import { makeSut as makeSutOrderItem } from "../value-object/__mocks__/factory";
import { makeSut as makeSutOrder } from "../entity/__mocks__/factory";

describe("OrderService Entity", () => {
  test("Should placeOrder and put items", () => {
    const result = OrderService.placeOrder(makeSutCustomer().sut, [
      makeSutOrderItem().sut,
      makeSutOrderItem().sut,
    ]);

    expect(result.items.length).toEqual(2);
  });

  test("Should placeOrder and calculate reward", () => {
    const customer = makeSutCustomer().sut;
    const result = OrderService.placeOrder(customer, [
      makeSutOrderItem({
        price: 10,
        quantity: 2,
      }).sut,
      makeSutOrderItem({
        price: 10,
        quantity: 2,
      }).sut,
    ]);

    expect(result.total()).toBe(40);
    expect(customer.rewardPoints).toBe(20);
  });

  test("Should total", () => {
    const total = OrderService.total([
      makeSutOrder({
        items: [
          makeSutOrderItem({
            price: 100,
            quantity: 3,
          }).sut,
          makeSutOrderItem({
            price: 100,
            quantity: 2,
          }).sut,
          makeSutOrderItem({
            price: 100,
            quantity: 1,
          }).sut,
        ],
      }).sut,
    ]);

    expect(total).toBe(600);
  });

  test("Should throw when items are zero", () => {
    expect(() =>
      OrderService.placeOrder(makeSutCustomer().sut, [])
    ).toThrowError(new MinimumItemsOnOrderService());
  });
});
