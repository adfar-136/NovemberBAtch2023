// 

var sum = function (x){
    return x+x;
}

var sum = x=>x+x
console.log(sum(4))

var greet = function (x,y){
    console.log(x)
    console.log(y)
    return x+y
}
var greet = (x,y)=>{
    console.log(x)
    console.log(y)
    return x+y
}

function adfar(x,y){
   x()
   console.log(y)
}
// adfar(function newton(){
//     console.log("Callback hekki function")
// },5)
adfar(()=>{
    console.log("hello")
},6)

function hello(){
    return function bello(){
        
    }
}
