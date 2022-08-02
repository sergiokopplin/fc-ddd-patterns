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
- id string
- productId string
- name string
- price number
- quantity number
---
+ id string
+ name string
+ productId string
+ quantity number
+ price number
```
