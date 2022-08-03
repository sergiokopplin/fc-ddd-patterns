import { Address as AddressValueObject } from "../value-object/address";

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
  }
}