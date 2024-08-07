import { Discount } from "./Discount";

// Product class definition
export class Product {
  private sku: string;
  private name: string;
  private price: number;
  private discounts: Discount[] = [];

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  // Method to add a discount to the product
  addDiscount(discount: Discount): void {
    this.discounts.push(discount);
  }

  // Getter for the product SKU
  getSku(): string {
    return this.sku;
  }

  // Getter for the product name
  getName(): string {
    return this.name;
  }

  // Getter for the product price
  getPrice(): number {
    return this.price;
  }

  // Method to calculate the total price based on quantity and applicable discounts
  calculatePrice(quantity: number): number {
    let totalPrice = quantity * this.price;
    for (const discount of this.discounts) {
      if (discount.shouldApply(quantity)) {
        totalPrice = discount.apply(quantity, this.price);
      }
    }
    return totalPrice;
  }
}
