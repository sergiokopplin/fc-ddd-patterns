type Street = string;
type Number = number;
type Zip = string;
type City = string;

export interface AddressParams {
  street: Street;
  number: number;
  zip: Zip;
  city: City;
}

export class Address {
  private _street: Street = "";
  private _number: number = 0;
  private _zip: Zip = "";
  private _city: City = "";

  constructor({ street, number, zip, city }: AddressParams) {
    this._street = street;
    this._number = number;
    this._zip = zip;
    this._city = city;
  }

  get street(): Street {
    return this._street;
  }
}
