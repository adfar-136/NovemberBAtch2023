let obj = {
    fName:"Adfar",
    lName:"Rashid",
    age:35,
    salary:4000
}
let jsonobj = JSON.stringify(obj)
let objj = JSON.parse(jsonobj)
console.log(objj)