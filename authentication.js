"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    username: "admin",
    password: "password123",
};
function authenticate(username, password) {
    return new Promise(function (resolve, reject) {
        if (username === user.username && password === user.password) {
            resolve("Authentication successful!");
        }
        else {
            reject("Invalid credentials.");
        }
    });
}
authenticate("admin", "password123")
    .then(function (message) { return console.log(message); })
    .catch(function (error) { return console.error(error); });
