// const user1 = {
//     firstName :"Adfar",
// //     lastName:"Rashid",
// //     age:26,
// //     getAgeYear:function(){
// //         return new Date().getFullYear() -user1.age
// //     }
// // }
// // const user2 = {
// //     firstName :"Mithun",
// //     lastName:"Kumar",
// //     age:28,
// //     getAgeYear:function(){
// //         return new Date().getFullYear() -user2.age
// //     }
// // }
// Factory Function
// function createUser(firstName,lastName,age){
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getAgeYear:function(){
//             return new Date().getFullYear() -user.age
//         }
//     }
//     return user
// }
// const user1 = createUser("Adfar","Rashid",27)
// const user2 = createUser("Mithun","Kumar",28)
//Constructor functions
// function getAgeYear(){
//     return new Date().getFullYear() - this.age
// }

// function createUser(firstName,lastName,age){
//     const user = {
//         firstName:firstName,
//         lastName:lastName,
//         age:age,
//         getAgeYear:createUser.commonMethods.getBirthYear,
//     }
//     return user
// }
// createUser.commonMethods = {
//     getBirthYear:function(){
//         return new Date().getFullYear() - this.age
//     }
// }
// const user1 = createUser("Adfar","Rashid",27)
// const user2 = createUser("Mithun","Kumar",28)



function createUser(firstName,lastName,age){
     this.firstName = firstName;
     this.lastName = lastName;
     this.age=age;
}

const user1 = new createUser("Adfar","Rashid",27);
const user2 = new createUser("Mithun","Kumar",28);



