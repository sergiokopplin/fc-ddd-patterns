import { makeOrderItemSut } from '../value-object/__mocks__/order-item-factory'
import { makeOrderSut } from './__mocks__/order-factory'
import {
  MissingOrderCustomerId,
  MissingOrderId,
  MissingOrderItems,
  NotEnoughOrderItems
} from './order-errors'

describe('Order Entity', () => {
  test('Should create Entity without errors', () => {
    const { sut } = makeOrderSut()

    expect(sut).toBeTruthy()
  })

  test('Should get id', () => {
    const { sut } = makeOrderSut({ id: 'custom_id' })

    expect(sut.id).toEqual('custom_id')
  })

  test('Should get customerId', () => {
    const { sut } = makeOrderSut({ customerId: 'custom_customerId' })

    expect(sut.customerId).toEqual('custom_customerId')
  })

  test('Should get items', () => {
    const { sut } = makeOrderSut({
      items: [
        makeOrderItemSut().sut,
        makeOrderItemSut().sut,
        makeOrderItemSut().sut
      ]
    })

    expect(sut.items.length).toEqual(3)
  })

  test('Should return total', () => {
    const { sut } = makeOrderSut({
      items: [
        makeOrderItemSut({
          price: 5,
          quantity: 10
        }).sut,
        makeOrderItemSut({
          price: 10,
          quantity: 5
        }).sut,
        makeOrderItemSut({
          price: 50,
          quantity: 1
        }).sut
      ]
    })

    expect(sut.total()).toEqual(150)
  })

  test('Should throw when id missing', () => {
    expect(() => makeOrderSut({ id: null })).toThrowError(new MissingOrderId())
  })

  test('Should throw when customerId missing', () => {
    expect(() => makeOrderSut({ customerId: null })).toThrowError(
      new MissingOrderCustomerId()
    )
  })

  test('Should throw when items missing', () => {
    expect(() => makeOrderSut({ items: null })).toThrowError(
      new MissingOrderItems()
    )
  })

  test('Should throw when items are zero', () => {
    expect(() => makeOrderSut({ items: [] })).toThrowError(
      new NotEnoughOrderItems()
    )
  })
})
