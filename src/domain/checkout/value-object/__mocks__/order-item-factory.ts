import { faker } from "@faker-js/faker";
import { OrderItem, OrderItemParams } from "../order-item";

export const makeOrderItemSut = (
  params?: Partial<OrderItemParams>
): { sut: OrderItem } => {
  const sutParams: OrderItemParams = {
    id: faker.datatype.uuid(),
    name: faker.random.word(),
    price: faker.datatype.number(),
    productId: faker.datatype.uuid(),
    quantity: faker.datatype.number(),
  };

  return {
    sut: new OrderItem(Object.assign(sutParams, params)),
  };
};
