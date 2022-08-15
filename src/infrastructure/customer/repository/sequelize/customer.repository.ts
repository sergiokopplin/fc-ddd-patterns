import { Customer } from '../../../../domain/customer/entity/customer'
import { CustomerRepositoryInterface } from '../../../../domain/customer/repository/customer-repository.interface'
import CustomerModel from './customer.model'

export default class CustomerRepository implements CustomerRepositoryInterface {
  update: (entity: Customer) => Promise<void>
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
}
