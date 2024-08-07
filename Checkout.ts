import { catalogue } from "./Catalogue";

// Class to manage the checkout process
export class Checkout {
  private quantities: Record<string, number> = {};

  // Method to scan a product and increase its quantity
  scan(sku: string) {
    const product = catalogue.find((item) => item.getSku() === sku);
    if (product) {
      this.quantities[sku] = (this.quantities[sku] || 0) + 1;
    }
  }

  // Method to calculate the total price of all scanned products
  total(): number {
    let totalPrice = 0;
    for (const sku in this.quantities) {
      const product = catalogue.find((item) => item.getSku() === sku);
      if (product) {
        totalPrice += product.calculatePrice(this.quantities[sku]);
      }
    }
    return totalPrice;
  }
}
