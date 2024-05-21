// pattern to match any charcter that is a or b or c
//  let pattern1 = /[abc]/gi
//pattern to match any character that is not a or b or c
// let pattern1 = /[^abc]/gi
// pattern to match any digit between 0-9
// let pattern1 = /[0-9]/g
// let pattern1 = /[a-zA-Z0-9]/g
// let pattern1 = /[^a-zA-Z0-9]/g

//pattern to match alphanumeric +underscore
// let pattern1 = /\w/g;
// patter to match digits in consecutive order
// let pattern1 = /\d{3}/g
// let pattern1 = /\d{2}-\d{2}-\d{4}/g
// let pattern1 = /\d{2}\/\d{2}\/\d{4}/g

// pattern to matchh consecutive a three times
//  let pattern1 =/a{3}/g //
//pattern to match a letter between 2-5 range
//  let pattern1 =/a{2,5}/g //
// let pattern1 = /a+/g
let text = "i am aaaaaadfar adfarrasheed@gmail.com raashed aaand my dob is 09-08-1998. my parents dob is 24/03/1964";

let emailpattern = /[a-zA-Z0-9-_.]+@[a-zA-Z-_.]+.[a-zA-Z]{3}/
console.log(text.match(emailpattern))
