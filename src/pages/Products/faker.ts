import { faker } from "@faker-js/faker/locale/ru";
import { ProductData } from "src/store";

export const createProducts = (): ProductData => {
  return {
    id: faker.datatype.uuid(),
    market: faker.company.name(),
    name: faker.commerce.product(),
    img: faker.image.fashion(300, 200, true),
    description: faker.commerce.productDescription(),
  };
};
