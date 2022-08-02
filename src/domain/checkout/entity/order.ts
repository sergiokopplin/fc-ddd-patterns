import { OrderItem } from '../value-object/order-item';

type Id = string
type CustomerId = string
type Items = OrderItem[]
type Total = number

export interface OrderParams {
  id: Id,
  customerId: CustomerId
}

export class Order {
  private _id: Id;
  private _customerId: CustomerId;
  private _items: Items;
  private _total: Total;

  constructor ({ id, customerId }: OrderParams) {
    this._id = id
    this._customerId = customerId
  }

  get id () {
    return this._id   
  }

  get customerId () {
    return this._customerId   
  }
}