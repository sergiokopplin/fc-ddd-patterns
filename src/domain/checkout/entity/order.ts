import { OrderItem } from '../value-object/order-item';
import { MissingOrderCustomerId, MissingOrderId } from './order.errors';

type Id = string
type CustomerId = string
type Items = OrderItem[]
type Total = number

export interface OrderParams {
  id: Id,
  customerId: CustomerId,
  items: OrderItem[]
}

export class Order {
  private _id: Id;
  private _customerId: CustomerId;
  private _items: Items;
  private _total: Total;

  constructor ({ id, customerId, items }: OrderParams) {
    this._id = id
    this._customerId = customerId
    this._items = items
    this.validate()
  }

  get id () {
    return this._id   
  }

  get customerId () {
    return this._customerId   
  }

  get items () {
    return this._items   
  }

  validate(): void {
    if (!this._id) throw new MissingOrderId();
    if (!this._customerId) throw new MissingOrderCustomerId();
  }
}