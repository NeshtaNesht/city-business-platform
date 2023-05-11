import { faker } from "@faker-js/faker/locale/ru";
import { MarketsData } from "src/store";

export const createMarkets = (): MarketsData => {
  return {
    id: faker.datatype.uuid(),
    shortName: faker.company.name(),
    address: faker.address.street(),
    img: faker.image.business(300, 200, true),
    category: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
  };
};
