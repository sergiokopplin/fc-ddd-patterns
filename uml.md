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

## Address Value Object Class

```txt
- street  string  = ""
- number  number  = 0
- zip     string  = ""
- city    string  = ""
---
+ get street  string
+ get number  number
+ get zip     string
+ get city    string
+ validate    boolean
+ toString    string
---
> Auto Validate
```

## Product

```txt
- private   id      string
- private   name    string
- private   price   number
---
+ get id        string
+ get name      string
+ get price     number
+ changeName    void
+ changePrice   void
+ validate      boolean
---
> Auto Validate
```
