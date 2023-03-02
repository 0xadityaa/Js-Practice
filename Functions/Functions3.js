const login = (username, password) => {
    if(username === "admin"){
        return true;
    } else if(username === "monkey" && password === "123"){
        return true;
    } else if(username === "moomoo" && password === "farm"){
        return true;
    } else {
        return false;
    }
}

const test = login('hello', 'meow'); // "test" should be false
const test2 = login('admin', 'lol'); // "test2" should be true
const test3 = login('monkey', '123'); // "test3" should be true
const test4 = login('moomoo', 'farm'); // "test4" should be true
const test5 = login('moomoo', 'moo'); // "test5" should be false

console.log(test);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);