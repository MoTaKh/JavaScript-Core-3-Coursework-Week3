let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let totalPrice = 0;
console.log("QTY     ITEM          TOTAL");
order.forEach((el) => {
  const { itemName, quantity, unitPrice } = el;
  totalPrice += quantity * unitPrice;
  console.log(
    `${quantity}    ${itemName}${" ".repeat(18 - itemName.length)}  ${(
      quantity * unitPrice
    ).toFixed(2)}`
  );
});
console.log(`\nTotal Price: ${totalPrice}`);