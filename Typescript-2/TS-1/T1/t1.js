var _a, _b;
// Create an empty array named 'cart' to store the items
var cart = [];
// Implement a loop to prompt the user for item details
while (true) {
    // Prompt user for item name, price, and quantity
    var itemName = prompt("Enter item name (or leave empty to finish):");
    // Break the loop if an empty item name is entered
    if (itemName === "") {
        break;
    }
    var itemPrice = +((_a = prompt("Enter item price: ")) !== null && _a !== void 0 ? _a : 0);
    var itemQuantity = +((_b = prompt("Enter item quantity: ")) !== null && _b !== void 0 ? _b : 0);
    // Create an item object and add it to the 'cart' array
    var newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
}
// Calculate the total cost using the 'map' and 'reduce' functions
var totalCost = cart.map(function (item) { return item.price * item.quantity; }).reduce(function (sum, cost) { return sum + cost; }, 0);
// Display the total cost to the user
console.log("Total cost of the shopping cart: $".concat(totalCost.toFixed(2)));
