import { makeOrderItemSut } from './__mocks__/order-item-factory'

describe('OrderItem Value Object', () => {
  test('Should create Entity without errors', () => {
    const { sut } = makeOrderItemSut()

    expect(sut).toBeTruthy()
  })

  test('Should get id', () => {
    const { sut } = makeOrderItemSut({ id: 'custom_id' })

    expect(sut.id).toEqual('custom_id')
  })

  test('Should get name', () => {
    const { sut } = makeOrderItemSut({ name: 'custom_name' })

    expect(sut.name).toEqual('custom_name')
  })

  test('Should get productId', () => {
    const { sut } = makeOrderItemSut({ productId: 'custom_productId' })

    expect(sut.productId).toEqual('custom_productId')
  })

  test('Should get quantity', () => {
    const { sut } = makeOrderItemSut({ quantity: 3 })

    expect(sut.quantity).toEqual(3)
  })

  test('Should get price', () => {
    const { sut } = makeOrderItemSut({ price: 5, quantity: 10 })

    expect(sut.price).toEqual(50)
  })
})
