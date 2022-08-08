# UML

## Order Service

```txt
---
static placeOrder (customer, items): Order ✅
business rules
- add reward points -> order.total / 2 ✅
validations
- Order must have at least one item ✅
---
static total (orders): number ✅
---
```

## Product Service

```txt
---
static increasePrice(products: Product[], percentage: number): Product[] ✅
business rules
- (product.price * percentage) / 100 + product.price ✅
---
```
