// TODO: Create a user object using the defined interface. Add all properties
var user1 = {
    username: 'Seppo',
    email: 'a@.fi',
    bio: 'Hei, olen Seppo',
};
// TODO: Create another user object using the defined interface. Don't add bio
var user2 = {
    username: 'Ismo',
    email: 'Ismo@.fi'
};
// Function to display user information
function displayUserInfo(user) {
    // TODO: console log all properties of a user separately. Example: console.log(user.email)
    console.log(user.username);
    console.log(user.email);
    if (user.bio) {
        console.log(user.bio);
    }
}
// Display user information
displayUserInfo(user1);
displayUserInfo(user2);
