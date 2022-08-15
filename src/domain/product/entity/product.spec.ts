import { makeProductSut } from './__mocks__/product-factory'
import {
  MissingProductId,
  MissingProductName,
  PriceGreaterThanZero
} from './product.errors'

describe('Product Entity', () => {
  test('Should create Entity without errors', () => {
    const { sut } = makeProductSut()

    expect(sut).toBeTruthy()
  })

  test('Should get id', () => {
    const { sut } = makeProductSut({ id: 'custom_id' })

    expect(sut.id).toBe('custom_id')
  })

  test('Should get name', () => {
    const { sut } = makeProductSut({ name: 'custom_name' })

    expect(sut.name).toBe('custom_name')
  })

  test('Should get price', () => {
    const { sut } = makeProductSut({ price: 10 })

    expect(sut.price).toBe(10)
  })

  test('Should changeName', () => {
    const { sut } = makeProductSut({ name: 'custom_name' })

    expect(sut.name).toBe('custom_name')

    sut.changeName('second_custom_name')

    expect(sut.name).toBe('second_custom_name')
  })

  test('Should changePrice', () => {
    const { sut } = makeProductSut({ price: 1234 })

    expect(sut.price).toBe(1234)

    sut.changePrice(123456)

    expect(sut.price).toBe(123456)
  })

  test('Should throw when id missing', () => {
    expect(() => makeProductSut({ id: null })).toThrowError(
      new MissingProductId()
    )
  })

  test('Should throw when name missing', () => {
    expect(() => makeProductSut({ name: null })).toThrowError(
      new MissingProductName()
    )
  })

  test('Should throw when price less than zero', () => {
    expect(() => makeProductSut({ price: -1 })).toThrowError(
      new PriceGreaterThanZero()
    )
  })
})
