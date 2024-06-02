var promise = new Promise((resolve,reject)=>{
    resolve("Adfar Rashid")
 })
 promise.then(
    new Promise((resolve,reject)=>{
        resolve("Vishal ")
    }).then((result)=>{
        console.log(result)
    })
 ).then((response)=>{
  console.log(response)
 })