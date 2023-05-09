import { faker } from "@faker-js/faker/locale/ru";

export type MarketsData = {
  id: string;
  shortName: string;
  address: string;
  img: string;
  category: string;
};

export const createMarkets = (): MarketsData => {
  return {
    id: faker.datatype.uuid(),
    shortName: faker.company.name(),
    address: faker.address.street(),
    img: faker.image.business(300, 200, true),
    category: faker.company.catchPhrase(),
  };
};
