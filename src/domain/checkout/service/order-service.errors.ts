export class MinimumItemsOnOrderService extends Error {
  constructor() {
    super();
    this.message = "Order must have at least one item";
  }
}
