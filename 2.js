function is_username_valid(username) {
    return /^[a-z]{5,9}$/.test(username);
}

function is_password_valid(password) {
    return /^[a-zA-Z0-9!@#$%^&*]{10}$/.test(password);
}

console.log(is_username_valid('@wakwaw'))
console.log(is_username_valid('poEtri'))
console.log(is_username_valid('tiara'))
console.log(is_password_valid('p@ssW0rd99'))
console.log(is_password_valid('C0d3YourFuture!#'))