// TODO: Implement the promptForBook function
function promptForBook() {
    var _a, _b, _c;
    // TODO: Prompt user for book details (title, author, publication year)
    var bookTitle = (_a = prompt('Enter the book title: ')) !== null && _a !== void 0 ? _a : 'Title unknown';
    var bookAuthor = (_b = prompt('Enter the book author: ')) !== null && _b !== void 0 ? _b : 'Author unknown';
    var bookPublicationYear = +((_c = prompt('Enter the book publication year: ')) !== null && _c !== void 0 ? _c : 0);
    // TODO: Create an object of type 'Book' with the entered values
    var book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear,
    };
    return book;
}
// TODO: Call the promptForBook function to get the book details
var bookDetails = promptForBook();
// TODO: Display the details of the book object to the user
if (bookDetails != null) {
    console.log("Book Details:");
    console.log("Title: ".concat(bookDetails.title));
    console.log("Author: ".concat(bookDetails.author));
    console.log("Publication Year: ".concat(bookDetails.publicationYear));
}
