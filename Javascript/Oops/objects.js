let person = {
    firstName : "Adfar",
    lastName : "Ahmed",
    age:35,
}
Object.defineProperty(person,"firstName",{
    value:"Aditya",
    configurable:true,
    writable:false,
    enumerable:false
})
// let enumm = person.propertyIsEnumerable("firstName")
// console.log(person.firstName)
for(let i in person){
    console.log(i)
}



// let keys = Object.keys(person);
// let values =Object.values(person);
// console.log(keys);
// console.log(values);

//descriptors

// let d1 = Object.getOwnPropertyDescriptor(person,"firstName")
// let d2 = Object.getOwnPropertyDescriptor(person,"age")
// console.log(d1)
// console.log(d2)