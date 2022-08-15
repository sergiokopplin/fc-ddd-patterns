import { OrderService } from "./order-service";
import { MinimumItemsOnOrderService } from "./order-service.errors";
import { makeCustomerSut } from "../../customer/entity/__mocks__/customer-factory";
import { makeOrderItemSut } from "../value-object/__mocks__/order-item-factory";
import { makeOrderSut } from "../entity/__mocks__/order-factory";

describe("OrderService Entity", () => {
  test("Should placeOrder and put items", () => {
    const result = OrderService.placeOrder(makeCustomerSut().sut, [
      makeOrderItemSut().sut,
      makeOrderItemSut().sut,
    ]);

    expect(result.items.length).toEqual(2);
  });

  test("Should placeOrder and calculate reward", () => {
    const customer = makeCustomerSut().sut;
    const result = OrderService.placeOrder(customer, [
      makeOrderItemSut({
        price: 10,
        quantity: 2,
      }).sut,
      makeOrderItemSut({
        price: 10,
        quantity: 2,
      }).sut,
    ]);

    expect(result.total()).toBe(40);
    expect(customer.rewardPoints).toBe(20);
  });

  test("Should total", () => {
    const total = OrderService.total([
      makeOrderSut({
        items: [
          makeOrderItemSut({
            price: 100,
            quantity: 3,
          }).sut,
          makeOrderItemSut({
            price: 100,
            quantity: 2,
          }).sut,
          makeOrderItemSut({
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
      OrderService.placeOrder(makeCustomerSut().sut, [])
    ).toThrowError(new MinimumItemsOnOrderService());
  });
});
