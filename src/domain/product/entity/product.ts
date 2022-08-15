import {
  MissingProductId,
  MissingProductName,
  PriceGreaterThanZero
} from './product.errors'

type Id = string
type Name = string
type Price = number

export interface ProductParams {
  id: Id
  name: Name
  price: Price
}

export class Product {
  private readonly _id: Id
  private _name: Name = ''
  private _price: Price = 0

  constructor ({ id, name, price }: ProductParams) {
    this._id = id
    this._name = name
    this._price = price
    this.validate()
  }

  get id (): Id {
    return this._id
  }

  get name (): Name {
    return this._name
  }

  get price (): Price {
    return this._price
  }

  changeName (name: Name): void {
    this._name = name
    this.validate()
  }

  changePrice (price: Price): void {
    this._price = price
    this.validate()
  }

  validate (): void {
    if (!this._id) throw new MissingProductId()
    if (!this._name) throw new MissingProductName()
    if (this._price < 0) throw new PriceGreaterThanZero()
  }
}
