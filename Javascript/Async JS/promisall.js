function combine(){
    var promise1 = new Promise((resolve,reject)=>{
         setTimeout(()=>{
           resolve("promise 1 resolved")
         },3000)
    })
    var promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise 2 is resolved")
        })
    })
    var combinePromise = Promise.all([promise1,promise2])
    return combinePromise
}
combine().then((result)=>{
     console.log(result)
})