import { faker } from '@faker-js/faker';
import { Order, OrderParams } from './order';
import { OrderItem } from '../value-object/order-item';

const makeSut = (params?: Partial<OrderParams>): { sut: Order } => {
  const sut = new Order({
    id: params?.id || faker.datatype.uuid(),
    customerId: params?.customerId || faker.datatype.uuid(),
    items: params?.items || [new OrderItem()],
  })

  return {
    sut,
  }
}

describe('Order Entity', () => {
  test('Should create Entity without errors', () => {
    const { sut } = makeSut()

    expect(sut).toBeTruthy()
  });

  test('Should get id', () => {
    const { sut } = makeSut({ id: 'custom_id' })

    expect(sut.id).toEqual('custom_id')
  });

  test('Should get customerId', () => {
    const { sut } = makeSut({ customerId: 'custom_customerId' })

    expect(sut.customerId).toEqual('custom_customerId')
  });

  test('Should get items', () => {
    const { sut } = makeSut({ items: [new OrderItem(), new OrderItem(), new OrderItem()] })

    expect(sut.items.length).toEqual(3)
  });
});
