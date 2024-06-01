let a= 20;
var promise = new Promise((resolve,reject)=>{
   if(a<10){
    resolve("adfar")
   } else{
    reject("error")
   }
}) 
// promise.then(function(response){
//     console.log(response)
// },function(error){
//     console.log(error)
// })

promise.then((res)=>{
  console.log(res)
}).catch((err)=>{
   console.log(err)
})