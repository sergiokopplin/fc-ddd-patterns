import { OrderItem } from './order-item';

const makeSut = (): { sut: OrderItem } => {
  const sut = new OrderItem()

  return {
    sut,
  }
}

describe('OrderItem Value Object', () => {
  test('Should create Entity without errors', () => {
    const { sut } = makeSut()

    expect(sut).toBeTruthy()
  });

  test('Should be all private on properties', () => {
    const { sut } = makeSut()

    expect(sut).toEqual({})
  });
});
