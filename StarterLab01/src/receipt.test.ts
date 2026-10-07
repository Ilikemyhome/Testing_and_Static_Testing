// receipt.test.ts
import { beforeEach, expect, jest, test } from "@jest/globals";
import { ITEMS, addItem, deleteItem, subtotal, total, tax, printReceipt } from "./fixed_receipt";

// Reset ITEMS before each test so tests don't interfere with each other
beforeEach(() => {
    ITEMS.length = 0;
});

// addItem Tests


test("addItem adds a new item to the list", () => {
    addItem("Milk", 5.10);

    expect(
        ITEMS.some(item => item.name === "Milk" && item.price === 5.10)
    ).toBe(true);
});

test("addItem does not add invalid items", () => {
    addItem("", -10);

    expect(
        ITEMS.some(item => item.name === "" || item.price < 0)
    ).toBe(false);
});


// deleteItem Tests


test("deleteItem removes an item by name", () => {
    addItem("Chips", 3.00);
    deleteItem("Chips");

    expect(
        ITEMS.some(item => item.name === "Chips")
    ).toBe(false);
});

test("deleteItem does nothing if item does not exist", () => {
    addItem("Bread", 4.00);

    const before = [...ITEMS];
    deleteItem("NotInList");

    expect(ITEMS).toEqual(before);
});


// subtotal Tests


test("subtotal returns correct sum", () => {
    addItem("A", 1.00);
    addItem("B", 2.00);

    expect(subtotal()).toBe(3.00);
});

test("subtotal handles empty list", () => {
    expect(subtotal()).toBe(0);
});

// tax Tests

test("tax calculates correct tax amount", () => {
    addItem("Bread", 10);
    expect(tax(0.1)).toBe(1);
});

test("tax handles negative tax rate", () => {
    addItem("Bread", 10);
    expect(tax(-0.1)).toBe(-1);
});

// total Tests


test("total returns subtotal + tax", () => {
    addItem("Bread", 10);
    expect(total(0.1)).toBe(11);
});

test("total handles empty list", () => {
    expect(total(0.1)).toBe(0);
});


// printReceipt Tests


test("printReceipt prints items", () => {
    console.log = jest.fn();

    addItem("Bread", 10);
    printReceipt(0.1);

    expect(console.log).toHaveBeenCalledWith("************************");
    expect(console.log).toHaveBeenCalledWith("Bread: $10.00");
});

test("printReceipt handles empty list", () => {
    console.log = jest.fn();

    printReceipt(0.1);

    expect(console.log).toHaveBeenCalledWith("Subtotal: $0.00");
});
