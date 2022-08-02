import { OrderItem } from '../value-object/order-item';

export class Order {
  private id: string;
  private customerId: string;
  private items: OrderItem[];
  private total: number;
}