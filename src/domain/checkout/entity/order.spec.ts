import { Order } from './order';

const makeSut = (): { sut: Order } => {
  const sut = new Order()

  return {
    sut,
  }
}

describe('Order Entity', () => {
  test('Should create Entity without errors', () => {
    const { sut } = makeSut()

    expect(sut).toBeTruthy()
  });
});
