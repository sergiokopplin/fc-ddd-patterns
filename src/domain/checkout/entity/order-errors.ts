export class MissingOrderId extends Error {
  constructor () {
    super()
    this.message = 'Id is required'
  }
}

export class MissingOrderCustomerId extends Error {
  constructor () {
    super()
    this.message = 'CustomerId is required'
  }
}

export class MissingOrderItems extends Error {
  constructor () {
    super()
    this.message = 'Items are required'
  }
}

export class NotEnoughOrderItems extends Error {
  constructor () {
    super()
    this.message = 'Quantity must be greater than 0'
  }
}
