import { User, Customer } from "./types";

import { faker } from "@faker-js/faker";

faker.seed(124);

function generatePhoneNumber() {
  // Generate a random string of 8 digits
  let digits = faker.string.numeric(8);

  // Prepend "98" to create a 10-digit number starting with 98
  return `98${digits}`;
}
export function createRandomCustomer() {
  return {
    customerId: faker.string.uuid(),
    name: faker.internet.displayName(),
    email: faker.internet.email().toLowerCase(),
    avatar: faker.image.avatar(),
    phone: generatePhoneNumber(),
    address: faker.location.city(),
  };
}

export const CUSTOMERS: Customer[] = faker.helpers
  .multiple(createRandomCustomer, {
    count: 10,
  })
  .map((data, index) => ({ ...data, id: index }));
