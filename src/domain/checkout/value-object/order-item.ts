type Id = string;
type ProductId = string;
type Name = string;
type Price = number;
type Quantity = number;

export interface OrderItemParams {
  id: Id,
  productId: ProductId,
  name: Name,
  price: Price,
  quantity: Quantity,
}

export class OrderItem {
  private id: Id;
  private productId: ProductId;
  private name: Name;
  private price: Price;
  private quantity: Quantity;
}