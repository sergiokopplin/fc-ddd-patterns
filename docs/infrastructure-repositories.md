# InfraStructure

<!-- infrastructure/customer/repository/sequelize -->

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
