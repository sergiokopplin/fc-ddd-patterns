import { faker } from "@faker-js/faker";
import { Product, ProductParams } from "../product";

export const makeSut = (params?: Partial<ProductParams>): { sut: Product } => {
  const sutParams: ProductParams = {
    id: faker.datatype.uuid(),
    name: faker.random.word(),
    price: 0,
  };

  return {
    sut: new Product(Object.assign(sutParams, params)),
  };
};
