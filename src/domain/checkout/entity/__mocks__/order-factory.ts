import { faker } from '@faker-js/faker'
import { makeOrderItemSut } from 'domain/checkout'

import { Order, OrderParams } from '../order'

export const makeOrderSut = (params?: Partial<OrderParams>): { sut: Order } => {
  const sutParams: OrderParams = {
    id: faker.datatype.uuid(),
    customerId: faker.datatype.uuid(),
    items: [makeOrderItemSut().sut]
  }

  return {
    sut: new Order(Object.assign(sutParams, params))
  }
}
