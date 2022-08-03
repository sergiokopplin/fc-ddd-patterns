import { OrderItem } from "../value-object/order-item";
import {
  MissingOrderCustomerId,
  MissingOrderId,
  MissingOrderItems,
  NotEnoughOrderItems,
} from "./order.errors";

type Id = string;
type CustomerId = string;
type Items = OrderItem[];

export interface OrderParams {
  id: Id;
  customerId: CustomerId;
  items: OrderItem[];
}

export class Order {
  private _id: Id;
  private _customerId: CustomerId;
  private _items: Items;

  constructor({ id, customerId, items }: OrderParams) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this.validate();
  }

  get id() {
    return this._id;
  }

  get customerId() {
    return this._customerId;
  }

  get items() {
    return this._items;
  }

  validate(): void {
    if (!this._id) throw new MissingOrderId();
    if (!this._customerId) throw new MissingOrderCustomerId();
    if (!this._items) throw new MissingOrderItems();

    if (this._items.length <= 0) {
      throw new NotEnoughOrderItems();
    }
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }
}
