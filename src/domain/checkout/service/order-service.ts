import { v4 as uuid } from 'uuid'

import { Customer } from '../../customer/entity/customer'
import { Order } from '../entity/order'
import { OrderItem } from '../value-object/order-item'
import { MinimumItemsOnOrderService } from './order-service-errors'

export class OrderService {
  public static placeOrder (customer: Customer, items: OrderItem[]): Order {
    if (items.length <= 0) {
      throw new MinimumItemsOnOrderService()
    }

    const order = new Order({
      id: uuid(),
      customerId: customer.id,
      items
    })

    customer.addRewardPoints(order.total() / 2)

    return order
  }

  public static total (orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0)
  }
}
