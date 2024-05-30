
let adfar = {
    firstName:"Adfar",
    lastName:"Khan",
    age: 20,
    getEmail:function (){
        return `${this.firstName}.${this.lastName}@gmail.com`;
    }
}
function getFullName(fName,LName){
 return fName+" "+ LName
}
let Kishan = {
    firstName:"Kishan",
    lastName:"Das",
    age: 20
}
// console.log(adfar.getEmail.call(Kishan))
// console.log(getFullName.call(Kishan,"Kishan","das"));
// console.log(getFullName.apply(Kishan,["Kishan","das"]));
let bindMethod = getFullName.bind(Kishan,"Add","asa")
console.log(bindMethod())
