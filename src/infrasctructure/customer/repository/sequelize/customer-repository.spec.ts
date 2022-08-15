import { makeAddressSut, makeCustomerSut } from 'domain/customer'
import { CustomerModel, CustomerRepository } from 'infrasctructure/customer'
import { Sequelize } from 'sequelize-typescript'

describe('Customer Repository', () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true }
    })

    sequelize.addModels([CustomerModel])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  test('Should create', async () => {
    const fakeId = 'c580a27d-8a17-465d-9030-4d83e41a622c'
    const sut = new CustomerRepository()
    const fakeAddress = makeAddressSut({
      city: 'fake_city',
      number: 1234,
      street: 'fake_street',
      zip: 'fake_zip'
    }).sut
    const fakeCustomer = makeCustomerSut({
      address: fakeAddress,
      active: false,
      id: fakeId,
      name: 'fake_name',
      rewardPoints: 100
    }).sut

    expect(await CustomerModel.findAll()).toEqual([])
    await sut.create(fakeCustomer)
    const resultFindOne = await CustomerModel.findOne({ where: { id: fakeId } })

    expect(resultFindOne.toJSON()).toEqual({
      active: false,
      city: fakeAddress.city,
      id: fakeId,
      name: fakeCustomer.name,
      number: fakeAddress.number,
      rewardPoints: fakeCustomer.rewardPoints,
      street: fakeAddress.street,
      zipcode: fakeAddress.zip
    })
  })
})
