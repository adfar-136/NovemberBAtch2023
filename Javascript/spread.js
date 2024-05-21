//spread operator & rest operator
//rest operator is used to collect all the remaining arguments into an array
// ...vn ...vn
let str = "adfar"
var arr1 = [1,2,3,4]
var arr2 = [5,6,7,8]
var arr3 = [...str,5,6,7,8]
//spread operator is used to spread the elements of an array into a list of arguments
// var arr4 =[...arr1,...arr2]
// console.log(arr4)
// console.log(arr3)
// let arr = [2,3,4,5,6]
// function add(a,b,c,d,e){
//     return a+b+c+d+e;
// }
// let res = add(...arr)
// console.log(res)

function add(...other){
   let sum =0;
   for(let i =0;i<other.length;i++){
    sum +=other[i]
   }
   return sum
}
let res = add(2,31,32,3)
console.log(res)
