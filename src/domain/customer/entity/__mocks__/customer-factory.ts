import { faker } from '@faker-js/faker'
import { Customer, CustomerParams } from '../customer'
import { makeAddressSut } from '../../value-object/__mocks__/address-factory'

export const makeCustomerSut = (
  params?: Partial<CustomerParams>
): { sut: Customer } => {
  const sutParams: CustomerParams = {
    id: faker.datatype.uuid(),
    active: false,
    name: faker.random.word(),
    rewardPoints: 0,
    address: makeAddressSut().sut
  }

  return {
    sut: new Customer(Object.assign(sutParams, params))
  }
}
