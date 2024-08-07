import { Product } from "./Product";
import { Discount } from "./Discount";

// Define discounts
const appleTVDiscount: Discount = {
  shouldApply: (quantity: number) => quantity >= 3,
  apply: (quantity: number, price: number) =>
    (quantity - Math.floor(quantity / 3)) * price,
};

const superiPadBulkDiscount: Discount = {
  shouldApply: (quantity: number) => quantity > 4,
  apply: (quantity: number, price: number) => quantity * 499.99,
};

// Product catalogue definition
export const catalogue: Product[] = [
  new Product("ipd", "Super iPad", 549.99),
  new Product("mbp", "MacBook Pro", 1399.99),
  new Product("atv", "Apple TV", 109.5),
  new Product("vga", "VGA adapter", 30.0),
];

// Assign discounts to products
catalogue
  .find((product) => product.getSku() === "atv")
  ?.addDiscount(appleTVDiscount);
catalogue
  .find((product) => product.getSku() === "ipd")
  ?.addDiscount(superiPadBulkDiscount);
