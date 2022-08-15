import {
  MissingCustomerCity,
  MissingCustomerNumber,
  MissingCustomerStreet,
  MissingCustomerZip
} from './address.errors'

type Street = string
type AddressNumber = number
type Zip = string
type City = string

export interface AddressParams {
  street: Street
  number: AddressNumber
  zip: Zip
  city: City
}

export class Address {
  private readonly _street: Street = ''
  private readonly _number: AddressNumber = null
  private readonly _zip: Zip = ''
  private readonly _city: City = ''

  constructor ({ street, number, zip, city }: AddressParams) {
    this._street = street
    this._number = number
    this._zip = zip
    this._city = city
    this.validate()
  }

  get street (): Street {
    return this._street
  }

  get number (): AddressNumber {
    return this._number
  }

  get zip (): Zip {
    return this._zip
  }

  get city (): City {
    return this._city
  }

  validate (): void {
    if (!this._street) throw new MissingCustomerStreet()
    if (!this._number) throw new MissingCustomerNumber()
    if (!this._zip) throw new MissingCustomerZip()
    if (!this._city) throw new MissingCustomerCity()
  }

  toString (): string {
    return `${this._street}, ${this._number}, ${this._zip} ${this._city}`
  }
}
