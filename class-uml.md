# UML

## Order Class

```txt
- id string ✅
- customerId string ✅
- items OrderItem[] ✅
- total number ✅
---
+ get id string ✅
+ get customerId string ✅
+ get items OrderItem[] ✅
+ validate boolean ✅
+ total number ✅
---
> Auto Validate ✅
--- Validation
- "Id is required" ✅
- "CustomerId is required" ✅
- "Items are required" ✅
- "Quantity must be greater than 0" ✅
```

## Order Item Value Object Class

```txt
- id        string ✅
- productId string ✅
- name      string ✅
- price     number (price * quantity) ✅
- quantity  number ✅
---
+ get id        string ✅
+ get name      string ✅
+ get productId string ✅
+ get quantity  number ✅
+ get price     number ✅
```

## Customer

```txt
- id            string ❌
- name          string    = "" ❌
- !address      Address ❌
- active        boolean   = false ❌
- rewardPoints  number    = 0 ❌
---
+ get id            string ❌
+ get name          string ❌
+ get rewardPoints  number ❌
+ validate          boolean ❌
+ changeName        void      -> validate ❌
+ get Address       Address ❌
+ changeAddress     void ❌
+ isActive          boolean ❌
+ activate          void ❌
+ deactivate        void ❌
+ addRewardPoints   void (rewardPoints += points) ❌
+ set Address       void ❌
---
> Auto Validate ❌
--- Validation
- "Id is required" ❌
- "Name is required" ❌
- activate "Address is mandatory to activate a customer" ❌
```

## Address Value Object Class

```txt
- street  string  = "" ✅
- number  number  = 0 ✅
- zip     string  = "" ✅
- city    string  = "" ✅
---
+ get street  string ✅
+ get number  number ❌
+ get zip     string ❌
+ get city    string ❌
+ validate    boolean ❌
+ toString    string (street, number, zip city) ❌
---
> Auto Validate ❌
--- Validation
- "Street is required" ❌
- "Number is required" ❌
- "Zip is required" ❌
- "City is required" ❌
```

## Product

```txt
- private   id      string ❌
- private   name    string ❌
- private   price   number ❌
---
+ get id        string ❌
+ get name      string ❌
+ get price     number ❌
+ changeName    void      -> validate ❌
+ changePrice   void      -> validate ❌
+ validate      boolean ❌
---
> Auto Validate ❌
--- Validation
- "Id is required" ❌
- "Name is required" ❌
- "Price must be greater than zero" ❌
```
