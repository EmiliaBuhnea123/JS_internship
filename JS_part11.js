// 1
function parseUser(jsonString) {
    try {
        const json = JSON.parse(jsonString)
        if(json.name === undefined || typeof json.age != "number") {
            throw "Error occurred"
        } else {
            console.log(json);
        }
    } catch (error) {
         console.log("Error");
    } finally {
        console.log("Parsing attempt finished");
    }
}

parseUser('{"name":"John","age":30}');
parseUser('{"name":"John"}');
parseUser('invalid json');

//2
function getGitHubUser(username) {
    let url =  `https://api.github.com/users/${username}`
    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw "The user does not exist or API limit is exceeded"
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
    .catch(err => console.log(err))
}

getGitHubUser("emilia");

//3
let urlGit = 'https://raw.githubusercontent.com/EmiliaBuhnea123/JS_internship/refs/heads/main/users.json'
fetch(urlGit)
.then(response => response.json())
.then(data => {
    if(!Array.isArray(data.users)){
        throw "The users array does not exist"
    }
    console.log("The JSON contains an array")
})
.catch(error => {
    console.log("First error")
    throw error
})
.catch(error => {
     console.log(error)
});

//4
const fs = require("fs");
fs.readFile("people.json", (err, data) => {
    if(err) throw err;
    try {
        JSON.parse(data.toString())
    } catch (error) {
        console.log("error")
    }
})

//5
let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(response => response.json())
.then(data => {
    let users = [];
    for(let i=0; i < data.length; i++){
    if(data[i].address.city.startsWith("S")) {
        users.push({name: data[i].name, email: data[i].email});
    }
    }
    console.log(users)
});