import { Checkout } from "./Checkout";

// Example scenario 1
const co1 = new Checkout();
co1.scan("atv");
co1.scan("atv");
co1.scan("atv");
co1.scan("vga");

console.log(`Total expected: $${co1.total().toFixed(2)}`); // Total expected: $249.00

// Example scenario 2
const co2 = new Checkout();
co2.scan("atv");
co2.scan("ipd");
co2.scan("ipd");
co2.scan("atv");
co2.scan("ipd");
co2.scan("ipd");
co2.scan("ipd");

console.log(`Total expected: $${co2.total().toFixed(2)}`); // Total expected: $2718.95
