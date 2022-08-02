import { faker } from '@faker-js/faker';
import { Order, OrderParams } from './order';

const makeSut = (params?: OrderParams): { sut: Order } => {
  const sut = new Order({
    id: params?.id || faker.datatype.uuid()
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
});
