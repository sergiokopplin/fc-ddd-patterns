export class MissingCustomerId extends Error {
  constructor () {
    super()
    this.message = 'Id is required'
  }
}

export class MissingCustomerName extends Error {
  constructor () {
    super()
    this.message = 'Name is required'
  }
}

export class AddressMandatoryToActivate extends Error {
  constructor () {
    super()
    this.message = 'Address is mandatory to activate a customer'
  }
}
