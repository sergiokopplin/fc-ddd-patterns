# InfraStructure

<!-- infrastructure/customer/repository/sequelize -->

## Sequelize Setup

```txt
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
```

## Customer Model

```txt
{
  id: string, primaryKey, column
  name: string, notNull
  street: string, notNull
  number: number, notNull
  zipcode: string, notNull
  city: string, notNull
  active: boolean, notNull
  rewardPoints: number, notNull
}
```

## Customer Repository

```txt
implements CustomerRepositoryInterface
```
