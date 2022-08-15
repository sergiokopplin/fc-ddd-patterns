import { makeProductSut } from "../entity/__mocks__/product-factory";
import { ProductService } from "./product-service";

describe("ProductService", () => {
  it("Should increasePrice", () => {
    const products = [
      makeProductSut({
        price: 100,
      }).sut,
      makeProductSut({
        price: 200,
      }).sut,
    ];

    ProductService.increasePrice(products, 100);

    expect(products[0].price).toBe(200);
    expect(products[1].price).toBe(400);
  });
});
