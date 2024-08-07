// Discount interface definition
export interface Discount {
  shouldApply: (quantity: number) => boolean;
  apply: (quantity: number, price: number) => number;
}
