export const ITEMS = [
  { name: "paper towels", price: 21.99 },
  { name: "sandwich", price: 8.75 },
  { name: "eggs", price: 6.75 },
  { name: "avocado oil", price: 10.0 },
];


export function addItem(name: string, price: number) {
  if (!name || name.trim() === "" || price < 0 || isNaN(price)) {
    return; // do nothing
  }
  const newItem = { name, price };
  ITEMS.push(newItem);
}

export function deleteItem(name: string) {
  const idx = ITEMS.findIndex(item => item.name === name);
  if (idx !== -1) {
    ITEMS.splice(idx, 1);
  }
  return ITEMS;
}

export function subtotal() {
  let sum = 0;
  for (const item of ITEMS) {
    sum += item.price;
  }
  return sum;
}

export function tax(taxRate: number) {
  const tax = subtotal() * taxRate;
  return tax;
}

export function total(taxRate: number) {
  return subtotal() + tax(taxRate);
}

export function printReceipt(taxRate: number) {
  console.log("************************");

  for (const item of ITEMS) {
    console.log(`${item.name}: $${item.price.toFixed(2)}`);
  }

  console.log("************************");
  console.log(`Subtotal: $${String(subtotal().toFixed(2))}`);
  console.log(`Tax: $${String(tax(taxRate).toFixed(2))}`);
  console.log(`Total: $${String(total(taxRate).toFixed(2))}`);
}