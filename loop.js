// create an object that has properties 'username','password' & 'status'. Fill those values in with strings
var user = {
    username : 'labake',
    password : 'sandbox',
    status : 'single'
}
// create an array which contains the object you have made above and name the array 'database'
var database = [
    {
        username : 'labake',
        password : 'sandbox'
    },
    {
        username : 'lab',
        password : 'java'
    },
    {
        username : 'mother',
        password : 'good'
    }
]
// accept username, password & status from the prompt and add it to the database array
var users = prompt("Please enter the username");
var pass = prompt("Please enter the password");

//create a function called signIn that accepts two parameters
function signIn(username, password) {
    for (var i=0; i <database.length; i++) {
        if ((username === database[i].username) && (password === database[i].password)) {
            return true; 
        }
    }
    return false;
}

var check = signIn(users, pass);

if(check) {
  alert("valid username and password");
}
else {
  alert("Sorry, wrong username and password");
}
