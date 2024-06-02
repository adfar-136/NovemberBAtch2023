console.log("1")
var promise = new Promise((resolve,reject)=>{
    console.log("adfar")
   reject("Data")
})
promise.then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})
console.log("2")