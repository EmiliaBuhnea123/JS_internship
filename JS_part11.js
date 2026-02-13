// 1
// Create a function parseUser(jsonString) that:
// Uses JSON.parse() inside try...catch
// Throws a custom Error if:
// JSON is invalid
// name is missing
// age is not a number
// Returns the parsed user object if everything is valid
// Uses finally to log "Parsing attempt finished"
function parseUser(jsonString) {
    try {
        const json = JSON.parse(jsonString)
        if(!json.name || typeof json.age != "number") {
            throw new Error(error.message)
        } else {
            return json;
        }
    } catch (error) {
         console.log("Error", error.message);
    } finally {
        console.log("Parsing attempt finished");
    }
}

parseUser('{"name":"John","age":30}');
parseUser('{"name":"John"}');
parseUser('invalid json');

// 2
// Write a function getGitHubUser(username) that:
// Fetches user data from GitHub API https://api.github.com/users/{username}
// Checks:
// - Network errors
// - HTTP errors (404, 403, etc.)
// Throws a custom error if:
// - User does not exist
// - API limit is exceeded
// Returns only:
//  {
//   login,
//   public_repos,
//   followers
// }
// Handles all errors in one .catch()
function getGitHubUser(username) {
    let url = `https://api.github.com/users/${username}`
    fetch(url)
    .then(response => {
        if (response.status === 404) {
            throw new Error("User not found")
        }
        if (response.status === 401) {
            throw new Error("Unauthorized request")
        }
        if (!response.ok) {
                throw new Error("Something went wrong");
        }
        const json = response.json()
        return json
    })
    .then(json => {
        return {
        login: json.login,
        public_repos: json.public_repos,
        followers: json.followers
    };
    })
    .then(user => console.log(user))
    .catch(error => console.log(error.message))
}

getGitHubUser("emilia");

// 3
// Create a promise chain that:
// - Fetches a JSON file from a URL
// - Parses it
// - Validates that it contains a users array
// If validation fails:
// - Handle the error
// - Rethrow it
// - Catch the rethrown error in a second .catch()
let urlGit = 'https://raw.githubusercontent.com/EmiliaBuhnea123/git/refs/heads/main/users.json'
fetch(urlGit)
.then(response => response.json())
.then(data => {
    if(!Array.isArray(data.users)){
        throw new Error("The JSON does not contain a user array")
    }
    console.log("The JSON contains an array")
})
.catch(error => {
    console.log("First error")
    throw error
})
.catch(error => {
     console.log(error.message)
});

//4
// Read user.json from disk.
// Parse it using JSON.parse.
// If parsing fails, show an error message instead of crashing.
const fs = require("fs");
fs.readFile("../users.json", (err, data) => {
    if(err) 
        console.log("error while reading the file");
    return
    try {
        JSON.parse(data.toString())
    } catch (error) {
        console.log("error")
    }
})

// 5
// Fetch users from
//  https://jsonplaceholder.typicode.com/users
// Keep only users from cities that start with the letter “S”
// Create a new array that contains only:
// - name
// - email
let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(response => response.json())
.then(data => {
    const users = data
    .filter(user => user.address.city.startsWith("S"))
    .map(user => ({
        name: user.name,
        email: user.email
    }))
    console.log(users)
    
})
.catch(error => console.log(error.message))

//6
// Fetch users from https://jsonplaceholder.typicode.com/users
// Keep only users with emails that ends with “.biz”
// And create a new array that contains only these users
async function fetchAndSaveUsers() {
const url = "https://jsonplaceholder.typicode.com/users";
const fs = require("fs").promises
    try {
        const response = await fetch(url)
        const users = await response.json()
        const filteredUsers = users.filter(user => user.email.endsWith(".biz"))
        await fs.writeFile("file.json", JSON.stringify(filteredUsers))
        console.log("users saved")
    } catch (error) {
        console.log(error.message)
    }
}
fetchAndSaveUsers()