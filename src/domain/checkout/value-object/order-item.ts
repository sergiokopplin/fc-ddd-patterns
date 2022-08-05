type Id = string;
type ProductId = string;
type Name = string;
type Price = number;
type Quantity = number;

export interface OrderItemParams {
  id: Id;
  name: Name;
  productId: ProductId;
  price: Price;
  quantity: Quantity;
}

export class OrderItem {
  private _id: Id;
  private _name: Name;
  private _productId: ProductId;
  private _price: Price;
  private _quantity: Quantity;

  constructor({ id, name, productId, quantity, price }: OrderItemParams) {
    this._id = id;
    this._name = name;
    this._productId = productId;
    this._quantity = quantity;
    this._price = price;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get productId() {
    return this._productId;
  }

  get quantity() {
    return this._quantity;
  }

  get price() {
    return this._price * this._quantity;
  }
}
