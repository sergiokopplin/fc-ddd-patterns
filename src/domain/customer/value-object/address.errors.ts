export class MissingCustomerStreet extends Error {
  constructor() {
    super();
    this.message = "Street is required";
  }
}

export class MissingCustomerNumber extends Error {
  constructor() {
    super();
    this.message = "Number is required";
  }
}

export class MissingCustomerZip extends Error {
  constructor() {
    super();
    this.message = "Zip is required";
  }
}

export class MissingCustomerCity extends Error {
  constructor() {
    super();
    this.message = "City is required";
  }
}
