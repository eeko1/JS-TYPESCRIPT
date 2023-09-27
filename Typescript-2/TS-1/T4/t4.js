// Implement instances of the 'Product' type
function createElectronicDevice() {
    var _a, _b;
    // TODO: Prompt user for electronic device details (brand and model)
    var brand = (_a = prompt('Enter the brand: ')) !== null && _a !== void 0 ? _a : 'Brand unknown';
    var model = (_b = prompt('Enter the model: ')) !== null && _b !== void 0 ? _b : 'Model unknown';
    // TODO: return object containing brand and model
    return { brand: brand, model: model, type: 'electronic' };
}
function createBook() {
    var _a, _b;
    // TODO: Prompt user for book details (title and author)
    var title = (_a = prompt('Enter the title: ')) !== null && _a !== void 0 ? _a : 'Title unknown';
    var author = (_b = prompt('Enter the author: ')) !== null && _b !== void 0 ? _b : 'Author unknown';
    // TODO: return object containing title and author
    return { title: title, author: author, type: 'book' };
}
// Create instances of 'Product'
var electronicProduct = createElectronicDevice();
var bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log("Product Type: ".concat(product.type));
    if (product.type === 'electronic') {
        console.log("Brand: ".concat(product.brand));
        console.log("Model: ".concat(product.model));
    }
    else {
        console.log("Title: ".concat(product.title));
        console.log("Author: ".concat(product.author));
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
