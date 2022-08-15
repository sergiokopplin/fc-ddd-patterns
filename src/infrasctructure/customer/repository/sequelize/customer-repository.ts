import { Customer, CustomerRepositoryInterface } from 'domain/customer'

import { CustomerModel } from './customer-model'

export class CustomerRepository implements CustomerRepositoryInterface {
  async create (entity: Customer): Promise<void> {
    await CustomerModel.create({
      id: entity.id,
      name: entity.name,
      street: entity.address.street,
      number: entity.address.number,
      zipcode: entity.address.zip,
      city: entity.address.city,
      active: entity.isActive(),
      rewardPoints: entity.rewardPoints
    })
  }

  update: (entity: Customer) => Promise<void>
  find: (id: string) => Promise<Customer>
  findAll: () => Promise<Customer[]>
}
