import { faker } from "@faker-js/faker";
import { Order, OrderParams } from "../order";
import { makeOrderItemSut } from "domain/checkout";

export const makeOrderSut = (params?: Partial<OrderParams>): { sut: Order } => {
  const sutParams: OrderParams = {
    id: faker.datatype.uuid(),
    customerId: faker.datatype.uuid(),
    items: [makeOrderItemSut().sut],
  };

  return {
    sut: new Order(Object.assign(sutParams, params)),
  };
};
