import { Address as AddressValueObject } from "../value-object/address";
import {
  AddressMandatoryToActivate,
  MissingCustomerId,
  MissingCustomerName,
} from "./customer.errors";

type Id = string;
type Name = string;
type Address = AddressValueObject;
type Active = boolean;
type RewardPoints = number;

export interface CustomerParams {
  id: Id;
  name: Name;
  address?: Address;
  active: Active;
  rewardPoints: RewardPoints;
}

export class Customer {
  private _id: Id;
  private _name: Name = "";
  private _address?: Address;
  private _active: Active = false;
  private _rewardPoints: RewardPoints = 0;

  constructor({ id, name, address, active, rewardPoints }: CustomerParams) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._active = active;
    this._rewardPoints = rewardPoints;
    this.validate();
  }

  get id(): Id {
    return this._id;
  }

  get name(): Name {
    return this._name;
  }

  get address(): Address {
    return this._address;
  }

  get rewardPoints(): RewardPoints {
    return this._rewardPoints;
  }

  set address(address: Address) {
    this._address = address;
  }

  changeAddress(address: Address) {
    this._address = address;
  }

  changeName(name: Name) {
    this._name = name;
    this.validate();
  }

  activate(): void {
    if (this._address === null) {
      throw new AddressMandatoryToActivate();
    }

    this._active = true;
  }

  deactivate(): void {
    this._active = false;
  }

  isActive(): boolean {
    return this._active;
  }

  addRewardPoints(rewardPoints: RewardPoints): void {
    this._rewardPoints += rewardPoints;
  }

  validate(): void {
    if (!this._id) throw new MissingCustomerId();
    if (!this._name) throw new MissingCustomerName();
  }
}
