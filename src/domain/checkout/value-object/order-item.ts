type Id = string
type ProductId = string
type Name = string
type Price = number
type Quantity = number

export interface OrderItemParams {
  id: Id
  name: Name
  productId: ProductId
  price: Price
  quantity: Quantity
}

export class OrderItem {
  private readonly _id: Id
  private readonly _name: Name
  private readonly _productId: ProductId
  private readonly _price: Price
  private readonly _quantity: Quantity

  constructor ({ id, name, productId, quantity, price }: OrderItemParams) {
    this._id = id
    this._name = name
    this._productId = productId
    this._quantity = quantity
    this._price = price
  }

  get id (): Id {
    return this._id
  }

  get name (): Name {
    return this._name
  }

  get productId (): ProductId {
    return this._productId
  }

  get quantity (): Quantity {
    return this._quantity
  }

  get price (): Price {
    return this._price * this._quantity
  }
}
