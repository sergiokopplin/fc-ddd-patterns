import { makeAddressSut } from '../value-object/__mocks__/address-factory'
import { makeCustomerSut } from './__mocks__/customer-factory'
import {
  AddressMandatoryToActivate,
  MissingCustomerId,
  MissingCustomerName
} from './customer.errors'

describe('Customer Entity', () => {
  test('Should create Entity without errors', () => {
    const { sut } = makeCustomerSut()

    expect(sut).toBeTruthy()
  })

  test('Should get id', () => {
    const { sut } = makeCustomerSut({ id: 'custom_id' })

    expect(sut.id).toEqual('custom_id')
  })

  test('Should get name', () => {
    const { sut } = makeCustomerSut({ name: 'custom_name' })

    expect(sut.name).toEqual('custom_name')
  })

  test('Should get rewardPoints', () => {
    const { sut } = makeCustomerSut({ rewardPoints: 1234 })

    expect(sut.rewardPoints).toEqual(1234)
  })

  test('Should get Address', () => {
    const customAddress = makeAddressSut().sut
    const { sut } = makeCustomerSut({ address: customAddress })

    expect(sut.address).toEqual(customAddress)
  })

  test('Should set Address', () => {
    const customAddress = makeAddressSut({
      street: 'custom_street',
      city: 'custom_city',
      number: 1234,
      zip: 'custom_zip'
    }).sut

    const secondCustomAddress = makeAddressSut({
      street: 'second_custom_street',
      city: 'second_custom_city',
      number: 12340000,
      zip: 'second_custom_zip'
    }).sut

    const { sut } = makeCustomerSut({ address: customAddress })

    expect(sut.address.city).toEqual('custom_city')
    expect(sut.address.number).toEqual(1234)
    expect(sut.address.street).toEqual('custom_street')
    expect(sut.address.zip).toEqual('custom_zip')

    sut.address = secondCustomAddress

    expect(sut.address.city).toEqual('second_custom_city')
    expect(sut.address.number).toEqual(12340000)
    expect(sut.address.street).toEqual('second_custom_street')
    expect(sut.address.zip).toEqual('second_custom_zip')
  })

  test('Should changeAddress', () => {
    const customAddress = makeAddressSut({
      street: 'custom_street',
      city: 'custom_city',
      number: 1234,
      zip: 'custom_zip'
    }).sut

    const secondCustomAddress = makeAddressSut({
      street: 'second_custom_street',
      city: 'second_custom_city',
      number: 12340000,
      zip: 'second_custom_zip'
    }).sut

    const { sut } = makeCustomerSut({ address: customAddress })

    expect(sut.address.city).toEqual('custom_city')
    expect(sut.address.number).toEqual(1234)
    expect(sut.address.street).toEqual('custom_street')
    expect(sut.address.zip).toEqual('custom_zip')

    sut.changeAddress(secondCustomAddress)

    expect(sut.address.city).toEqual('second_custom_city')
    expect(sut.address.number).toEqual(12340000)
    expect(sut.address.street).toEqual('second_custom_street')
    expect(sut.address.zip).toEqual('second_custom_zip')
  })

  test('Should return isActive', () => {
    const { sut } = makeCustomerSut()

    expect(sut.isActive()).toEqual(false)
  })

  test('Should activate', () => {
    const { sut } = makeCustomerSut()

    expect(sut.isActive()).toEqual(false)

    sut.activate()

    expect(sut.isActive()).toEqual(true)
  })

  test('Should deactivate', () => {
    const { sut } = makeCustomerSut({ active: true })

    expect(sut.isActive()).toEqual(true)

    sut.deactivate()

    expect(sut.isActive()).toEqual(false)
  })

  test('Should addRewardPoints', () => {
    const { sut } = makeCustomerSut({ rewardPoints: 0 })

    sut.addRewardPoints(2)
    sut.addRewardPoints(3)
    sut.addRewardPoints(5)

    expect(sut.rewardPoints).toBe(10)
  })

  test('Should changeName', () => {
    const { sut } = makeCustomerSut({ name: 'custom_name' })

    expect(sut.name).toBe('custom_name')

    sut.changeName('second_custom_name')

    expect(sut.name).toBe('second_custom_name')
  })

  test('Should throw when id missing', () => {
    expect(() => makeCustomerSut({ id: null })).toThrowError(
      new MissingCustomerId()
    )
  })

  test('Should throw when name missing', () => {
    expect(() => makeCustomerSut({ name: null })).toThrowError(
      new MissingCustomerName()
    )
  })

  test('Should throw when activate without address', () => {
    const { sut } = makeCustomerSut({ address: null })

    expect(() => sut.activate()).toThrowError(new AddressMandatoryToActivate())
  })
})
