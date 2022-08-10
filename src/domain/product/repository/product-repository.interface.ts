import { RepositoryInterface } from "../../shared/repository/repository-interface";
import { Product } from "../entity/product";

export interface CustomerRepositoryInterface
  extends RepositoryInterface<Product> {}
