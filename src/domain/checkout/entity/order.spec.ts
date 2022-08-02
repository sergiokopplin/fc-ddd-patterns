import { faker } from '@faker-js/faker';
import { Order, OrderParams } from './order';

const makeSut = (params?: Partial<OrderParams>): { sut: Order } => {
  const sut = new Order({
    id: params?.id || faker.datatype.uuid(),
    customerId: params?.customerId || faker.datatype.uuid()
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
});
