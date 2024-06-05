// var data =await fetch("https://official-joke-api.appspot.com/random_joke")
// console.log(data)
// data.then((result)=>{
//    return result.json()
// }).then((res)=>{
//  console.log(res)
// })
async function jokee(){
   var data =await fetch("https://official-joke-api.appspot.com/random_joke");
   var datamain =await data.json()
   console.log(datamain)
}
jokee()