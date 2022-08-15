export class MissingProductId extends Error {
  constructor () {
    super()
    this.message = 'Id is required'
  }
}

export class MissingProductName extends Error {
  constructor () {
    super()
    this.message = 'Name is required'
  }
}

export class PriceGreaterThanZero extends Error {
  constructor () {
    super()
    this.message = 'Price must be greater than zero'
  }
}
