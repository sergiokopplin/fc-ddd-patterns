import { Customer, CustomerRepositoryInterface } from 'domain/customer'

import { CustomerModel } from './customer-model'

export class CustomerRepository implements CustomerRepositoryInterface {
  find: (id: string) => Promise<Customer>
  findAll: () => Promise<Customer[]>

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

  async update (entity: Customer): Promise<void> {
    await CustomerModel.update({
      id: entity.id,
      name: entity.name,
      street: entity.address.street,
      number: entity.address.number,
      zipcode: entity.address.zip,
      city: entity.address.city,
      active: entity.isActive(),
      rewardPoints: entity.rewardPoints
    }, {
      where: {
        id: entity.id
      }
    })
  }
}
