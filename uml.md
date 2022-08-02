# UML

## Order Class

```txt
- id string
- customerId string
- items OrderItem[]
- total number
---
+ get id string
+ get customerId string
+ get items OrderItem[]
+ validate boolean
+ total number
---
> Auto Validate
```

## Order Item Value Object Class

```txt
- id        string
- productId string
- name      string
- price     number
- quantity  number
---
+ get id        string
+ get name      string
+ get productId string
+ get quantity  number
+ get price     number
```

## Customer

```txt
- id            string
- name          string    = ""
- !address      Address
- active        boolean   = false
- rewardPoints  number    = 0
---
+ get id            string
+ get name          string
+ get rewardPoints  number
+ validate          boolean
+ changeName        void
+ get Address       Address
+ changeAddress     void
+ isActive          boolean
+ activate          void
+ deactivate        void
+ addRewardPoints   void
+ set Address       void
---
> Auto Validate
```
