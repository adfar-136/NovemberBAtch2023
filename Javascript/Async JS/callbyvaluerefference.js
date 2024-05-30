// let a =10;
// let b =a;
// a=111;
// console.log(b);

// let arr = [1,2,3,4,5]
// //let arr1 = arr;
// let arr1 = [...arr];
// arr1[1]="Adfar";
// console.log(arr);
// console.log(arr1);


let obj1 ={
    fName:"Adfar",
    lNAme:"Rashid",
    age:34,
}
let obj2 = {...obj1};
obj2.fName="Aditya"
console.log(obj1)
console.log(obj2)